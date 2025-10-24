




























import { google } from 'googleapis';

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export async function appendToGoogleSheets(formData: ContactFormData): Promise<boolean> {
  try {
    // Configurar autenticación con Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      console.error('GOOGLE_SHEETS_SPREADSHEET_ID no está configurado');
      return false;
    }

    // Preparar los datos para enviar a Google Sheets
    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Bogota',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const values = [[
      timestamp,
      formData.fullName,
      formData.email,
      formData.message
    ]];

    // Enviar datos a Google Sheets
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Contactos!A:D', // Hoja llamada "Contactos", columnas A-D
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log('Datos enviados a Google Sheets:', response.status);
    return true;

  } catch (error) {
    console.error('Error al enviar datos a Google Sheets:', error);
    return false;
  }
}

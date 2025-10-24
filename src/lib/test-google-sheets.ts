import { appendToGoogleSheets } from '../lib/google-sheets';

export async function testGoogleSheetsConnection() {
  try {
    console.log('🧪 Probando conexión con Google Sheets...');

    const testData = {
      fullName: 'Test User',
      email: 'test@example.com',
      message: 'Este es un mensaje de prueba para verificar la integración con Google Sheets'
    };

    const result = await appendToGoogleSheets(testData);

    if (result) {
      console.log('✅ Conexión exitosa con Google Sheets');
      console.log('📊 Datos de prueba enviados correctamente');
      return true;
    } else {
      console.log('❌ Error al conectar con Google Sheets');
      console.log('🔍 Verifica la configuración de las variables de entorno');
      return false;
    }

  } catch (error) {
    console.error('💥 Error durante la prueba:', error);
    return false;
  }
}

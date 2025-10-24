import { NextRequest, NextResponse } from 'next/server';
import { testGoogleSheetsConnection } from '@/lib/test-google-sheets';

export async function POST(request: NextRequest) {
  try {
    console.log('🧪 Iniciando prueba de Google Sheets...');

    const success = await testGoogleSheetsConnection();

    if (success) {
      return NextResponse.json(
        {
          success: true,
          message: '✅ Conexión con Google Sheets exitosa',
          details: 'Los datos de prueba se enviaron correctamente a la hoja de cálculo'
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: '❌ Error de conexión con Google Sheets',
          details: 'Verifica la configuración de las variables de entorno en GOOGLE_SHEETS_SETUP.md'
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('💥 Error en el endpoint de prueba:', error);

    return NextResponse.json(
      {
        success: false,
        message: '💥 Error interno del servidor',
        details: 'Revisa los logs del servidor para más detalles'
      },
      { status: 500 }
    );
  }
}

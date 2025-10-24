import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/database';
import ContactMessage from '@/models/ContactMessage';
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact';
import { appendToGoogleSheets } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    const body = await request.json();

    // Validate using Yup schema
    try {
      await contactFormSchema.validate(body, { abortEarly: false });
    } catch (error: any) {
      return NextResponse.json(
        {
          success: false,
          error: error.errors?.[0] || 'Datos de formulario inválidos'
        },
        { status: 400 }
      );
    }

    // Create message with validated data
    const newMessage = new ContactMessage({
      id: crypto.randomUUID(),
      fullName: body.fullName,
      email: body.email,
      message: body.message,
    });

    // Save to database
    await newMessage.save();

    // Send to Google Sheets (no bloquea el éxito si falla)
    try {
      await appendToGoogleSheets(body);
      console.log('Datos enviados exitosamente a Google Sheets');
    } catch (sheetsError) {
      console.error('Error al enviar a Google Sheets:', sheetsError);
      // No retornamos error aquí para no afectar la funcionalidad principal
    }

    return NextResponse.json(
      { success: true, message: 'Mensaje guardado correctamente' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error:', error);

    return NextResponse.json(
      { success: false, error: 'No se pudo conectar a la base de datos' },
      { status: 503 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const messages = await ContactMessage.find({});

    return NextResponse.json(
      { success: true, data: messages },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error al obtener mensajes' },
      { status: 500 }
    );
  }
}

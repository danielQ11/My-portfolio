import * as yup from 'yup';

// Yup validation schema for contact form
export const contactFormSchema = yup.object({
  fullName: yup
    .string()
    .required('El nombre es requerido')
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede tener más de 100 caracteres')
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/,
      'El nombre solo puede contener letras, espacios, apóstrofes y guiones'
    )
    .test(
      'no-consecutive-spaces',
      'El nombre no puede tener espacios consecutivos',
      (value) => !value || !/\s{2,}/.test(value)
    )
    .test(
      'no-leading-trailing-spaces',
      'El nombre no puede comenzar ni terminar con espacios',
      (value) => !value || (!value.startsWith(' ') && !value.endsWith(' '))
    ),

  email: yup
    .string()
    .required('El email es requerido')
    .email('Por favor ingresa un email válido')
    .max(255, 'El email es demasiado largo')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'El email debe tener un formato válido'
    ),

  message: yup
    .string()
    .required('El mensaje es requerido')
    .min(15, 'El mensaje debe tener al menos 15 caracteres')
    .max(1000, 'El mensaje no puede tener más de 1000 caracteres')
    .test(
      'not-just-spaces',
      'El mensaje no puede estar vacío',
      (value) => !value || value.trim().length > 0
    ),
});

// Type for the form data
export type ContactFormData = yup.InferType<typeof contactFormSchema>;

// Validation function using Yup
export async function validateContactForm(data: ContactFormData) {
  try {
    await contactFormSchema.validate(data, { abortEarly: false });
    return null; // No errors
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      // Return the first error message
      return error.errors[0];
    }
    return 'Error de validación';
  }
}

// Alternative function that returns all errors
export async function validateContactFormAll(data: ContactFormData) {
  try {
    await contactFormSchema.validate(data, { abortEarly: false });
    return {}; // No errors
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      // Return all errors organized by field
      const errors: Record<string, string> = {};
      error.inner.forEach((err) => {
        if (err.path) {
          errors[err.path] = err.message;
        }
      });
      return errors;
    }
    return { general: 'Error de validación' };
  }
}

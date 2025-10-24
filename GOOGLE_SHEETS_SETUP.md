# Configuración de Google Sheets para Formulario de Contacto

## Pasos para configurar Google Sheets API:

### 1. Crear un proyecto en Google Cloud Console
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la Google Sheets API en "APIs & Services" > "Library"

### 2. Crear una Service Account
1. Ve a "APIs & Services" > "Credentials"
2. Haz clic en "Create Credentials" > "Service Account"
3. Completa la información y crea la cuenta
4. En la sección "Keys", crea una nueva key de tipo "JSON"
5. Descarga el archivo JSON (lo necesitarás para las credenciales)

### 3. Configurar Google Sheets
1. Crea una nueva hoja de cálculo en Google Sheets
2. Copia el ID de la hoja desde la URL (ej: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`)
3. Comparte la hoja con el email de tu service account (con permisos de edición)
4. Crea una hoja llamada "Contactos" con las siguientes columnas:
   - A: Fecha y Hora
   - B: Nombre Completo
   - C: Email
   - D: Mensaje

### 4. Configurar Variables de Entorno
Agrega estas variables a tu archivo `.env.local`:

```env
# Google Sheets API Configuration
GOOGLE_SHEETS_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account@your_project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

**IMPORTANTE**: Para la `GOOGLE_SHEETS_PRIVATE_KEY`, copia la clave privada completa del archivo JSON y reemplaza los saltos de línea reales con `\n`.

### 5. Funcionalidad
Una vez configurado, el formulario de contacto enviará los datos tanto a:
- **Base de datos MongoDB** (como respaldo principal)
- **Google Sheets** (para visualización y análisis)

Si falla el envío a Google Sheets, el formulario seguirá funcionando normalmente con la base de datos.

## Estructura de la hoja de Google Sheets:
| Fecha y Hora | Nombre Completo | Email | Mensaje |
|-------------|-----------------|-------|---------|
| 24/10/2024 15:30:25 | Juan Pérez | juan@email.com | Hola, me interesa... |

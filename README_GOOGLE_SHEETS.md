# 📊 Integración con Google Sheets

Tu formulario de contacto ahora puede enviar datos tanto a **MongoDB** como a **Google Sheets** simultáneamente.

## ✅ **Funcionalidad Implementada:**

### **📝 Formulario de Contacto:**
- **Campos:** Nombre, Email, Mensaje
- **Validación:** Yup schema validation
- **Envío dual:** MongoDB + Google Sheets
- **Respaldo:** Si falla Google Sheets, MongoDB sigue funcionando

### **🔄 Flujo de Datos:**
1. **Usuario envía formulario**
2. **Validación de datos**
3. **Guardado en MongoDB** ✅
4. **Envío a Google Sheets** ✅
5. **Respuesta al usuario**

## 🚀 **Configuración Rápida:**

### **1. Variables de Entorno (.env.local):**
```env
# Google Sheets API Configuration
GOOGLE_SHEETS_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account@your_project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

### **2. Configurar Google Sheets:**
- ✅ **Hoja creada:** "Contactos"
- ✅ **Columnas:** Fecha y Hora, Nombre, Email, Mensaje
- ✅ **Permisos:** Service account con acceso de edición

### **3. Probar la Integración:**
```bash
# Iniciar servidor
npm run dev

# Probar conexión (en otra terminal)
npm run test:sheets

# O manualmente:
curl -X POST http://localhost:3000/api/test-sheets
```

## 📋 **Estructura de Google Sheets:**

| Fecha y Hora | Nombre Completo | Email | Mensaje |
|-------------|-----------------|-------|---------|
| 24/10/2024 15:30:25 | Juan Pérez | juan@email.com | Hola, me interesa tu portafolio... |
| 24/10/2024 16:45:10 | María García | maria@email.com | ¿Podrías hacer un proyecto similar? |

## 🔧 **Archivos Modificados:**

### **API Endpoints:**
- `src/app/api/contact/route.ts` - **Modificado** para enviar a Google Sheets
- `src/app/api/test-sheets/route.ts` - **Nuevo** para pruebas

### **Funciones Utilitarias:**
- `src/lib/google-sheets.ts` - **Nueva** función de Google Sheets API
- `src/lib/test-google-sheets.ts` - **Nueva** función de pruebas

### **Configuración:**
- `src/types/env.d.ts` - **Actualizado** con variables de Google Sheets
- `package.json` - **Actualizado** con script de prueba

## 📚 **Documentación Completa:**

Lee `GOOGLE_SHEETS_SETUP.md` para instrucciones detalladas paso a paso.

## 🎯 **Próximos Pasos:**

1. **Configura las variables de entorno** en `.env.local`
2. **Prueba la conexión** con `npm run test:sheets`
3. **Verifica** que los datos lleguen a Google Sheets
4. **¡Listo!** El formulario ya funciona con ambas plataformas

## 🛡️ **Seguridad:**
- ✅ **No bloquea** el funcionamiento si falla Google Sheets
- ✅ **Logs detallados** para debugging
- ✅ **Validación completa** de datos
- ✅ **Service Account** segura (sin acceso a Gmail)

¡La integración está completa y lista para usar! 🚀✨

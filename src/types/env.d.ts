declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Google Sheets API
      GOOGLE_SHEETS_SPREADSHEET_ID?: string;
      GOOGLE_SHEETS_CLIENT_EMAIL?: string;
      GOOGLE_SHEETS_PRIVATE_KEY?: string;
    }
  }
}

export {};

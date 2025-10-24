## Database Configuration (MongoDB)

This project uses MongoDB with Mongoose for data persistence.

### Setup Instructions

1. **Install MongoDB** (if not already installed):
   - Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - Or use Docker: `docker run -d -p 27017:27017 --name mongodb mongo:latest`

2. **Create Environment Variables**:
   Create a `.env.local` file in the root directory with the following variables:

   ```env
   MONGODB_URI=mongodb://localhost:27017
   DB_NAME=portafolio_contact
   MONGODB_URI_PROD=your_production_mongodb_uri_here
   ```

3. **Database Collections**:
   - **Database Name**: `portafolio_contact`
   - **Collection**: `contactmessages` (automatically created by Mongoose)

4. **API Endpoints**:
   - `POST /api/contact` - Submit contact form
   - `GET /api/contact` - Retrieve all contact messages (admin use)

### Database Schema

The contact messages are stored with the following structure:

```javascript
{
  id: String,        // UUID generated for each message
  fullName: String,  // Required, max 100 chars
  email: String,     // Required, validated email, max 255 chars
  message: String,   // Required, max 1000 chars
  createdAt: Date    // Automatic timestamp
}
```

### Development

The database connection is automatically handled with connection pooling for optimal performance.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

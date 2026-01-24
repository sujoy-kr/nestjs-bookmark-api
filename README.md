# NestJS Bookmark API

A robust RESTful API for managing user bookmarks, built with NestJS, Prisma, and PostgreSQL.

This project allows users to authenticate (Sign up/Sign in) and perform CRUD operations on their personal bookmarks.

## 🛠 Tech Stack

- **Framework:** NestJS (Node.js)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT (JSON Web Tokens) with Passport strategy

## 🚀 Features

- **User Authentication:** Secure Signup and Login using bcryptjs hashing and JWT access tokens.
- **User Management:** specific endpoints to retrieve and update user profile data.
- **Bookmark Management:**
  - Create new bookmarks (Title, Description, Link).
  - View all bookmarks for the logged-in user.
  - View a specific bookmark by ID.
  - Edit and Delete bookmarks.
- **Input Validation:** Uses `class-validator` and `class-transformer` to ensure data integrity.

## ⚙️ Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- PostgreSQL

## 📦 Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/sujoy-kr/nestjs-bookmark-api.git
    cd nestjs-bookmark-api
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory (if not already present) and configure your database connection string. It should match the credentials of your PostgreSQL setup.

    ```env
    DATABASE_URL="postgresql://postgres:123@localhost:5434/nest?schema=public"
    JWT_SECRET="super-secret"
    ```

4.  **Run Prisma Migrations**
    Push the schema to your database:
    ```bash
    npx prisma migrate dev
    ```

## 🏃‍♂️ Running the Application

**Development Mode:**

```bash
npm run start:dev
```

## 📚 API Documentation (Swagger)

Once the application is running, you can visit the interactive API documentation to test endpoints directly in your browser:

**URL:** [http://localhost:3000/api](https://www.google.com/search?q=http://localhost:3000/api)

## 🔌 API Endpoints

### Auth

- `POST /auth/signup` - Register a new user
- `POST /auth/signin` - Login and receive Access Token

### Users

- `GET /users/me` - Get current user profile (Protected)
- `PATCH /users/me` - Edit user details (Protected)

### Bookmarks

- `GET /bookmarks` - Get all bookmarks (Protected)
- `GET /bookmarks/:id` - Get bookmark by ID (Protected)
- `POST /bookmarks` - Create a bookmark (Protected)
- `PATCH /bookmarks/:id` - Edit bookmark (Protected)
- `DELETE /bookmarks/:id` - Delete bookmark (Protected)

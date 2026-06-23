# ⚙️ Acadia Backend

The backend powers authentication, college search, college retrieval, and database operations for the Acadia platform.

---

## 🚀 Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt

### 🏫 College Services

- Retrieve All Colleges
- Search Colleges
- Get Individual College Details
- Saved Colleges Support

### 🗄 Database Management

- PostgreSQL Integration
- Prisma ORM
- Database Migrations
- Data Seeding

---

## 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT
- bcrypt

---

## 📂 Project Structure

```text
backend/
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
│
├── routes/
│
├── middleware/
│
├── server.js
│
├── package.json
│
└── README.md
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

#### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Colleges

#### Get All Colleges

```http
GET /api/colleges
```

---

#### Search Colleges

```http
GET /api/colleges/search?q=vit
```

---

#### Get College Details

```http
GET /api/colleges/:id
```

---

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_secret_key
```

---

## Database Commands

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Migration

```bash
npx prisma migrate dev
```

### Seed Database

```bash
node prisma/seed.js
```

---

## Start Server

```bash
node server.js
```

---

## Backend Highlights

- Secure JWT Authentication
- PostgreSQL Database Integration
- Prisma ORM
- RESTful API Architecture
- Scalable Backend Design
- Fast Query Performance

---

## Developer

### Niranjan J Menon

B.Tech CSE (AI & ML)


---

## License

Developed for educational and academic purposes.
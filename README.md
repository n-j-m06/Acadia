# 🎓 Acadia - College Discovery & Comparison Platform

Acadia is a modern full-stack college discovery platform designed to help students search, explore, compare, and evaluate higher education institutions across India through a unified and intuitive interface.

---

## 🚀 Project Overview

Choosing the right college is one of the most important decisions in a student's academic journey. Acadia simplifies this process by bringing college information, institutional details, rankings, and comparison tools into a single platform.

The platform empowers students to:

- 🔍 Search colleges instantly
- 🏫 Explore institution profiles
- 📊 Compare colleges
- 🎯 Make informed academic decisions

---

## ✨ Key Features

### 🔎 Smart College Search
Search colleges using a fast and responsive search interface with real-time suggestions.

### 🏛 College Profiles
View detailed information about institutions including:

- College Name
- Location
- Establishment Year
- Stream
- Category
- Ownership Type
- Rankings
- Accreditation Information
- Placement Statistics
- Fee Structure

### ⚖️ College Comparison
Evaluate multiple institutions side-by-side to identify the best fit.

### 🔐 Authentication
Secure user registration and login using JWT-based authentication.

---

## 🛠 Tech Stack

### Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express.js
- JWT Authentication
- Prisma ORM

### Database
- PostgreSQL

---

## 📂 Project Structure

```text
Acadia/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── public/
│
├── prisma/
│   ├── schema.prisma
│   └── seed.js
│
├── server.js
│
├── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/acadia.git
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_secret_key
```

### Run Database Migration

```bash
npx prisma migrate dev
```

### Seed Database

```bash
node prisma/seed.js
```

### Start Backend

```bash
node server.js
```

### Start Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🎯 Future Enhancements

- AI-powered college recommendations
- Scholarship explorer
- Placement analytics dashboard
- Cutoff prediction system
- Student reviews and ratings
- College ranking visualization

---

## 👨‍💻 Developer

### Niranjan J Menon

B.Tech Computer Science and Engineering (AI & ML)

VIT Chennai

Passionate about Full Stack Development, Artificial Intelligence, Data Engineering, and Research-Driven Innovation.

---

## 📜 License

This project is developed for educational and academic purposes.

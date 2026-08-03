# 🌳 Calm Tree

> A safe place to breathe. Reflect. Grow.

Calm Tree is a full-stack mental wellness application that helps users manage stress through journaling, mood tracking, calming music, AI conversations, and daily self-care.

> **Disclaimer**
> Calm Tree supports mental wellness. It is **not** a replacement for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health emergency, contact your local emergency services or a qualified mental health professional.

---

# Features

### 🔐 Authentication

- Register
- Login
- Logout
- JWT authentication
- Password hashing
- Protected routes

### 📔 Daily Journal

- Create journal entries
- Edit journals
- Delete journals
- Search journals
- Filter by date

### 😊 Mood Tracker

- Track daily mood
- Weekly mood history
- Monthly mood history
- Mood analytics

Supported moods

- Happy
- Calm
- Neutral
- Sad
- Anxious
- Angry

### 🎵 Calm Music

- Nature sounds
- Rain
- Ocean
- Forest
- Meditation
- Sleep
- Lo-Fi

### 🤖 AI Companion

Talk with an AI companion about your thoughts and feelings.

The AI can

- Listen
- Offer calming techniques
- Suggest breathing exercises
- Recommend journaling prompts
- Share self-care tips

### 🌿 Self-Care Tips

- Daily wellness tips
- Random affirmations
- Healthy habit suggestions

### 🫁 Breathing Exercise

- Inhale
- Hold
- Exhale

Animated with GSAP.

### 📍 Nearby Mental Health Professionals

- View nearby psychiatrists
- View nearby therapists
- Dummy appointment booking
- Future Google Maps integration

### 📞 Emergency Contacts

Save trusted contacts for quick access.

### 📊 Dashboard

- Today's mood
- Mood history
- Journal streak
- Recent journals
- Favourite music
- Daily affirmation

---

# Tech Stack

## Frontend

- React.js
- React Router
- Context API
- Tailwind CSS
- GSAP
- Axios
- React Hook Form
- Zod

## Backend

- Node.js
- Express.js
- JWT
- bcrypt
- Zod
- Express Validator

## Database

- PostgreSQL

## Cache

- Redis

## AI

- OpenAI API

---

# Project Structure

```text
calm-tree/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── validations/
│   ├── cache/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
└── README.md
```

---

# Database Tables

- Users
- Journals
- Mood Entries
- Music
- Favourite Songs
- AI Chat Sessions
- AI Messages
- Wellness Tips
- Emergency Contacts
- Appointments

---

# REST API

## Authentication

```http
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/profile
```

## Journal

```http
GET    /api/journals
POST   /api/journals
PUT    /api/journals/:id
DELETE /api/journals/:id
```

## Mood

```http
GET    /api/moods
POST   /api/moods
GET    /api/moods/stats
```

## Music

```http
GET    /api/music
GET    /api/music/category/:category
POST   /api/music/favourite
```

## AI

```http
POST   /api/chat
GET    /api/chat/history
```

## Tips

```http
GET    /api/tips
GET    /api/tips/random
```

## Contacts

```http
POST   /api/contacts
GET    /api/contacts
DELETE /api/contacts/:id
```

---

# Redis

Redis is used for

- User sessions
- API rate limiting
- Mood analytics
- AI chat history
- Daily wellness tips
- Frequently accessed data

---

# Installation

Clone the repository.

```bash
git clone https://github.com/your-username/calm-tree.git
```

Move into the project.

```bash
cd calm-tree
```

Install frontend dependencies.

```bash
cd client
npm install
```

Install backend dependencies.

```bash
cd ../server
npm install
```

---

# Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

DATABASE_URL=

JWT_SECRET=

REDIS_URL=

OPENAI_API_KEY=
```

---

# Run the Project

Start the backend.

```bash
npm run dev
```

Start the frontend.

```bash
npm run dev
```

---

# Future Features

- Google OAuth
- Email verification
- Password reset
- Push notifications
- Voice chat with AI
- Habit tracker
- Meditation timer
- Achievement badges
- Progressive Web App
- Mobile application

---

# License

This project is licensed under the MIT License.

---

# Author

**Your Name**

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-username

---

## ⭐ Star this repository if you found it helpful.

# ResumeBuilder

ResumeBuilder is a full-stack resume creator built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
Users can create sections (summary, experience, education, skills), choose templates, and export/share resumes.

## 🚀 Features
- User authentication (register/login with JWT)
- Create & edit resume sections (summary, experience, education, skills, etc.)
- Multiple templates & live preview
- Save drafts, duplicate, and publish shareable links
- Export to PDF (server or client render)
- Optional image/logo upload
- Mobile-friendly, responsive UI

## 🛠 Tech Stack

**Frontend**
- React + Vite (or CRA)
- React Router
- Axios / React Query
- TailwindCSS (or other CSS framework)

**Backend**
- Node.js + Express
- MongoDB (Atlas)


## 📦 Installation

### 1. Clone the repository
```
git clone git@github.com:YourUsername/ResumeBuilder.git
cd ResumeBuilder
```

### 2. Install dependencies
```
cd backend
npm install
cd ../frontend/resume-builder
npm install
```

### 3. Set up environment variables
Create a .env file inside the backend/ directory:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=8000
```

### 4. Start the development servers
``
cd backend
npm run dev
cd ../frontend/resume-builder
npm run dev
``



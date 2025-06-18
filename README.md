
# 🚀 Express Backend Template

A clean and modular Node.js backend boilerplate using **Express**, **MongoDB**, **JWT**, and best practices — perfect for building secure and scalable APIs.

---

## ⚙️ Tech Stack

- **Express.js** – Lightweight backend framework  
- **Mongoose** – ODM for MongoDB  
- **bcrypt** – For hashing passwords securely  
- **jsonwebtoken (JWT)** – Token-based auth  
- **dotenv** – Load environment variables  
- **cookie-parser** – Handle cookies in requests  

---

## 🗂 Project Structure

```
.
├── config/
│   └── db.js               # Optional extra config (if needed)
├── controllers/
│   └── authController.js   # Register/Login logic
├── db/
│   └── index.js            # MongoDB connection logic
├── middlewares/
│   ├── authMiddleware.js   # JWT protection
│   └── errorMiddleware.js  # Global error handling
├── models/
│   └── User.js             # Mongoose schema
├── routes/
│   └── authRoutes.js       # Auth routes
├── utils/
│   ├── asyncWrapper.js     # Try-catch wrapper
│   ├── ApiError.js         # Custom error class
│   └── sendResponse.js     # Standard response format
├── app.js                  # Main app setup
├── index.js                # Entry point
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🔐 Features

- ✅ User registration & login with hashed passwords  
- ✅ JWT-based authentication with cookie support  
- ✅ Global error handling and async wrapper  
- ✅ Standardized API response format  
- ✅ Modular and scalable project structure  

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/express-backend-template.git
cd express-backend-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your_mongo_connection_uri
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=3d
COOKIE_NAME=token
```

### 4. Start the Server

```bash
npm run dev
```

> Tip: Add this to your `package.json` scripts:

```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
```

---

## 📌 API Endpoints

| Method | Endpoint        | Description         | Auth Required |
|--------|------------------|---------------------|----------------|
| POST   | `/api/register` | Register user       | ❌             |
| POST   | `/api/login`    | Login user          | ❌             |
| GET    | `/api/profile`  | Get current user    | ✅             |

---

## 🧠 Utils Overview

- **`asyncWrapper(fn)`**: Wrap async route handlers to avoid boilerplate try-catch  
- **`ApiError`**: Custom error class with status and message  
- **`sendResponse(res, data)`**: Standard format for all API responses  

---

## 🔧 DB Connection

MongoDB is initialized in `db/index.js` and imported in `index.js` to ensure it's connected before the app runs.

```js
// db/index.js
const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connected');
};

module.exports = connectDB;
```

---

## 🧪 Future Add-ons

- [ ] Refresh tokens  
- [ ] Role-based access  
- [ ] Rate limiting & CORS config  
- [ ] Swagger/OpenAPI docs  

---

## 🤝 Contributing

Pull requests welcome! If you spot a bug or have an idea, feel free to open an issue or PR.

---

## 📬 Contact

Questions, feedback, or want to collab?  
Reach out at `youremail@example.com`

---

import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';



const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json({
    limit: '16kb'
}));
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}));
app.use(cookieParser());

// Importing routes
import userRoutes from './routes/user.routes.js';
//using the imported routes
app.use('/api/v1/users', userRoutes);

export default app;
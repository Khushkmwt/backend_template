
import { asyncWrapper } from '../utils/asyncWrapper.js';

// exxample controller only response with a success message
export const registerUser = asyncWrapper(async (req, res) => {
    res.status(201).json({
        success: true,
        message: 'User registered successfully',
    });
});
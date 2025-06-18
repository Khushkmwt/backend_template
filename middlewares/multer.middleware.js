import multer from "multer";
import path from "path";
// Set up storage configuration for multer
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    }, 
    filename: (req, file, cb) => {
        // Use the original name of the file
        cb(null, file.originalname);
    }
    });
    // Create the multer instance with the storage configuration
    const upload = multer({
        storage: storage,
        limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
    })
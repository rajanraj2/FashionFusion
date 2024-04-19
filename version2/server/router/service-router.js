import express from 'express';
import services from '../controllers/service-controller.js';
import multer from 'multer';
// import authMiddleware from '../middlewares/auth-middleware.js'; // Import authMiddleware
// import user from '../controllers/auth-controller.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Get the username from the request
        // const username = req.user.username; // Assuming user object is available in the request

        cb(null, `./uploads`)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage });

const router = express.Router();

router.route('/').post( upload.single("clothImage"), services);

export default router;

// authMiddleware, user,
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Image from "../models/image-model.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

// Middleware for deleting image name from database wherever email matches
router.post('/', async (req, res) => {
    try {
        const { email, imageName } = req.body;

        // Delete all entries from the Image collection where email and imageName match
        const result = await Image.deleteMany({ email, imageName });

        // Check if any documents were deleted
        if (result.deletedCount > 0) {
            return res.status(200).json({ message: 'Image deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Image not found' });
        }
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;



// // Middleware for getting images
// router.get('/', (req, res) => {
//     // console.log('GET request received at /api/getImages');
//     const imagesDirectory = path.join(__dirname, '..', 'uploads');
//     fs.readdir(imagesDirectory, (err, files) => {
//         if (err) {
//             console.error('Error reading images directory:', err);
//             return res.status(500).send({ error: 'Internal server error' });
//         }
//         const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
//         res.send({ images: imageFiles });
//     });
//     // console.log('GET request processed successfully');
// });

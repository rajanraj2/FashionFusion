import express from 'express';
import path from 'path'; // Import path module
import fs from 'fs'; // Import fs module
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Image from "../models/image-model.js"; // Import the Image model

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

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



// Middleware for getting images associated with a user's email
router.post('/', async (req, res) => {
    try {
        // Retrieve the email of the current logged-in user from req.user.email
        // console.log("Current user email", req.user.email);
        // const userEmail = req.user.email;
        // const userEmail = "rajanraj@gmail.com";
        const userEmail = req.body.email;


        // Query the database to find images associated with the user's email
        const images = await Image.find({ email: userEmail });

        // Get the filenames of the images from the database
        const imageFiles = images.map(image => image.imageName);

        // Map each image to an object containing imageName and clothType
        const imageData = images.map(image => ({
            imageName: image.imageName,
            clothType: image.clothType,
            extra: image.extra
        }));

        // Send the image data as a response
        res.send({ images: imageData });

        // // Get the absolute path to the uploads directory
        // const imagesDirectory = path.join(__dirname, '..', 'uploads');

        // // Filter the imageFiles array to include only existing files in the uploads directory
        // const validImageFiles = imageFiles.filter(file => {
        //     const filePath = path.join(imagesDirectory, file);
        //     return fs.existsSync(filePath);
        // });

        // // Send the valid image filenames as a response
        // res.send({ images: validImageFiles });
    } catch (error) {
        console.error('Error retrieving images:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});


export default router;

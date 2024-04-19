import ImageData from '../models/image-model.js';

const recommendCloth = async (req, res) => {
    try {
        const { email, imageName, clothType, extra } = req.body;

        // Find matching entries in the database based on email, extra, and clothType
        const recommendedImages = await ImageData.find({
            email: email,
            extra: extra == "Darks" ? "Light" : "Darks", // If extra is "Darks", find "Light", else find "Darks"
            clothType: clothType == "T-shirt" ? "Trouser" : "T-shirt" // If clothType is "T-shirt", find "Trouser", else find "T-shirt"
        });
        
        // console.log("Recommended images:", recommendedImages);

        // Return the recommended images
        res.status(200).json(recommendedImages);
    } catch (error) {
        console.error("Error occurred while recommending cloth:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default recommendCloth;

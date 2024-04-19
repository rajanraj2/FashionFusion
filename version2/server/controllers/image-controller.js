import Image from "../models/contact-model.js";

const storeImage = async (req, res) => { 
    try {
        const response = req.body; 
        await Image.create(response);
        return res.status(200).json({message: "Image data sent successfully"});
    }
    catch (error) {
        return res.status(500).json({message: "Image data not sent"});
    }
};

export default storeImage;
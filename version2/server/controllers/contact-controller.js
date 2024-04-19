import Contact from "../models/contact-model.js";

const contactForm = async (req, res) => {
    try {
        const response = req.body; 
        await Contact.create(response);
        return res.status(200).json({message: "Message sent successfully"});
    }
    catch (error) {
        return res.status(500).json({message: "Message not sent"});
    }
};

export default contactForm;
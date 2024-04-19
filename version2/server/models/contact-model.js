import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const contactSchema = new Schema({ 
    username: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}, 
});

// create a model or collection
const Contact = new model('Contact', contactSchema);

export default Contact;
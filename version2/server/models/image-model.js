import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const imageSchema = new Schema({
    imageName: { type: String, required: true },
    clothType: { type: String, required: true },
    email: { type: String, required: true },
    userId: { type: String, required: true },
    extra: { type: String, required: true }
});

const Image = model('Image', imageSchema);

export default Image;

import mongoose from "mongoose";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    }
});

userSchema.pre('save', async function(next) {
    // console.log("pre method: ",this);
    const user = this;
    if (!user.isModified('password')) {
        next();
    }
    try{
        const saltRound = await bycrypt.genSalt(10);
        const hash_password = await bycrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }
    catch(error) {
        next(error);
    }
})

// match password
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bycrypt.compare(enteredPassword, this.password);
}

// json web token
userSchema.methods.generateToken = async function() {
    try{
        return jwt.sign({
            userID: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "30d",
        }
        );
    }
    catch(error) {
        console.error(error);
    }
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
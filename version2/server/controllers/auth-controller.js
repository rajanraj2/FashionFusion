import User from '../models/user-model.js';
import bycrypt from 'bcryptjs';

const home = async (req, res) => {
    res.send('Hello World using controller');
};

const register = async (req, res, next) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({email});
        const nameExist = await User.findOne({username});
        

        if(userExist) {
            return res.status(400).send({msg: "Email already registered"});
        }
        else if (nameExist) {
            return res.status(400).send({msg: "Username already exists"});
        }



        const UserCreated = await User.create({username, email, phone, password});

        res.status(201).json({
            message: "Registration successful", 
            token: await UserCreated.generateToken(), 
            userId: UserCreated._id.toString(),
        });
    }
    catch(error) {
        // res.status(400).send({msg : "page not found"},);
        console.log(error);
        next(error);
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User
        .findOne({email});
        if (!userExist) {
            console.log("User not found");
            return res.status(400).json({message: "User does not exist"}).send({msg: "Invalid credentials"});
        }
        // const isMatch = await bycrypt.compare(password, userExist.password);
        const isMatch = await userExist.matchPassword(password);
        
        if (isMatch) {
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else {
            res.status(400).json({message: "Invalid email or password :("}); 
            // console.log("invalid email or password :(");
        }
    }
    catch {
        // res.status(400).send({msg : "page not found"},);
        console.log("error from login controller");
    }
}   


// USER LOGIC : to send user data

const user = async (req, res) => {
    try {
        const userData = req.user;
        // console.log(userData);
        return res.status(200).json({ userData});
    }
    catch(error) {
        console.log(`error from user controller: ${error}`)
    }
}


export default home;

export { register, login, user };

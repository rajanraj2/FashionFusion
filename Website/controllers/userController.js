import User from '../model/user.js';
import ErrorHandler from "../utils/ErrorHandler.js";
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js';
import sendMail from '../utils/sendMail.js';
import jwt from  'jsonwebtoken';
import sendToken from '../utils/jwtToken.js';


// create user
export const createAccount = async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      // console.log(name);
      const userEmail = await User.findOne({ email });
  
      if (userEmail) {  
        return next(new ErrorHandler("User already exists", 400));
      }

    //   if (!userEmail && !email.toLowerCase().endsWith('@bennett.edu.in')){
    //     return next(new ErrorHandler("invalid bennett id!", 400));
    //   }
  
      const user = {
        name: name,
        email: email,
        password: password
      };
  
      const activationToken = createActivationToken(user);
  
      const activationUrl = `https://localhost:${process.env.PORT}/${activationToken}`;
  
      try {
        await sendMail({
          email: user.email,
          subject: "Activate your account",
          message: `Hello ${user.name}, please click on the link to verify and activate your nexchange Saccount: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `please check your email:- ${user.email} to activate your account!`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  };
  
 
// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};


// activate user
export const activateUser = catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newUser) {
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password } = newUser;

      let user = await User.findOne({ email });

      if (user) {
        return next(new ErrorHandler("User already exists", 400));
      }
      user = await User.create({
        name,
        email,
        password,
      });

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });

  // login user
  export const login = catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      // console.log(email + " " + password);
      if (!email || !password) {
        return next(new ErrorHandler("Please provide all the fields!", 400));
      }

      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        return next(new ErrorHandler("User doesn't exists!", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("invalid password", 400)
        );
      }

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });

// load user
export const loadUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return next(new ErrorHandler("User doesn't exist", 400));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});


// logout user:
export const logout = catchAsyncErrors(async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(201).json({
      success: true,
      message: "Log out successful!",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
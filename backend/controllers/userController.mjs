import userSchema from "../models/userSchema.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    //check user is already registered or not
    const isUser = await userSchema.findOne({ email: email });
    const isUsernameExisted = await userSchema.findOne({ username: username });

    //-------------------validate user already existed or not-------------
    if (isUser) {
      return res.status(200).json({
        success: false,
        message: "user already registered",
      });
    }
    //---------------validate username already existed or not ---------------------
    if (isUsernameExisted) {
      return res.status(200).json({
        success: false,
        message: "username already existed",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const userDetail = await userSchema({
      ...req.body,
      password: hashPassword,
    });
    await userDetail.save();
    if (userDetail) {
      return res.status(201).json({
        success: true,
        message: "user created",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
      error: error,
    });
  }
};

export const userNameExisted = async (req, res) => {
  const isUserName = await userSchema.findOne({ username: req.body.username });
  const isUserEmail = await userSchema.findOne({ email: req.body.email });

  //checking email is already present or not
  // if (!isUserEmail) {
  //   return res.status(200).json({
  //     success: false,
  //   });
  // } else {
  //   return res.status(200).json({
  //     success: true,
  //     message: "email existed",
  //   });
  // }

  //checking username is already present or not
  if (!isUserName) {
    return res.status(200).json({
      success: false,
    });
  } else {
    return res.status(200).json({
      success: true,
      message: "username existed",
    });
  }
};

export const userLogin = async (req, res) => {
  const { username, password } = req.body;
  const isuserName = await userSchema.findOne({ username: username });

  //send response if user doesn't exist
  if (!isuserName) {
    return res.status(200).json({
      success: false,
      message: "username or password is incorrect",
    });
  }

  //check password is correct or not
  const isCorrectPassword = await bcrypt.compare(password, isuserName.password);
  if (!isCorrectPassword) {
    return res.status(200).json({
      success: false,
      message: "username or password is incorrect",
    });
  }

  //create token for login

  const token = jwt.sign({ id: isuserName._id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });

  //sending successfully login response

  return res.status(200).json({
    success: true,
    isuserName,
    token,
  });
};

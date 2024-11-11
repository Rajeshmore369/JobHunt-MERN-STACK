import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNo, password, role } = req.body;
    if (!fullname || !email || !phoneNo || !password || !role) {
      return res.status(400).json({
        message: "Somthing is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email is Already Register",
        success: false,
      });
    }
    const hasedPassword = await bcrypt.hash(password, 12);

    await User.create({
      fullname,
      email,
      phoneNo,
      password: hasedPassword,
      role,
    });
    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Somthing is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    // check role is correct or not
    if (role !== user.role) {
      return res.status(400).json({
        message: "Invalid Role",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNo: user.phoneNo,
      role: user.role,
      token: token,
      profile: user.profile,
    };
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged Out Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNo, bio, skills } = req.body;
    const file = req.file;

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNo) user.phoneNo = phoneNo;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;
    await user.save();

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNo: user.phoneNo,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
      message: "Profile updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

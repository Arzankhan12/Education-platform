import {orgUser, User} from "../model/useModel.js"
import bcrypt from "bcrypt"
import {OTP} from "../model/useModel.js";
import nodemailer from "nodemailer";
import crypto from "crypto";
import dotenv from 'dotenv'
dotenv.config()

// Generate a random OTP
const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use Gmail or any other service
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // Your email password or app-specific password
  },
});

// Send OTP to email
export const sendOTP = async (req, res) => {
  const { email } = req.body;

  try {
    // Generate OTP
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 minutes

    // Save OTP to database
    await OTP.create({ email, otp, otpExpires });

    // Send OTP via email
    const mailOptions = {
      from: `"Your App" <${process.env.EMAIL}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. This OTP is valid for 5 minutes.`,
      html: `<p>Your OTP is <b>${otp}</b>. This OTP is valid for 5 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent to email successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send OTP." });
  }
};

// Verify OTP
export const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
  
    try {
      const otpRecord = await OTP.findOne({ email, otp });
  
      if (!otpRecord) {
        return res.status(400).json({ message: "Invalid OTP." });
      }
  
      if (otpRecord.otpExpires < Date.now()) {
        return res.status(400).json({ message: "OTP has expired." });
      }
  
      // Check if user exists
      const user = await orgUser.findOne({ email });
  
      // Remove the OTP record after verification
      await OTP.deleteOne({ email, otp });
  
      if (user) {
        return res.status(200).json({ message: "OTP verified.", isNewUser: false });
      }
  
      // User is new
      return res.status(200).json({ message: "OTP verified.", isNewUser: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to verify OTP." });
    }
  };
  

export const create = async(req, res) => {
    const {fullname, email, password } = req.body;
    try {
        const oldEmail = await User.findOne({ email })
        if (oldEmail) {
            return res.json("!email");
        }
        const salt = 10;
        const encryPass= await bcrypt.hash(password,salt)
        const newUser = await User.create({
          email,fullname,password: encryPass
        })
        await newUser.save();
        res.status(200).json("register Successfully")
        
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.json("!exists");
        }
       const isMatched= await bcrypt.compare(password,user.password)
        if (!isMatched) {
            return res.json("!Success");
        }
        res.status(200).json("User Login Successfully")
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const registerUser = async (req, res) => {

  
  const { email, firstName, lastName, companyName,teachingExperience, videoProLevel,audienceReach } = req.body;

  if (!email || !firstName || !lastName || !companyName || !teachingExperience || !videoProLevel || !audienceReach) {
    return res.status(400).json({ message: "All fields are required." });
  }
  

  try {
    const existingUser = await orgUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered." });
    }

    const newUser = new orgUser({
      email,
      firstname: firstName, // Correct mapping
      lastname: lastName,   // Correct mapping
      companyName,
      teachingExperience,
      videoProLevel,
      audienceReach,
    });
    
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to register user." });
  }
};

export const getAll = async (req,res) => {
  
  try {

    const user = await orgUser.find()
    if (!user) {
      return res.status(404).json({msg:"userData not found"})
    }
    res.status(200).json(user)
    
  } catch (error) {
    res.status(500).json({msg:error})
  }

}
export const getOne = async (req, res) => {
  const { id } = req.params.id;
  
  try {

    const user = await orgUser.findOne(id)
    if (!user) {
      return res.status(404).json({msg:"userData not found"})
    }
    res.status(200).json(user)
    
  } catch (error) {
    res.status(500).json({msg:error})
  }

}

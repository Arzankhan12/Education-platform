import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    fullname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
})


const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  otpExpires: {
    type: Date,
    required: true,
  },
});

const userSche = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
  },
      
  teachingExperience: {
    type: String,
    required: true,
  },
  videoProLevel: {
    type: String,
    required: true,
  },
  audienceReach: {
    type: String,
    required: true,
  }
    
  });
  
  const orgUser = mongoose.model("orgUser", userSche);
  

const OTP = mongoose.model("OTP", otpSchema);
const User = mongoose.model("User", userSchema)
export {OTP,User,orgUser}
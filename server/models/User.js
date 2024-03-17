import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
  fName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Please enter your date of birth"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  isTeacher: {
    type: Boolean,
    default: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  enrolledCourses: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      poster: String,
    },
  ],
  playlist: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      poster: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ResetPasswordToken: String,
  ResetPasswordExpire: String,
});

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

schema.methods.comparePassword = async function (password) {
  // console.log(this.password);
  return await bcrypt.compare(password, this.password);
  //password received from user, this.password is the password already in database(hashed)
};

export const User = mongoose.model("User", schema);

// Teacher Model
const teacherSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  languages: {
    type: String,
    default: "English",
  },
});

export const Teacher = mongoose.model("Teacher", teacherSchema);

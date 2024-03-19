import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter video title"],
    minLength: [4, "Title should be more than 3 characters"],
    maxLength: [80, "Title can't exceed 80 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter video description"],
    minLength: [20, "Description should be more than 19 characters"],
  },
  videoUrl: {
    type: String,
    required: [true, "Please provide video URL"],
  },
  schedule: {
    type: Date,
    required: [true, "Please provide scheduled date for the video"],
  },
});

const liveStreamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter live stream title"],
    minLength: [4, "Title should be more than 3 characters"],
    maxLength: [80, "Title can't exceed 80 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter live stream description"],
    minLength: [20, "Description should be more than 19 characters"],
  },
  schedule: {
    type: Date,
    required: [true, "Please provide scheduled date for the live stream"],
  },
  roomCode: {
    type: String,
    required: true,
  },
});

const oneOnOneSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter one-on-one session title"],
    minLength: [4, "Title should be more than 3 characters"],
    maxLength: [80, "Title can't exceed 80 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter one-on-one session description"],
    minLength: [20, "Description should be more than 19 characters"],
  },
  schedule: {
    type: Date,
    required: [
      true,
      "Please provide scheduled date for the one-on-one session",
    ],
  },
  roomCode: {
    type: String,
    required: true,
  },
});

const lectureSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["video", "liveStream", "oneOnOne"],
    required: true,
  },
  video: videoSchema,
  liveStream: liveStreamSchema,
  oneOnOne: oneOnOneSchema,
});

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter course title"],
    minLength: [4, "Title should be more than 3 characters"],
    maxLength: [80, "Title can't exceed 80 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter course description"],
    minLength: [20, "Description should be more than 19 characters"],
  },
  lectures: [lectureSchema],
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  numOfVideos: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: [true, "Please provide course creator name"],
  },
  creator: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course = mongoose.model("Course", schema);

import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rollNo: {
      type: Number,
      required: true,
      unique: true,
    },
    score: Number,
  },
  { collection: "users", timestamps: true }
);

export const User = models.user || model("user", userSchema);

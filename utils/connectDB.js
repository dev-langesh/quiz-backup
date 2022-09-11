import mongoose from "mongoose";

function connectDB() {
  const db = mongoose.connect(
    process.env.MONGO_URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (err) => {
      if (err) console.log("error");
      else console.log("Connected to mongodb");
    }
  );
}

export default connectDB;

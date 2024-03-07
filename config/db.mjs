import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        const connectDb = await mongoose.connect(process.env.MONGO_URI);

      console.log('DATABASE CONNECTED');
    } catch (error) {
      console.log(error);
    }
  }
  connectDB().then(() => {
    app.listen(process.env.PORT)
  }).catch((err) => {
    console.log(err)
  })

  export default connectDB;
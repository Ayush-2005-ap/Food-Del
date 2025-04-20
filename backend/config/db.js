import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://apayush20:Yash506@cluster0.j4urang.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
import mongoose from "mongoose";

async function connectDB() {
  const db = await mongoose.connect("mongodb://localhost/typegoosedb");
  console.log("Database is connected to", db.connection.name);
}

connectDB();

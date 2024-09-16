const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const decorRoutes = require("./routes/decor-route");
const careRoutes = require("./routes/care-route");
const lightingRoutes = require("./routes/lighting-route");
const getDecor = require("./routes/get-decor-route");
const getLighting = require("./routes/get-lighting-route");
const getCare = require("./routes/get-care-route");
const createPayment = require("./routes/payment-route");
const contactRoutes = require("./routes/contactRoutes");

const authenticateRoutes = require("./routes/authenticate-admin-route");

dotenv.config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    return res.send("hello world")

})

console.log(process.env.MY_EMAIL, process.env.YOY_KNOW_WHAT_IS_IT);
const MONGODB_URL =
  "mongodb+srv://dikshyak88:jyuthrAun9e1cwvG@cluster0.u0wpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const connectDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL, {})
      .then((mongoose) => {
        console.log("Connected");
        return mongoose;
      })
      .catch((err) => console.error("MongoDB connection error:", err));
    cached.conn = cached.promise;
    return cached.conn;
  }
};

connectDatabase();
app.use("/backend/", decorRoutes);
app.use("/backend/", lightingRoutes);
app.use("/backend/", careRoutes);
app.use("/backend/", getDecor);
app.use("/backend/", getLighting);
app.use("/backend/", getCare);
app.use("/backend/", createPayment);
app.use("/backend/", contactRoutes);
app.use("/backend/", authenticateRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

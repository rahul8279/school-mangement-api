import dotenv from "dotenv"
dotenv.config({})
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import schoolRoutes from "./routes/schoolRoutes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "*",
    credentials: true
}))
const PORT = process.env.PORT || 3000 

app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is up and running!" });
});

app.use("/api/schools", schoolRoutes);

// FIX 2: Add '0.0.0.0' to the listen method
app.listen(PORT, '0.0.0.0', () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})

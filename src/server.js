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
const PORT = process.env.MYSQLPORT || 3000

app.use("/api/schools", schoolRoutes);

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})

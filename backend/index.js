import express from "express"
import dotenv from "dotenv"
dotenv.config();
import connectedDb from "./config/db.js";
import authRouter from "./routes/auth.router.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/user.routes.js";



const app= express();
// app.use(cors({
//     origin:"http://localhost:5173",
//     credentials:true
// }))
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
const port =process.env.PORT || 5000;


app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
// app.get("/", (req, res) => {
//   res.send("Server is running ✅");
// });

app.listen(port,()=>{
    connectedDb()
    console.log(`Server is now connected ${port}`);
})
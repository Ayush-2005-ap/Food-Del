import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoute.js"
// import hotspotRouter from "./routes/hotspotRoutes.js"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();


//api endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
// app.use('/api/hotspot',hotspotRouter)
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/",(req,res)=>{
    res.send("Backend")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://apayush20:Yash506@cluster0.j4urang.mongodb.net/?
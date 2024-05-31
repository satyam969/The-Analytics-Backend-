require("dotenv").config();
// top pe hi likhna wo code for env
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const connectDb=require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const contactRoute=require("./router/contact-router")
const cors=require("cors")
const serviceRoute=require("./router/service-router")
const adminRoute=require("./router/admin-router")


// ek aur step krna hoga wrna data nhi jyega database pe 
const corsOptions={
    origin:"https://the-analytics-frontend-19b6u2mmc-priya-rajs-projects-52cd4eb0.vercel.app",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
// cors ko btana hai ki 5173 bhi mera hi part hai 
// data jaye isliye sbse upar isko state kro 
app.use(cors(corsOptions));




// middle ware to make this server compatable for json file 
// middle ware aage wle code ko bhi 
// ye aage wle code ko kharab kr dega bht impt hai middleware ka use janana

app.use(express.json());

// parses incoming request from bodies with json payloads 
// place it before any routes that need to handle any json data





// adding contact route 
app.use("/api/form", contactRoute)



// lect 3
// "/"" represents the root path
// (req,res) arrow function handling and constructing response
// res.send("hello world") sends the hello world message 

// nodemon ko pta kaise chlega ki ye router is server se linked hai 
// so we need to export router
// mount kha krana chahte ho
app.use("/api/auth", authRoute)


// services route
app.use("/api/data",serviceRoute);


// for admin panel
app.use("/api/admin",adminRoute);



// app.get("/",(req,res)=>{
//     res.status(200).send("welcome to this")
// })


// app.get("/register",(req,res)=>{
//     res.status(200).send("welcome to the registration page")
// })



// better way to define root is to make sure thecode is clean




// error middleware
app.use(errorMiddleware);
// connection create hon e se pehle hi hm check kr lnge error 



// if connection established then 
// as connectdb will return promise 



// Database connection and handler export for Vercel
const handler = async (req, res) => {
    try {
        await connectDb(); // Ensure database connection
        app(req, res); // Handle request with Express app
    } catch (e) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = handler;

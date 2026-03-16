
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res)=>{
//     res.send("backend is running");
// });
// app.listen(4000,()=>{
//     console.log("server running on port 4000");
// });



import express from "express";
import cors from "cors";
import jobRoutes from "./routes/jobRoutes.js"; 
import applicationRoutes from "./routes/applicationRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', (req,res)=>{
     const {name,email,password,role} = req.body;
    console.log("received data");
    console.log(name,email,password,role);
    res.json({message: "Registerd Successfull"});
});
 app.listen(3000, () => {
     console.log("Server is running on port 3000");
}); 



// app.post('/login', (req,res)=>{
//     const {email,password} = req.body;
//    console.log("received data");
//    console.log(email,password);
//    res.json({message: "Login Successfull"});
// } ); 

app.use("/api/jobs", jobRoutes);                                                                                                    

app.use("/api/applications", applicationRoutes);
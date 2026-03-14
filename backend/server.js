
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res)=>{
//     res.send("backend is running");
// });
// app.listen(4000,()=>{
//     console.log("server running on port 4000");
// });



const express = require('express');
const cors = require('cors');
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


app.get('/jobs', (req, res) => {
    const jobs = [
        { title: "Frontend Developer", company: "ABCD Tech", location: "Bangalore" },
        { title: "Backend Developer", company: "XYZ Ltd", location: "Hyderabad" },
        { title: "Full Stack Developer", company: "TechSoft", location: "Chennai" },
        { title: "Data Scientist", company: "DataWorks", location: "Pune" },
        { title: "DevOps Engineer", company: "CloudNet", location: "Gurgaon" },
        { title: "UI/UX Designer", company: "DesignHub", location: "Mumbai" },
    ];

    res.json(jobs);
});
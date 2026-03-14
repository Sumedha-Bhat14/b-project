const express = require('express');
const cors = require('cors');
const app = express();  
app.use(cors());
app.use(express.json());


app.post('/login', (req,res)=>{
    const {username,password} = req.body;
   console.log("received data");
   console.log(username,password);
   res.json({message: "Login Successfull"});
} ); 
app.listen(3000, () => {
     console.log("Server is running on port 3000");
}); 

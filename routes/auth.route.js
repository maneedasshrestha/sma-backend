import { Router } from "express";
import { login, register, getUser } from "../services/auth.services.js";

const router = Router();

//localhost:3000/api/auth/login
router.post("/login", async (req, res) => {
    // res.send("Login route");
    try{
        const result = await login(req)
        res.send(result)
    }catch(error){
        console.log("Error at login: ", error)
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})


// post /api/auth/register
router.post("/register",async(req,res)=>{
    // res.end("Hello from register");
    try{
        const result = await register(req)
        res.send(result)
    }catch(error){
        console.log("error: ", error)
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

// post /api/auth/forgetPassword
router.post("/forgetPassword",(req,res)=>{
    res.end("Hello from Forget Password");
})

// post /api/auth/api
router.get("/users/:userId",async (req,res)=>{
    try{
        const result = await getUser(req)
        res.send(result)
    }catch(error){
        console.log("error: ", error)
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})
 
export default router;
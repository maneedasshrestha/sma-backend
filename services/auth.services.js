import { PrismaClient } from '@prisma/client'
import "dotenv/config.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const login = async (req) =>{
    const {email, password, gender, fullname} = req.body;

    const user = await prisma.user.findFirst({
        where:{
            email: email
        }
    })
    if(!user){
        return("User of given email doesnot exists!");
    }
    bcrypt.compare(password, user.password, function(err, result) {
        if(err){
            return("Password doesnot match!");
        }
    });
    // if(password != user.password){
    // }
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: user
    }, process.env.jwtsecretcode);

    return {user, token}; //token: token
}

const register = async (req) => {
    let {email, password, fullname, gender} = req.body
    password = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data:{
            email,
            password,
            fullname,
            gender
        }
    })
    const token = jwt.sign({
        exp:  Math.floor(Date.now() / 1000) + (60 * 60),
        data: user
    }, process.env.jwtsecretcode);

    return {user, token}; //token: token
}

 
export {login, register}
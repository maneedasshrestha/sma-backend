import express from "express";
import router from "./routes/route.js";
import cors from "cors";

const app =express();
const port=3001;

app.use(express.json());
app.use(cors())
//routing
app.use("/api",router);

app.listen(port, (error) => {
    if(error){
        console.log("Error running the server");
    }
    console.log("Server is running on port", 3001);
})


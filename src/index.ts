import  express  from "express";
import mongoose from "mongoose";
import router from "./routes/index";

const PORT = 4000;
const app = express(); 
app.use(express.json());

const MONGO_URL = "mongodb://127.0.0.1:27017";
mongoose.connect(MONGO_URL,{
    dbName:"node-typecript-app"
}).then(()=>{
    console.log("Database Connected");
    
}).catch((error)=>{
    console.log("Error: ",error);
});

app.use("/",router)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
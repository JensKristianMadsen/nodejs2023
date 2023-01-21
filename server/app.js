import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();



/* Node:  MONGOOSE SETUP */
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => {
    console.error(error)
});

db.once('open', () =>
 { console.log('Connected to Database')})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});


//Set up Server to accept JSON
app.use(express.json())

//setup routes
import carRouter from "./routers/carRouter.js"
 app.use(carRouter);//URL look like  this localhost:3000/c



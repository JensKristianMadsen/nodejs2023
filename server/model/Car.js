import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
    {
       
        
    carDriveName:{
        type: String,
        require: true,
        

    },
    carYear:{
        type: Number,
        require: true,
      
    },
    carBestLapTime:{
        type: Number,
        default: 0,
    },
    carFullRacesTime:{
        type:  Number,
        default: 0,
    },
    carpitstop:{
        type: Number,
        default: 0,
    },
    carPoint:{
        type: Number,
        default: 0,
    },
    timestamp:{
        type: Date,
        require: true,
        default: Date.now
    },
   
    },
   
);


export default mongoose.model('Car', carSchema);
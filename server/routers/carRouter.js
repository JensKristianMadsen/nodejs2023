import { Router } from "express";
import Car from "../model/Car.js"

const router = Router();

// Getting all /api
router.get("/car", async (req, res) => {
    try{
        const car = await Car.find();
        res.json(car);

    }catch (err){
        res.status(500).json({message: err.message})
    }
});
// Getting one / :id this is a parameter we can access by typing in request req.params.id
router.get("/car/:id", getcarId, (req, res) => {
    res.send(res.carId.carDriveName)    
}

);
// Creating 
router.post("/car", async (req, res) => {
    const car = new Car({
        carDriveName: req.body.carDriveName,
        carYear: req.body.carYear,
        carBestLapTime: req.body.carBestLapTime,
        carFullRacesTime: req.body.carFullRacesTime,
        carpitstop: req.body.carpitstop,
        carPoint: req.body.carPoint
        
    })
    try{
        const newCar = await car.save();
        res.status(201).json(newCar);

    }catch (err) {
        res.status(400).json({message: err.message})
    }
});
// Updating one / patch instead of put for put because we only want to udate based on what the user passes us
router.patch("/car/:id",(req,res) => {

})
// Deleting one
router.delete("/car/:id",(req,res) => {

})
//Middleware function  all pass to id 
async function getcarId(req, res, next) {
    let carId;
    try {

      const {id} = req.params;
      carId = await Car.findById(id)

    } catch (err) {
      return res.status(404).json({ message: err.message ,message:'Cannot find car' })
    }
  
    res.carId = carId
    next()
  }
  


export default router;
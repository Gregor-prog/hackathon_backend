import mongoose from "mongoose"
const postData = async (req,res) => {
    const health = mongoose.model("healthMonitor")
    const {temperature, heartRate, OxygenLevel} = req.body


    try {
        if(!temperature ){
           throw "temperature not found"
        }
        else if(!heartRate){
            throw "heart rate not found"
        }
        else if(!OxygenLevel){
           throw "Oxygen level not found"
        }
    } catch (error) {
            res.status(404).json({error})
            return
    }

    try {
        health.create({
            temperature: temperature,
            heartRrate:heartRate,
            oxygenLevel:OxygenLevel,
        })

        let count = await health.countDocuments();
        if (count > 19) {
          const oldest = await health.findOne().sort({ createdAt: 1 });
          await health.findByIdAndDelete(oldest._id);
        }

    } catch (error) {
        res.status(500).json({message:"an Error occured"})
        console.log(error)
    }
    res.status(200).json({message: "vitals added successfully"})
}

export default postData
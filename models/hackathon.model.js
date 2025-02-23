import mongoose from "mongoose"

const healthSchema = new mongoose.Schema({
    temperature:{
        type: Number,
    },
    heartRrate:{
        type: Number,
    },
    oxygenLevel:{
        type:Number
    },
    createdAt: { type: Date, default: Date.now }
})

const healthModel = mongoose.model("healthMonitor", healthSchema)

export default healthModel
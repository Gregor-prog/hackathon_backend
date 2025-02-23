import mongoose from "mongoose"
const getData = async (req,res) => {
    const healthModel = mongoose.model("healthMonitor")

    try {
        const vitals = await healthModel.find({}).sort({createdAt:-1})
        res.status(200).json({
            status: 200,
            data: vitals
        })
    } catch (error) {
        res.status(404)
        throw error
    }
}

export default getData
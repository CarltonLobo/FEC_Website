import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }, 
    message : {
        type: String,
        required: true,
    }
});

const entry = mongoose.model("Store", entrySchema);
export default entry;
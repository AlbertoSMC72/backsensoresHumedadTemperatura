import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    dateRegistered: {
        type: Date,
        required: true,
        default: Date.now
    },
    temperature1: {
        type: Number,
        required: true
    },
    temperature2: {
        type: Number,
        required: true
    },
    temperature3: {
        type: Number,
        required: true
    },
    temperature4: {
        type: Number,
        required: true
    },
    temperature5: {
        type: Number,
        required: true
    },
    humidity1: {
        type: Number,
        required: true
    },
    humidity2: {
        type: Number,
        required: true
    },
    humidity3: {
        type: Number,
        required: true
    },
    humidity4: {
        type: Number,
        required: true
    },
    humidity5: {
        type: Number,
        required: true
    }
});
    
    const Data = mongoose.model('Data', dataSchema);

    export default Data;
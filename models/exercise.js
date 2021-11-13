const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    workouts: [
        {
            name: {
                type: String,
                required: "Please enter workout name."
            },
            type: {
                type: String,
                required: "Please enter workout type."
            },
            distance: {
                type: Number, 
            },
            duration: {
                type: Number,
                required: "Please enter workout duration."
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }    
        }
    ]

});

const Exercise = mongoose.model("exercise", ExerciseSchema);

module.exports = Exercise;
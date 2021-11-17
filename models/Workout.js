const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name: {
                type: String,
                required: "Please enter exercise name."
            },
            type: {
                type: String,
                required: "Please enter exercise type."
            },
            distance: {
                type: Number, 
            },
            duration: {
                type: Number,
                required: "Please enter duration."
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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//schema for workouts
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now() //defaults to today
  },
  exercises: [
    {
      name : {
        type : String,
        trim : true,
        required : "Enter a valid exercise name"
      },
      type : {
        type: String,
        trim : true,
        required : "Enter a valid exercise type"
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number,
        required : "Enter a valid exercise duration"
      },
      weight: {
        type : Number
      },
      sets: {
        type : Number
      },
      reps: {
        type : Number
      }
    }
  ]
});
const Workout = mongoose.model("workout", WorkoutSchema);
//export schema
module.exports = Workout;
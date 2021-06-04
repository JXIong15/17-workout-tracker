const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter an workout type"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter a name for workout"
    },
    duration: {
      type: Number,
      required: "Enter a duration (min)"
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number    
    },
    sets: {
      type: Number    
    },
    distance: {
      type: Number,
    }
  }]
});

// GET HELP WITH THIS
// workoutSchema.virtual("totalDuration").aggregate([{
//  $sum: "$duration"
// }])

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
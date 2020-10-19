const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Enter a Name'
    }, 
    type: {
        type: String,
        trim: true,
        required:'Choose one'
    }, 
    weight: {
        type: Number,
        required: 'Enter a weight amount'
    }, 
    sets: {
        type: Number,
        required: 'Enter the number of sets completed'
    }, 
    reps: {
        type: Number,
        required: 'Enter the number of reps completed'
    },
    time: {
        type: Number,
        required: 'Enter the duration of your workout in minites'
    },
    distance: {
        type: Number,
        required: 'Enter distance travled'
    }
});
const Exercises = mongoose.model('Exercises', exercisesSchema)


module.exports = Exercises;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required:'Choose one'
    }, 
    name: {
        type: String,
        trim: true,
        required: 'Enter a Name'
    }, 
    duration: {
        type: Number,
       
    },
    weight: {
        type: Number,
      
    }, 
    reps: {
        type: Number,
        
    },
    sets: {
        type: Number,
       
    }, 
    
    distance: {
        type: Number
        
    }
});
const Workouts = mongoose.model('Workouts', exercisesSchema)


module.exports = Workouts;
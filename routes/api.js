const router = require('express').Router();
const mongojs = require('mongojs')
const Workout = require('../models/index.js');


//adding workout to the database the workout
router.post('/api/workouts/:id', ({
    body
}, res) => {
    let workout = mongojs
    Workout.create(body)
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
        console.log(`This is creating the: ${workout}`) 

});
//adding the workouts to the database
router.post('/api/workouts/:id', ({
    body
}, res) => {
    let workout = mongojs
    Workout.insertMany(body)
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
        console.log(`This is adding the: ${workout}`)
});
//finding the workout that were added to the database
router.get('/api/workouts/', (req, res) => {
    let workout = mongojs.workout
    Workout.find({
            workout
        })
        .sort({
            workout: 1
        })
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
        console.log(`This is showing the: ${workout}`)
});
//updating the selected workouts
router.put('/api/workouts/:id', ({
    params
}, res) => {
    let workout = mongojs
    Workout.update({
        
            _id: mongojs.ObjectID(params.id)
        }, {
            $set: {
                workout
            }            
        },
        (err, edited) => {
            if (err) {
                console.log(err);
                res.send(err)
            } else {
                console.log(edited)
                res.send(edited);

            }
            
        })
        console.log(`This is updating the: ${workout}`)
})

module.exports = router
const router = require('express').Router();
const mongojs = require('mongojs')
const Exercises = require('../models/index.js');


//adding workout to the database the workout
router.post('/api/workouts/:id', ({
    body
}, res) => {
    let workouts1 = mongojs
    Exercises.create(body)
        .then(workouts1 => {
            res.json(workouts1)
        })
        .catch(err => {
            res.status(400).json(err)
        });
        console.log(`This is creating the: ${workouts1}`) 

});
//adding the workouts to the database
router.post('/api/workouts/:id', ({
    body
}, res) => {
    let workouts2 = mongojs
    Exercises.insertMany(body)
        .then(workouts2 => {
            res.json(workouts2)
        })
        .catch(err => {
            res.status(400).json(err)
        })
        console.log(`This is adding the: ${workouts2}`)
});
//finding the workout that were added to the database
router.get('/api/workouts/', (req, res) => {
    let workouts3 = mongojs.workouts3
    Exercises.find({
            workouts3
        })
        .sort({
            workouts3: 1
        })
        .then(workouts3 => {
            res.json(workouts3);
        })
        .catch(err => {
            res.status(400).json(err);
        });
        console.log(`This is showing the: ${workouts3}`)
});
//updating the selected workouts
router.put('/api/workouts/:id', ({
    params
}, res) => {
    let workouts4 = mongojs
    Exercises.update({
        
            _id: mongojs.ObjectID(params.id)
        }, {
            $set: {
                workouts4
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
        console.log(`This is updating the: ${workouts4}`)
})

module.exports = router
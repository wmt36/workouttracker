const router = require('express').Router();
const mongojs = require('mongojs')
const Exercises = require('../models/index.js');

router.post('/api/workouts/:id', ({
    body
}, res) => {
    Exercises.create(body)
        .then(workouts => {
            res.json(workouts)
        })
        .catch(err => {
            res.status(400).json(err)
        });

});

router.post('/api/workouts/:id', ({
    body
}, res) => {
    Exercises.insertMany(body)
        .then(workouts => {
            res.json(workouts)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

router.get('/api/workouts/:id', (req, res) => {
    Exercises.find({
            workouts
        })
        .sort({
            workouts: 1
        })
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', ({
    params
}, res) => {
    Exercises.update({
            _id: mongojs.ObjectID(params.id)
        }, {
            $set: {
                workouts
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
})

module.exports = router
const router = require("express").Router();
const Workout = require("../../models/Workout")

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration"}
        }
    }])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get('api/workouts/range', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration"}
        }
    }])
    .then(dbWorkout => {
        res.json(dbWorkout);
        })
    .catch(err => {
        res.json(err);
    });
});

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: req.body }}, { new: true })
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
const router = require("express").Router();
const mongojs = require("mongojs");
const workouts = require("../models/exercise")

router.get("/", (req,res) => {
    db.find()
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req,res) => {
    db.find()
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
   workouts.create(req.body)
   .then(db => res.json(db))
   .catch(err => console.log(err))
});

router.put("/:id", ({ body,params }, res) => {
    db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;
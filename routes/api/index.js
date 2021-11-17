const router = require("express").Router();

const workoutRoutes = require("./workoutroutes.js");

router.use("/workouts", workoutRoutes);


module.exports = router;
const router = require("express").Router();

const apiRoutes = require("./api/workoutroutes");
const htmlRoutes = require("./htmlroutes");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);
//router.use("/workouts", apiRoutes);

module.exports = router;
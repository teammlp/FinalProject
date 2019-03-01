const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const placeRoutes = require("./api/placeRoutes")
const searchPlaceRoutes = require("./api/searchPlaceRoutes")

// API Routes
router.use("/api", apiRoutes);
router.use('/api', placeRoutes);
router.use("/api", searchPlaceRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
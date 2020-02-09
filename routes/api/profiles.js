const express = require("express");
const router = express.Router();

//route for /api/profiles/test

router.get("/test", (req, res) => res.json({ msg: "reachable for profile" }));

module.exports = router;

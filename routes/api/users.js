const express = require("express");
const router = express.Router();

//route for /api/users/test

router.get("/test", (req, res) => res.json({ msg: "reachable for user" }));

module.exports = router;

const express = require("express");
const router = express.Router();

//route for /api/posts/test
router.get("/test", (req, res) => res.json({ msg: "reachable for posts" }));

module.exports = router;

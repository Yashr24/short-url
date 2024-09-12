const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

// Add this route for logout
router.post("/logout", (req, res) => {
    res.clearCookie("uid"); // Clear the cookie
    res.redirect("/login"); // Redirect to login page
  });
  
router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;
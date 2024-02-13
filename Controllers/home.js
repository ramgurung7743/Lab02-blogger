const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    // Your name
    var yourName = "Ram Gurung";

    // Set the title of the page
    var pageTitle = yourName + " Blog Site";

    // Set the first paragraph as an introduction
    var introText = "Welcome to " + yourName + "'s Blog Site. This is where I share my thoughts and ideas.";

    // Render the 'home' view and pass the dynamic data
    res.render('home', { title: pageTitle, intro: introText });
});

module.exports = router;

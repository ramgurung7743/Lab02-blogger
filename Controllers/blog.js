// Import necessary modules
const express = require('express');
const router = express.Router();

// Define routes for Blog List and Blog Add pages

// Route for Blog List page
router.get('/list', function(req, res, next) {
    res.render('blog-list', {
        title: 'Blog List',
        pageTitle: 'Blog List',
        message: 'This page is currently under construction.'
    });
});

// Route for Blog Add page
router.get('/add', function(req, res, next) {
    res.render('blog-add', {
        title: 'Blog Add',
        pageTitle: 'Blog Add',
        message: 'This page is currently under construction.'
    });
});

module.exports = router;

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//model movie
// let Movie = mongoose.model('Movie', {
//   title: String,
//   genre: String,
//   date_created: Date,
//   date_deleted: {
//     type: Date,
//     default: null
//   }
// })

// router.post('/movies', function(req, res, next) {
//   let new_movie = new Movie({
//     title: req.body.title,
//     genre: req.body.genre,
//     date_created: new Date()
//   });

// router.get('/secret', (req, res) => {
//   res.send("This is the secret api! =D")
// })
//
// router.post('/secret', (req, res) => {
//   res.send("You are posting to this secret api! =D")
// })

export = router;

//express router
const router = require('express').Router();
//requiring mongoose model created
let User = require('../models/user.model');

//first route - first endpoint that handles get requests
router.route('/').get((req,res) => {
  //mongoose method that gets a list of all the users from mongo atlas database. returns a promise
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' +err));
});

//second route - handles post requests to add info to database
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

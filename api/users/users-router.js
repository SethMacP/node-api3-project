const express = require('express');
const model = require('./users-model')
const {validateUserId, validateUser} = require('../middleware/middleware');

const router = express.Router();

router.get('/users', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  model.get()
    .then(users=>{
		  res.status(200).json(users)
		})
    .catch(()=>{
		  res.status(500).json({message:"Server experienced an error. Sorry"
		})
    })
});

router.get('/users/:id', validateUserId(), (req, res, next) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  res.json(req.user);
});

router.post('/users', validateUser(), (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  model.insert(req.body)
    .then((user)=>{
      res.status(200).json(user);
    })
    .catch(()=>{
      res.status(500).json({message: "Server experienced an error during this request"})
    })
});

router.put('/users/:id', validateUser(), validateUserId(), (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  model.update(req.params.id, req.body)
    .then( (user) => {
      res.status(200).json(user);
    })
    .catch( () => {
      res.status(500).json({message: "Server encountered an error"})
    })
});

router.delete('/users/:id', validateUserId(), (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  model.remove(req.params.id)
	.then((count)=>{
		// console.log(res)
		console.log("5")
		res.status(200).json(count)
		})
    .catch(()=>{
		console.log("6")
      res.status(500).json({
		  message: "The server encountered an error"
	  })
    })
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router

module.exports = router;

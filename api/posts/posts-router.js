const express = require('express');
const { validateUserId } = require('../middleware/middleware');
const model = require('./posts-model')
const router = express.Router();

router.get('/posts', (req, res) => {
  // DO YOUR MAGIC
  model.get()
    .then((allPosts)=>{
      res.status(200).json(allPosts)
    })
    .catch(()=>{
      res.status(500).json({message:"Server Error"})
    })
});

router.get('/posts/:id', validateUserId(), (req, res) => {
  // DO YOUR MAGIC
  model.getById(req.params.id)
    .then((posts)=>{
      res.status(200).json(posts)
      })
    .catch(()=>{
      res.status(500).json({message:"Server Error"})
    })
});

// do not forget to export the router
module.exports = router

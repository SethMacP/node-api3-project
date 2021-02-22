const express = require('express');
//import the required routers
const usersRouter = require('./users/users-router')
const postsRouter = require('./posts/posts-router')
//import the global custom middleware
const {logger}  = require('./middleware/middleware');



const server = express();
// remember express by default cannot parse JSON in request bodies
server.use(express.json());
// global middlewares and routes need to be connected here
server.use(logger())
server.use(usersRouter)
server.use(postsRouter)
//
server.get('/', (req, res) => {
  res.status(200).json({
    message:"Welcome"
  });
});
//
module.exports = server;

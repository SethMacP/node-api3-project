const users = require('../users/users-model')

function logger(req, res, next) {
  return (req,res,next)=>{
  const timestamp = new Date().toISOString();
  console.log(`User: ${req.ip} Time: ${timestamp}  || ${req.method} @ ${req.url}`)
  next();
}}


function validateUserId() {
  return (req,res,next)=>{
              console.log("1")
              console.log("test'")
    users.getById(req.params.id)
      .then(user=>{
          if(user){
              console.log("2")
            req.user = user; 
            next();
          }else{
              console.log("3")
            res.status(404).json({message:"Cannot find a resource with that ID"})
            }
        })
      .catch(err=>{
              console.log("4")
        res.status(500).json({message:"Server experienced an error"})
        })
}}

function validateUser() {
  return (req, res, next) => {
    if(!req.body.name){
     return  res.status(400).json({message: "Missing post name"})
    }
    if(!req.body){
      return res.status(400).json({ message: "Missing post body" })
    }
    next();
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  //save the post like user?
}

// do not forget to expose these functions to other modules

module.exports = {
  logger,
  validateUserId,
  validateUser,
  // validatePost
}

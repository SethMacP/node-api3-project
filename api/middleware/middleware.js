function logger(req, res, next) {
  // DO YOUR MAGIC
  const timestamp = new Date().toISOString();
  console.log(`User:{req.ip} logged in @${timestamp}  ||${req.method} @ ${req.url}`)
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules

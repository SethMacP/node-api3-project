// require your server and launch it
const server = require("server");
const port = 8000;

server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})
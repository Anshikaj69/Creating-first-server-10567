const http= require("http");
const port=8081;

http
   .createServer((req,res) => {
    res.writeHead(200,{"Content_Type":"text/html"});
    res.write("<h1>This is my server</h1>");
    res.end();
   })

   .listen(port,()=>{
    console.log(`node.js server started on ${port}`);
   })


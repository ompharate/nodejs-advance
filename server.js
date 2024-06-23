import http from "http";
http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });

    res.write('<h1>hello</h1>hello world');

    res.end();

}).listen(3000,()=>{
    console.log("listing !!")
})
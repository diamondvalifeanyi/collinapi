const http = require("http");
const port = 4400;
const {getAllTeams, getOne} = require("./Controller/controller")

const app = http.createServer((req, res)=>{
   if(req.url === "/showteams" && req.method === "GET"){
    getAllTeams(req, res)
   }else if (req.url === "/oneteam" && req.method === "GET"){
    getOne(req, res, 2)
   }else{
     res.end("something is wrong")
   }
});

app.listen(port, ()=>{
    console.log(`server running on port: ${port}...`)
})


const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const projects = fs.readFileSync('./projects.html')
const services = fs.readFileSync('./services.html')

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req,res)=>{

    let url = req.url;
    res.statusCode = 200;


    res.setHeader('Content-Type', 'text/html');

    if(url == '/'){
        res.end(home)
    }else if(url == '/about'){
        res.end(about)
    }else if(url == '/services'){
        res.end(services)
    }else if(url == '/contact'){
        res.end(contact)
    }else{
        res.statusCode = 404;
        res.end("<h1> Error</h1>")
    }

    
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

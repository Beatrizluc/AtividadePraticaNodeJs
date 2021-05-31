const express = require("express");
const mongoDbService = require("../service/mongoDbService");

const server = express();
server.use(express.json()); 

const hostName = "localhost";
const port = "3000";

server.listen(port, hostName, () => {
    console.log(`Example app listening at http://${hostName}:${port}/`);
})

server.get('/products', (req, res) => {
    mongoDbService.getAllProdutos().then((result) =>{
        if(result){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(JSON.stringify(result));
        }
    }).catch((err) =>{
        console.log(err);
    });
    
});

server.get('/products/:id', (req, res) => { 
    mongoDbService.getOneProduto(req.params.id).then((result) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log(result);
        res.end(JSON.stringify(result));

    });
});

server.post('/products', (req, res) => { 
    mongoDbService.updateProduto(req.body).then((result) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log(result);
        res.end(JSON.stringify(result));

    });
});

server.put('/products/:id', (req, res) => {
    mongoDbService.updateProduto(req.body).then((result) =>{
        if(result){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(JSON.stringify(result));
        }
    }).catch((err) =>{
        console.log(err);
    });
});

server.delete('/products/:id', (req, res) => {
    mongoDbService.deleteProduto(req.params.id).then((result) =>{
        if(result){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(JSON.stringify(result));
        }
    }).catch((err) =>{
        console.log(err);
    });
});




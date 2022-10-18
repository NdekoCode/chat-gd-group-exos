


const http = require('http')
const fs = require('fs')

const serveur = http.createServer()

serveur.on('request',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.setHeader("Access-Control-Allow-methods", "POST,GET,PUT,OPTIONS")
    if( req.method==='GET'){
        fs.readFile('./message.json',(err,data)=>{
            if(err) throw err;    
            const message = JSON.parse(data.toString());
            res.write(JSON.stringify(message));
            res.end()
        })
    }
    if(req.method==='POST'&&req.url==='/message') {
        console.log('Recup de données du client..')
    }
})
serveur.listen(8080,()=>console.log('Les serveur est lancé...'))
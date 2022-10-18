// const http = require('http')
// const fs = require('fs')
// const events = require('events')
// const MonEvent = new events()

// // MonEvent.on('connecter',()=>{console.log("Un user vient de se connecter")})

// const serveur = http.createServer()
// // MonEvent.emit('connecter')

// const tab = [
//     { id: '', content: '', created_at: '' },
//     { id: '', content: '', created_at: '' },
//     { id: '', content: '', created_at: '' },
//     { id: '', content: '', created_at: '' },
// ]

// serveur.on('request', (req, res) => {
//     // res.writeHead(200,{'Content-Type':'application/json'})

//     fs.readFile('./index.json', (err, data) => {
//         if (err) throw err;
//         // res.writeHead(200,{
//         //     'Content-Type':'Text/html'
//         // })
//         res.setHeader("Access-Control-Allow-Origin", "*")
//         res.setHeader("Access-Control-Allow-Headers", "*")
//         res.setHeader("Access-Control-Allow-methods", "POST,GET,PUT,OPTIONS")
//         res.write(data)
//         // res.end("Ici le message de mon serveur")
//     })
// })
// serveur.listen(8080, () => console.log('Le serveur est lancé...'))


const http = require('http')
const fs = require('fs')

const serveur = http.createServer()

serveur.on('request',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.setHeader("Access-Control-Allow-methods", "POST,GET,PUT,OPTIONS")
    if( req.method==='GET'){
        fs.readFile('./index.json',(err,data)=>{
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
const http = require('http')
const express = require('express')

const app = express()
const PORT = 8080
app.listen(PORT)
console.log(`Servidor HTTP en puerto ${PORT}`)

app.get('/', (req, res) => {
    res.send("Holis pagina principal")
})

app.get('/server', (req, res) => {
    res.send(`Servidor HTTP en puerto ${PORT}`)
})

http.Server.on("error", error => console.log(`Server error ${error}`))
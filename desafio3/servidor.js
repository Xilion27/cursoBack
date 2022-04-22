const http = require('http')
const fs = require('fs');
const express = require('express')
const Contenedor = require("../desafio2/contenedor");
const res = require('express/lib/response');
const req = require('express/lib/request');

const app = express();
const PORT = 8080;
app.listen(PORT);
console.log(`Servidor HTTP en puerto ${PORT}`)

const products = new Contenedor('./desafio2/productos.txt');
products.init();

app.get('/', (req, res) => {
    res.send("Holis pagina principal")
})

app.get('/server', (req, res) => {
    res.send(`Servidor HTTP en puerto ${PORT}`)
})

app.get('/productos',(req, res) => {
    res.send(products.getAll());
}); //Array con todos los Productos

app.get('/productoRandom', (req, res) => {
    res.send(products.getById(Math.floor(Math.random()* (products.countID) + 1)))
}) //Producto al azar

const bodyParser = require("body-parser")
const express = require("express")
const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

let produtos = [
  { 
    tipo: "celular",
    modelo: "iPhone 13 Pro",
    marca: "Apple"
  },
  {
    tipo: "celular",
    modelo: "Redmi note 11s",
    marca: "Xiaomi"
  },
  {
    tipo: "celular",
    modelo: "Galaxy S22",
    marca: "Samsung"
  }
]

const displayProducts = () => {
  produtos.forEach((produto) => {
    console.log(' ', produto.tipo, produto.modelo, produto.marca, ' ')
  })
}

server.get('/produtos', (req, res) => {
  return res.status(200).send(produtos)
})

server.post('/produtos', (req, res) => {

  console.log(req.body)
  const { tipo, modelo, marca } = req.body

  if (!tipo || !modelo || !marca) {
    return res.status(404).send("Favor preencha todos os campos obrigatórios tipo, modelo e marca")
  }

  produtos.push(req.body)
  return res.status(200).send(`Produto adicionado!`)
})

server.patch('/produtos', (req, res) => {

  let index = produtos.findIndex((produto) => produto.modelo === req.body.modelo)

  if (index === -1) {
    return res.status(404).send("Produto não encontrado, especifique-o pelo modelo")
  }

  produtos[index] = {...produtos[index], ...req.body}
  return res.status(200).send(`Produto ${produtos[index].modelo} alterado!`)
})

server.delete('/produtos', (req, res) => {

  let index = produtos.findIndex((produto) => produto.modelo === req.body.modelo)

  if (index === -1) {
    return res.status(404).send("Produto não encontrado, especifique-o pelo modelo")
  }

  produtos.splice(index, 1)
  return res.status(200).send((`Produto deletado!`))
})

server.listen(3000, () => {
  console.log("Listening on port 3000")
})
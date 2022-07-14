
import bodyParser from 'body-parser'
import express from 'express'
import { productRouter, cartRouter, checkoutRouter } from './routes/index.js'

const PORT = 3000
const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use('/product', productRouter)
server.use('/cart', cartRouter)
server.use('/checkout', checkoutRouter)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
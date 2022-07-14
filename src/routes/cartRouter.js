import { Router } from 'express'

const cartRouter = new Router()

cartRouter.get('/', (req, res) => {
  return res.status(200).send("teste cart")
})

export default cartRouter;
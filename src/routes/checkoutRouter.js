import { Router } from "express";

const checkoutRouter = new Router();

checkoutRouter.get('/', (req, res) => {
  return res.status(200).send("teste checkout")
})

export default checkoutRouter;
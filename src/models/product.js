import mongoose from 'mongoose';

const ProductModel = mongoose.model('Product', {
  name: String,
  categoria: String,
  brand: String,
  // precoCliente: Number,
  // precoCusto: Number,
});

const products = [
  { 
    type: "celular",
    name: "iPhone 12 mini",
    brand: "Apple"
  },
  {
    type: "celular",
    name: "Redmi note 11s",
    brand: "Xiaomi"
  },
  {
    type: "celular",
    name: "Galaxy S22",
    brand: "Samsung"
  }
]

export const searchOneProduct = async (id) => {
  return await ProductModel.find(id)
}

export const searchProducts = async () => {
  const products = await ProductModel.find()
  return products
}

export const saveNewProduct = async (type, name, brand) => {
  const newProduct = new ProductModel({
    type,
    name,
    brand
  })

  await newProduct.save()
  return newProduct.name
}

export const updateProduct = async (reqId, type, name, brand) => {
  // const index = products.findIndex((product) => product.id.toString() == reqId)
  const product = await ProductModel.findById(reqId)

  product.name = name
  product.type = type
  product.brand = brand
  
  product.save()
  return `Produto ${product.name} alterado!`
}

export const removeProduct = async (product) => {
  await ProductModel.deleteOne(product)
  // return `Produto ${deletedProduct.name} deletado!`
}
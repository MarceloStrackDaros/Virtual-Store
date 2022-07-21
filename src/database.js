import mongoose from 'mongoose'
import 'dotenv/config'

// const MONGO_URL = 'mongodb+srv://Marcelo:r8z6mUOYTV4u9L2u@virtualstore.h84y0.mongodb.net/?retryWrites=true&w=majority'
const MONGO_URL = process.env.MONGO_URL;

const connect = async (tentativa = 1) => {
  try {
      await mongoose.connect(MONGO_URL);
      console.log('Conectado!');
  } catch (e) {
      console.error('Não consegui me conectar ao banco!', e);
      setTimeout(() => connect(tentativa + 1), 3000 ** tentativa);
  }
};

connect();

import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const dbConnect = () => {
  const URL : any = process.env.DB_URL
  mongoose
    .connect(URL)
    .then(() => {
      console.log('Conexão com o banco de dados estabelecida com sucesso');
    })
    .catch((err) => {
      console.error('Erro ao conectar ao banco de dados:', err);
    });
};



export default dbConnect;



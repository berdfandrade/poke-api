
import mongoose from 'mongoose';

const dbConnect = () => {
  const pass = 't96FFeWKARQ5EqLR';
  const url = `mongodb+srv://berdfandrade:${pass}@cluster0.eerqcrh.mongodb.net/?retryWrites=true&w=majority`;
  mongoose
    .connect(url)
    .then(() => {
      console.log('Conexão com o banco de dados estabelecida com sucesso');
    })
    .catch((err) => {
      console.error('Erro ao conectar ao banco de dados:', err);
    });
};



export default dbConnect;



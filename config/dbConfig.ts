
import mongoose from 'mongoose';

const dbConnect = () => {

 const pass = 'z1NKsbH3KJFK5fW0'
 const url = `mongodb+srv://bernardo:${pass}@cluster0.eerqcrh.mongodb.net/?retryWrites=true&w=majority`

  mongoose
    .connect(url, {
    // @ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Conexão com o banco de dados estabelecida com sucesso');
    })
    .catch((err) => {
      console.error('Erro ao conectar ao banco de dados:', err);
    });
};

export default dbConnect;

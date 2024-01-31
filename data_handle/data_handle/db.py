import pymongo
import json

# Nome do arquivo JSON
json_file = 'poke.json'

password = 'Nbajl23iRQq02fZs'

uri = f'mongodb+srv://berdfandrade:{password}@cluster0.eerqcrh.mongodb.net/?retryWrites=true&w=majority'


# Conecta-se ao servidor MongoDB
client = pymongo.MongoClient(uri)  # Configure a URL do servidor MongoDB conforme necessário
db = client['poke']  # Substitua "seu_banco_de_dados" pelo nome do seu banco de dados

# Nome da coleção no banco de dados
collection_name = 'poke'  # Substitua "sua_colecao" pelo nome da sua coleção

# Carrega os dados do JSON
with open(json_file, 'r') as file:
    data = json.load(file)

# Insere os dados na coleção
collection = db[collection_name]
inserted_ids = collection.insert_many(data)

print(f'{len(inserted_ids.inserted_ids)} documentos inseridos na coleção "{collection_name}" do banco de dados "{db.name}"')

# Fecha a conexão com o servidor MongoDB
client.close()

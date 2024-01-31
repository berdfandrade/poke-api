from flask import Flask, jsonify
import pymongo
import sys
import logging

app = Flask(__name__)

# Configuração para conexão com o servidor MongoDB
def connect_to_mongodb():
    password = 'Nbajl23iRQq02fZs'
    uri = f'mongodb+srv://berdfandrade:{password}@cluster0.eerqcrh.mongodb.net/?retryWrites=true&w=majority'
    client = pymongo.MongoClient(uri)
    db = client['poke']
    collection_name = 'poke'
    collection = db[collection_name]
    return collection

# Em seu código principal:
collection = connect_to_mongodb()

# Configuração de logs para registros de erro
app.config['PROPAGATE_EXCEPTIONS'] = True
app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

# Ativar o modo de depuração (apenas para ambiente de desenvolvimento)
app.debug = True

@app.route('/', methods=['GET'])
def hello():
    return jsonify(message='hello')

@app.route('/poke', methods=['GET'])
def poke():
    collection = connect_to_mongodb()

    # Obtenha o termo de busca da variável de consulta 'search' na URL
    search_query = request.args.get('search', '')

    # Realize a busca no banco de dados
    result = collection.find({
        "$or": [
            {"Names": search_query},
            {"Type1": search_query},
            {"Type2": search_query}
        ]
    })

    # Transforme os resultados em uma lista de dicionários
    data = [document for document in result]

    return jsonify(data)

if __name__ == '__main__':
    app.run()

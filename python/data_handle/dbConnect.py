
import pymongo

def mongoConnect():
    password = 'Nbajl23iRQq02fZs'
    uri = f'mongodb+srv://berdfandrade:{password}@cluster0.eerqcrh.mongodb.net/?retryWrites=true&w=majority'

    client = pymongo.MongoClient(uri)

    if client.server_info():
        print("Conexão ao servidor MongoDB estabelecida com sucesso!")
    else :
        print("Conexão falhou")




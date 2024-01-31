import csv
import json

# Nome do arquivo CSV de entrada e arquivo JSON de saída
csv_file = 'pokemon.csv'
json_file = 'poke.json'

# Lista para armazenar os dados do CSV como objetos JSON
data = []

# Lê o arquivo CSV e converte para JSON
with open(csv_file, 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        data.append(row)

# Escreve os dados no arquivo JSON
with open(json_file, 'w') as json_file:
    json.dump(data, json_file, indent=4, ensure_ascii=False)

print(f'Arquivo JSON "{json_file}" criado com sucesso!')

import pymongo
import webbrowser

client = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = client["Assgn3"]
mycol = mydb["LoginID"]

def filter(user_input):
    result = mycol.find({user_input})
    for display in result:
        print(display)
    return f'Python function executed with input: {user_input}'

def execute():
    user_input = request.form['user_input']
    result = filter(user_input)
    return result

filter(user_input)
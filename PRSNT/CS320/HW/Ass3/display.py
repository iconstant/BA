# https://databasefaqs.com/display-mongodb-data-in-html/
# python3 .\display.py
import pymongo
import webbrowser

client = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = client["Assgn3"]
mycol = mydb["LoginID"]

id = [] #table array

tbl = "<tr> <td>Login_ID</td> <td>Password</td> <td>First_name</td> <td>Last_name</td> <td>Email</td> <td>Balance</td> </tr>"
id.append(tbl)

for y in mycol.find():
    a = "<tr> <td>%s</td>"%y['Login_ID']
    id.append(a)
    b = "<td>%s</td>"%y['Password']
    id.append(b)
    c = "<td>%s</td>"%y['First_name']
    id.append(c)
    d = "<td>%s</td>"%y['Last_name']
    id.append(d)
    e = "<td>%s</td>"%y['Email']
    id.append(e)
    f = "<td>%s</td></tr>"%y['Balance']
    id.append(f)
    
    contents = '''
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html>
    <head>
    <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">
    <title>Python Webbrowser</title>
    </head>
    
    <body>
    <table>
        %s
    </table>
    </body>
    
    </html>
    '''%(id)
    
filename = 'display.html'

def main(contents, filename):
    output = open(filename,"w")
    output.write(contents)
    output.close()

main(contents, filename)
webbrowser.open(filename)
from flask import Flask, request
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def index():
  return 'Hello from Flask!'


@app.route("/api/register_mentor", methods=["POST"])
def registerm():
  data = request.form
  name = data["name"]
  email = data["email"]
  experience = data["eperience"]
  rating = data["rating"]
  description = data["description"]
  data = {
    'Name': [name],
    'Email': [email],
    'Experience': [experience],
    'Rating': [rating],
    'Description': [description]
  }
  df_append = pd.DataFrame(data)
  df_append.to_csv('mentor.csv', mode='a', index=False, header=False)
  return ("sucess", 200)


@app.route("/api/read_mentor", methods=["GET"])
def readm():
  A = pd.read_csv("mentor.csv")
  print(A.to_json())
  return (A.to_dict(orient="records"))


@app.route("/api/register_alumni", methods=["POST"])
def registera():
  data = request.form
  name = data["name"]
  email = data["email"]
  Graduation_year = data["Graduation_year"]
  Collage_name = data["Collage_name"]
  description = data["description"]
  data = {
    'name': [name],
    'email': [email],
    'Graduation_year': [Graduation_year],
    'Collage_name': [Collage_name],
    'description': [description]
  }
  df_append = pd.DataFrame(data)
  df_append.to_csv('alumni.csv', mode='a', index=False, header=False)
  return ("sucess", 200)


@app.route("/api/read_alumni", methods=["GET"])
def reada():
  A = pd.read_csv("alumni.csv")
  print(A.to_json())
  return (A.to_dict(orient="records"))

@app.route("/api/register_user", methods=["POST"])
def registeru():
  data = request.form
  Name = data["Name"]
  Email = data["Email"]
  year = data["year"]
  Collage_name = data["Collage_name"]
  Description = data["Description"]
  Skills = data["Skills"]
  data = {
    'Name': [Name],
    'Email': [Email],
    'year': [year],
    'Collage_name': [Collage_name],
    'Description': [Description],
    'Skills': [Skills]
  }
  df_append = pd.DataFrame(data)
  df_append.to_csv('user.csv', mode='a', index=False, header=False)
  return ("sucess", 200)


@app.route("/api/read_user", methods=["GET"])
def readu():
  data = request.form
  Email = data["Email"]
  user_db = pd.read_csv('user.csv')
  A = user_db[user_db['Email'] == Email]
  return (A.to_dict(orient="records"))


app.run(host='0.0.0.0', port=81, debug=True)

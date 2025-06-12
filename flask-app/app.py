from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello Dosto, welcome to My Repositoy! This is a Flask app. Enjoy! Created by Sushant Sonbarse'

@app.route('/health')
def health():
    return 'Server is up and running'

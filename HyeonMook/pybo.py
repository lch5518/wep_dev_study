from flask import flask
app = Flask(__name__)


@app.route('\')
def hello_pybo():
    return 'Hello, HongHoYeon!'
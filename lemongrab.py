# lemongrab.py
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def load_app():
    return render_template('index.html')

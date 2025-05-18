from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_BASE = "/api/v1"


@app.get(f"{API_BASE}/hello")
def hello_get():
    return {"hello": "world"}

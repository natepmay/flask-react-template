import requests

API_URL = "http://127.0.0.1:5000/api/v1"


def hello_test():
    resp = requests.get(f"{API_URL}/hello")
    data = resp.json()
    return data


print(hello_test())

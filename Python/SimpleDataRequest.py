import requests

apiKey = open("API_KEY.txt").read()
headers = {
    'Authorization': str('Bearer ' + apiKey)
    }

result = requests.get('https://api.openai.com/v1/engines', headers=headers)

print(result.json())
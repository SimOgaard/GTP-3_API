import requests                                 # library used to call the api

apiKey = open("API_KEY.txt").read()             # get secret API key

headers = {                                     # used to pass data with request
    'Authorization': 'Bearer ' + apiKey         # holds authorization information
}

result = requests.get(
    'https://api.openai.com/v1/engines',        # endpoint
    headers=headers
)

print(result.json())                            # print result
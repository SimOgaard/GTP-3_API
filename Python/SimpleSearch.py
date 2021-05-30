import requests                                 # library used to call the api
import json                                     # library used to handle json formats

apiKey = open("API_KEY.txt").read()             # get secret API key

headers = {                                     # used to pass data with request
    'Content-Type': 'application/json',         # specifies sending datatype
    'Authorization': 'Bearer ' + apiKey         # holds authorization information
}

data = json.dumps({
    "documents": [                              # items gpt-3 will seach between
        "ABB Industrial Gymnasium",
        "Sweden",
        "Hugos mom",
        "ostrich"
    ],
    "query": "A place"                          # specifies what gpt-3 should search for
})

result = requests.post(
    'https://api.openai.com/v1/engines/davinci/search', # endpoint
    headers=headers,
    data=data
)

print(result.json())                            # print result
import sys
import json
import requests

url = "https://acobot-brainshop-ai-v1.p.rapidapi.com/get"

querystring = {"bid":"178","key":str(sys.argv[1]),"uid":"mashape","msg":str(sys.argv[4])}

headers = {
    'x-rapidapi-host': str(sys.argv[2]),
    'x-rapidapi-key': str(sys.argv[3])
}

response = requests.request("GET", url, headers=headers, params=querystring)
responseText = json.loads(response.text)

print(str(responseText['cnt']))
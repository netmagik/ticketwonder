import requests
import smtplib
import string
import random
import json

carriers = {
	'att':    '@mms.att.net',
	'tmobile':' @tmomail.net',
	'verizon':  '@vtext.com',
	'sprint':   '@page.nextel.com'
}

# API Server
URL = "https://6054ba78-9444-4a81-8dde-a60761ffdf08.mock.pstmn.io/"

def sendEmail(userEmail,message):
	# userEmail = number+(carriers['verizon'])
    print('entering sender, message:'+message)
    auth = ('samtestingsmtp@gmail.com', 'utxxxrwuaaxbbwko')
	# Establish a secure session with gmail's outgoing SMTP server using your gmail account
    server = smtplib.SMTP( "smtp.gmail.com", 587 )
    server.starttls()
    server.login(auth[0], auth[1])

	# Send text message through SMS gateway of destination number
    try:
        server.sendmail( auth[0], userEmail,message )
    except:
        print("Email Sending Failed: "+message)

def SessionRefresher(userEmail):
    message = "Enter in link to refresh your position in the queue"
    code = "\n New code: " + get_random_string(8)
    sendEmail(userEmail,message+code)

def get_random_string(length):
    # choose from all lowercase letter
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    print("Random string of length", length, "is:", result_str)
    return result_str

def EmailVerifier(userEmail):
    message = get_random_string(8)
    sendEmail(userEmail,message)

def Init():
    
    response = 'null'
    while(response=='null'):
        url = "https://6054ba78-9444-4a81-8dde-a60761ffdf08.mock.pstmn.io/2fa"
        payload = "Ready to start"
        headers = {'status':"Waiting"}
        try:
            response = requests.request("POST", url, headers=headers, data=payload)
            print("Serveer response: "+response.text)
            rjson = json.loads(response.text)
            if(rjson['status']=='ready'):
                print('Starting 2FA')
                userEmail = rjson['email']
                print(userEmail)
                EmailVerifier(userEmail)
                break
        except:
            print("POST failed")
        

Init()
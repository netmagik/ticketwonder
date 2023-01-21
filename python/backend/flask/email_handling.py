import requests
import smtplib
import string
import random
import json
from email.message import EmailMessage
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
    msg = EmailMessage()
    msg['Subject'] ='ticketwonder verification'
    msg['From'] = auth[0]
    msg['To'] = userEmail
    msg.set_content(message)
	# Send text message through SMS gateway of destination number
    try:
        server.send_message(msg)
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
    message = "Your Verification code is: "+get_random_string(8)
    sendEmail(userEmail,message)

def Init():
    
    response = 'null'
    while(response=='null'):
        #url = "https://6054ba78-9444-4a81-8dde-a60761ffdf08.mock.pstmn.io/2fa"
        url = "https://f260-132-170-6-1.ngrok.io/2fa"
        payload = "Ready to start"
        headers = {'status':"ready","email":"androidevourz@gmail.com"}
        try:
            response = requests.request("POST", url, json=headers)
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
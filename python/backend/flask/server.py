from flask import Flask
from flask import session
from flask import request
from flask import jsonify
import email_handling
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/2fa", methods=['POST'])
def wait():
    code = email_handling.get_random_string(8)
    request.get_data()
    userEmail = request.form['email']
    email_handling.EmailVerifier(userEmail)
    return jsonify({
    "status":"waiting",
    "code":code
})

if __name__ == "__main__":
    app.run()
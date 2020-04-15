from flask import Flask, request, render_template
from bson.json_util import loads

app = Flask(__name__)

@app.route( '/')
def hello_world():
    return render_template( 'home.html');

@app.route( '/test')
def testing():
    return render_template( 'test.html');

    
if __name__ == "__main__":
    app.debug = True # this automatically reloads any changes
    app.run( host='0.0.0.0') # this runs the website

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)

@app.route('/processData', methods = ['POST'])
@cross_origin(origin='*',headers=['Content- Type','Authorization'])
def sortData():
    data = request.get_json(force=True).get('data')
    app.logger.info(data)

#
if __name__ == "__main__":
    app.run(host='0.0.0.0')

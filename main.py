from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin


app = Flask(__name__, template_folder='templates')


@app.route("/")
@cross_origin(origin='*',headers=['Content- Type','Authorization'])
def serve():
    return render_template('index.html')

@app.route('/processData', methods = ['POST'])
@cross_origin(origin='*',headers=['Content- Type','Authorization'])
def sortData():
    app.logger.info("something got pushed")
    data = request.get_json(force=True).get('data')
    app.logger.info(data)

#
if __name__ == "__main__":
    app.run(host='0.0.0.0')

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)

@app.route("/")
@cross_origin(origin='*',headers=['Content- Type','Authorization'])
def serve():
    return """

<!DOCTYPE html>
<html>
<body>

<form action="" method="post" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="fileToUpload" multiple>
    <br><br>
    <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>

    """

@app.route('/processData', methods = ['POST'])
@cross_origin(origin='*',headers=['Content- Type','Authorization'])
def sortData():
    data = request.get_json(force=True).get('data')
    app.logger.info(data)

#
if __name__ == "__main__":
    app.run(host='0.0.0.0')

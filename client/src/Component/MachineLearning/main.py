from flask import Flask, render_template, request,jsonify
import recommender
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST', 'GET'])
def hello_world():
    if request.method == 'POST':
        result = request.json
       
        
        requirement = {"REQUIREMENT": {
            "JavaDev": int(result['set']['JavaDev']),
            "PythonDev": int(result['set']['PythonDev']),
            "FullStackDev": int(result['set']['FullStackDev']),
            "UIUXDesginer": int(result['set']['UIUXDesginer']),
            "AndroidDev": int(result['set']['AndroidDev'])}}
        num_of_candidate = 5
        result = recommender.topMatches(requirement, recommender.dataFrame, "REQUIREMENT", num_of_candidate)
        
        return jsonify(result)
        # return render_template("index.html", result=result)
    return "no results"
    # return render_template("index.html", result=[("name","Score")])


if __name__ == '__main__':
    app.run(debug=True)

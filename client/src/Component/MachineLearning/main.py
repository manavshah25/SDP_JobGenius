from flask import Flask, render_template, request
import recommender

app = Flask(__name__)

@app.route('/profile', methods=['POST', 'GET'])
def hello_world():
    if request.method == 'POST':
        result = request.form
        requirement = {"REQUIREMENT": {
            "JavaDev": int(result['html']),
            "PythonDev": int(result['python']),
            "FullStackDev": int(result['java']),
            "UIUXDesginer": int(result['c']),
            "AndroidDev": int(result['javascript'])}}
        num_of_candidate = int(result['candidate'])
        result = recommender.topMatches(requirement, recommender.dataFrame, "REQUIREMENT", num_of_candidate)
        print(result)
        return render_template("index.html", result=result)

    return render_template("index.html", result=[("name","Score")])


if __name__ == '__main__':
    app.run(debug=True)

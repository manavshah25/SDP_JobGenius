const recommendmodel = require('../models/recommend');
const re=require('fs')
exports.skill = async (req, res) => {
    const { loginuserinfo,
        JavaDev,
        PythonDev,
        FullStackDev,
        UIUXDesginer,
        AndroidDev,
        title } = req.body;
    try {
        const obj = new recommendmodel({

            companyname: loginuserinfo,
            jobfunction: {
                JavaDev: JavaDev,
                PythonDev: PythonDev,
                FullStackDev: FullStackDev,
                UIUXDesginer: UIUXDesginer,
                AndroidDev: AndroidDev,
            },
            title: title

        });
        console.log(obj.title);
        await obj.save();
        const json=`{
           "Hello" : {
                "JavaDev": ${JavaDev},
                "PythonDev": ${PythonDev},
                "FullStackDev": ${FullStackDev},
                "UIUXDesginer": ${UIUXDesginer},
                "AndroidDev": ${AndroidDev}
            }
        }`
        // const csv= `${loginuserinfo},${JavaDev},${PythonDev},${FullStackDev},${UIUXDesginer},${AndroidDev},${title}`+"\n";
        re.appendFileSync("./Dataset.json", json);
        return res.status(200).json({
            message: "skills number successfully",

        });
    } catch (err) {
        console.log(err);
    }
}


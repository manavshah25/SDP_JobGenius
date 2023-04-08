const recommendmodel = require("../models/recommend");
const fs = require("fs");
exports.skill = async (req, res) => {
  const {
    loginuserinfo,
    JavaDev,
    PythonDev,
    FullStackDev,
    UIUXDesginer,
    AndroidDev,
    title,
  } = req.body;
  try {
    const obj = new recommendmodel({
      companyname: loginuserinfo,
      jobfunction: {
        JavaDev: parseInt(JavaDev),
        PythonDev: parseInt(PythonDev),
        FullStackDev: parseInt(FullStackDev),
        UIUXDesginer: parseInt(UIUXDesginer),
        AndroidDev: parseInt(AndroidDev),
      },
      title: title,
    });
    console.log(obj.title);
    await obj.save();
    var u = obj._id;
    var existingData = JSON.parse(fs.readFileSync("Dataset.json"));

    // Update the object with new data
    var newData = {
      [u]: {
        JavaDev: parseInt(JavaDev),
        PythonDev: parseInt(PythonDev),
        FullStackDev: parseInt(FullStackDev),
        UIUXDesginer: parseInt(UIUXDesginer),
        AndroidDev: parseInt(AndroidDev),
      },
    };

    existingData = { ...existingData, ...newData };

    // Write the updated object back to the JSON file
    fs.writeFileSync("Dataset.json", JSON.stringify(existingData));
    // var temp=fs.readFileSync('Dataset.json', 'utf8');
    // // Concatenate the file content with the string wrapped in {}
    // const data=`{
    //     "${u}" : {
    //         "JavaDev": ${JavaDev},
    //         "PythonDev": ${PythonDev},
    //         "FullStackDev": ${FullStackDev},
    //         "UIUXDesginer": ${UIUXDesginer},
    //         "AndroidDev": ${AndroidDev}
    //     }
    // }`
    // const wrappedContent = `{${temp}}`;

    // // const csv= `${loginuserinfo},${JavaDev},${PythonDev},${FullStackDev},${UIUXDesginer},${AndroidDev},${title}`+"\n";
    // fs.appendFile('Dataset.json', data);
    //     var u = obj._id;
    //     k = {

    //        [u] JavaDev: parseInt(JavaDev),
    //         PythonDev: parseInt(PythonDev),
    //         FullStackDev: parseInt(FullStackDev),
    //         UIUXDesginer: parseInt(UIUXDesginer),
    //         AndroidDev: parseInt(AndroidDev),

    //     };
    //     data = k;
    //     file_path = "./my_data.json";

    //  append_data (file_path , data )

    //         async function append_data (filename , data ) {

    //          if (fs.existsSync(filename)) {
    //              read_data = await readFile(filename)
    //              if (read_data == false) {
    //                  console.log('not able to read file')
    //              }
    //              else {
    //                  read_data.push(data)
    //                  dataWrittenStatus = await writeFile(filename, read_data)
    //                  if(dataWrittenStatus== true) {
    //                    console.log('data added successfully')
    //                  }
    //                 else{
    //                    console.log('data adding failed')
    //                  }
    //              }
    //             }
    //          else{
    //                dataWrittenStatus = await writeFile(filename, [data])
    //                if (dataWrittenStatus == true) {
    //                    console.log('data added successfully')
    //                }
    //                else{
    //                   console.log('data adding failed')
    //                 }
    //            }

    //          async function readFile  (filePath) {
    //            try {
    //              const data = await fs.promises.readFile(filePath, 'utf8')
    //              return JSON.parse(data)
    //            }
    //           catch(err) {
    //               return false;
    //            }
    //          }

    //          async function writeFile  (filename ,writedata) {
    //            try {
    //                await fs.promises.writeFile(filename, JSON.stringify(writedata,null, 4), 'utf8');
    //                return true
    //            }
    //            catch(err) {
    //                return false
    //            }
    //          }

    // const csv= `${loginuserinfo},${JavaDev},${PythonDev},${FullStackDev},${UIUXDesginer},${AndroidDev},${title}`+"\n";
    // re.appendFileSync("./Dataset.json", csv);
    return res.status(200).json({
      message: "skills number successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

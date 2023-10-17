// import s3 from "../config/s3"

const generateUploadURL = require("../config/s3")

module.exports = {
    get
};

async function get(req, res, next) {
    try {
        console.log("hitting s3 get action")
        const url = await generateUploadURL()
        res.send({url})
    }catch (error) {
        console.log(error)
    }
}
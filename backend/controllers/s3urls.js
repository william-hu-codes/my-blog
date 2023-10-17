// import s3 from "../config/s3"

const s3 = require("../config/s3")

module.exports = {
    get
};

async function get(req, res, next) {
    try {
        const url = s3.generateUploadURL()
        res.send({url})
    }catch (error) {
        console.log(error)
    }
}
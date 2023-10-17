// import dotenv from "dotenv"
// import aws from "aws-sdk"
// import crypto from "crypto"
// import { promisify } from "util"

const dotenv = require("dotenv")
const aws = require("aws-sdk")
const crypto = require("crypto")
const promisify = require("util")

dotenv.config()

const region = "ca-central-1"
const bucketName = "william-hu-codes-my-blog-bucket"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "4"
})

module.exports = async function generateUploadURL() {
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString("hex")

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise("putObject", params)
    return uploadURL
}

// module.exports = generateUploadURL
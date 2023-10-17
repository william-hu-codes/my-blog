import dotenv from "dotenv"
import aws from "aws-sdk"

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
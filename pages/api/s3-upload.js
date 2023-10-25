// pages/api/s3-upload.js
import { APIRoute, sanitizeKey, uuid } from "next-s3-upload";
let date = new Date();
let unixTimeStamp = Math.floor(date.getTime() / 1000);
let year = date.getFullYear();
let months = date.getMonth() + 1;
let day = date.getDate();
export default APIRoute.configure({
  key(req, filename) {
    return `files/${day}-${months}-${year}-${unixTimeStamp}/${uuid()}/${sanitizeKey(
      filename
    )}`;
  },
  accessKeyId: process.env.S3_UPLOAD_KEY,
  secretAccessKey: process.env.S3_UPLOAD_SECRET,
  bucket: process.env.S3_UPLOAD_BUCKET,
  region: process.env.S3_UPLOAD_REGION,
  endpoint: process.env.S3_UPLOAD_ENDPOINT,
});

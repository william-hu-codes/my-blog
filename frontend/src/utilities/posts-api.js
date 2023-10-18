import sendRequest from "./send-request";
// import { sendMultipartRequest } from "./send-request"
const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function index() {
  return sendRequest(`${BASE_URL}/posts`, "GET")
}

export async function create(data) {
  return sendRequest(`${BASE_URL}/posts`, "POST", data)
}

export async function getMostRecentPost() {
  return sendRequest(`${BASE_URL}/posts/most-recent`, "GET")
}

export async function detail(id) {
  return sendRequest(`${BASE_URL}/posts/${id}`, "GET")
}

export async function destroy(id) {
  return sendRequest(`${BASE_URL}/posts/${id}`, "DELETE")
}

export async function getS3Url() {
  return sendRequest(`${BASE_URL}/s3urls`, "GET")
}

// export async function sendS3Url(url, file) {
//   return sendMultipartRequest(url, "PUT", file)
// }

export async function sendS3Url(url, file) {
  try {
      await fetch(url, {
          method: "PUT",
          headers: {
              "Content-Type": "multipart/form-data"
          },
          body: file
      })
      return url.split("?")[0]
  }catch(err) {
      console.log(err)
      return err
  }
}
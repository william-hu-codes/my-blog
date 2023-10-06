import sendRequest from "./send-request";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function index() {
  return sendRequest(`${BASE_URL}/posts`, "GET")
}

export async function create(data) {
  return sendRequest(`${BASE_URL}/posts`, "POST", data)
}

export async function getMostRecentCase() {
  return sendRequest(`${BASE_URL}/posts/most-recent`, "GET")
}

export async function detail(id) {
  return sendRequest(`${BASE_URL}/posts/${id}`, "GET")
}

export async function destroy(id) {
  return sendRequest(`${BASE_URL}/posts/${id}`, "DELETE")
}
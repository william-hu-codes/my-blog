import sendRequest from "./send-request";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function index() {
    return sendRequest(`${BASE_URL}/tags`, "GET")
}

export async function create(data) {
    return sendRequest(`${BASE_URL}/tags`, "POST", data)
}

export async function getNewestTag() {
    return sendRequest(`${BASE_URL}/tags/newest`, "GET")
}
import axios from "axios";

const DEfaultURL = "http://192.168.1.67:3000";
const VERCELAPI = "https://api-services-delta.vercel.app/";
// baseURL:"http://192.168.1.67:3000",

const api = axios.create({
     baseURL: VERCELAPI,
});

export default api;

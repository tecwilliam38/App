import axios from "axios";

const VERCELAPI = "https://api-services-delta.vercel.app/";

const api = axios.create({
     baseURL: VERCELAPI,
});

export default api;

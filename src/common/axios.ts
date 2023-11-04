import axios from "axios";

const Axios = axios.create(
    {
        baseURL: 'http://localhost:8080/fmb-app-api'
    }
);

export default Axios;
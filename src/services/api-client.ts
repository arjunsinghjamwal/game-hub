import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: '2afa69f549bb4879b4b902aa057797a7'
     }
})
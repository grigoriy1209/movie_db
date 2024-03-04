import axios from "axios";

import {baseURL} from "../constants";

const apiService=axios.create({baseURL})

apiService.interceptors.request.use(request =>{
    request.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGExYjMzNDM1ZWY3NTA4MjRlOGNlMjM3YTdlODY4NCIsInN1YiI6IjY1ZDhmMmZjMjIzZTIwMDE2MzRlMDQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rhlzc35t9XbFwrJdsX0XcgSxQR2vItSVNtDWJcsp208'
    return request
})

export {
    apiService
}
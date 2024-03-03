import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IMovie} from "../interfaces";

const movieService  ={
    getAll:(page:string):IRes<IMovie> => apiService.get(urls.movies.base,{params:{page}}),
    getById:(id:number):IRes<IMovie> => apiService.get(urls.movies.byId(id))
}
export {
    movieService
}
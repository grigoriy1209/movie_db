import {IRes} from "../types/responseType";
import { IMovie} from "../interfaces/movieInterface";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService  ={
    getAll:(page:string):IRes<IMovie> => apiService.get(urls.movies.base,{params:{page}}),
    getById:(id:number):IRes<IMovie> => apiService.get(urls.movies.byId(id))
}
export {
    movieService
}
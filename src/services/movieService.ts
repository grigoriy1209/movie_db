import {apiServices} from "./apiServices";
import { urls} from "../constants";
import {IRes} from "../types/responseType";
import {IMovie} from "../interfaces";

const movieService ={

    getAll: ():IRes<IMovie> =>apiServices.get(urls.movies.base),
    getById:(id:number):IRes<IMovie> => apiServices.get(urls.movies.byId(id))
}
export {
    movieService
}
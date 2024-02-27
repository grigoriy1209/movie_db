import {apiServices} from "./apiServices";
import {urls} from "../constants";
import {IRes} from "../types/responseType";
import {IGenre} from "../interfaces";

const genresService ={
    getAll:(page:number):IRes<IGenre> => apiServices.get(urls.genre.base,{params:{page}}),
    getById:(id:number):IRes<IGenre>=> apiServices.get(urls.genre.byId(id))
}

export {
    genresService
}
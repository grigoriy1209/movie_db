import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IGenre} from "../interfaces";

const genresService={
 getAll:():IRes<IGenre>=> apiService.get(urls.genre.base),
    getById:(id:number):IRes<IGenre>=> apiService.get(urls.genre.byId(id))
}
export {
    genresService
}
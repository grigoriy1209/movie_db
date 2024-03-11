import {IGenre} from "./genresInterface";

export interface IMovie {
    id: number
    nextPage: number | null
    page: string
    poster_path: string
    prevPage: number | null
    results: [];
    title: string;
    vote_average: number
    movieDetails:[]
    movie_id:number
    overview:string
    genres:IGenre[]
    backdrop_path:string
    genre_ids:number
}


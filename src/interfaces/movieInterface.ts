export interface IMovie {
    id: number
    nextPage: number | null
    page: string
    poster_path: string
    prevPage: number | null
    results: [];
    title: string;
    vote_average: number

}

export interface IData{
    results:IMovie[]
    page:string
    id:number
}
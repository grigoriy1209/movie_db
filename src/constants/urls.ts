
const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'
const genre = './genre/movie/list'

const urls = {
    movies: {
        base: movies,
        byId:(id:number): string =>`${movies}/${id}`
    },
    genre:{
        base:genre,
        byId:(id:number):string =>`${genre}/${id}`
    }
}

export {
    baseURL,
    urls
}
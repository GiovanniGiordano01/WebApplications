//API to get all the movies
const SERVER_URL='http://localhost:3001';
import {Film} from './FilmLibraryapp'
const getFilms= async (filter) =>{
 if(filter==="Favorite"){
        const response = await fetch(SERVER_URL + '/api/films/favorites');
        if(response.ok){
            const filmsJson= await response.json(); 
            return filmsJson.map(f => new Film(f.id,f.title,f.isFavorite,f.watchDate,f.rating,f.userId))
        }else{
            throw new Error('Internal server error');
        }
    }else if(filter==="Best rated"){
        const response = await fetch(SERVER_URL + '/api/films/bests');
        if(response.ok){
            const filmsJson= await response.json(); 
            return filmsJson.map(f => new Film(f.id,f.title,f.isFavorite,f.watchDate,f.rating,f.userId))
        }else{
            throw new Error('Internal server error');
        }
    }else if(filter==="Seen last month"){
        const response = await fetch(SERVER_URL + '/api/films/SeenLastMonth');
        if(response.ok){
            const filmsJson= await response.json(); 
            return filmsJson.map(f => new Film(f.id,f.title,f.isFavorite,f.watchDate,f.rating,f.userId))
        }else{
            throw new Error('Internal server error');
        }
    }else if(filter==="Unseen"){
        const response = await fetch(SERVER_URL + '/api/films/unseen');
        if(response.ok){
            const filmsJson= await response.json(); 
            return filmsJson.map(f => new Film(f.id,f.title,f.isFavorite,f.watchDate,f.rating,f.userId))
        }else{
            throw new Error('Internal server error');
        }
    }else{
        const response = await fetch(SERVER_URL + '/api/films');
        if(response.ok){
            const filmsJson= await response.json(); 
            return filmsJson.map(f => new Film(f.id,f.title,f.isFavorite,f.watchDate,f.rating,f.userId))
        }else{
            throw new Error('Internal server error');
        }
    }
}

export default {getFilms};
//import
import express from 'express'
import morgan from 'morgan'
import {retrieveFilms,retrieveFavoriteFilms,retrieveFilmAboveRating,retrieveUnwatchedFilms,retrieveFilm,addFilm} from './dao.js'

//init
const app=express();
const port=3000;

//middleware
//app.use(json());
app.use(morgan('dev'));

//API implementations
app.get('/films', (req,res) => {
    retrieveFilms().then(rows =>{
        res.json(rows);
    })
})

app.get('/films/favorites', (req,res) => {
    retrieveFavoriteFilms().then(rows =>{
        res.json(rows);
    })
})

app.get('/films/bests', (req,res) => {
    retrieveFilmAboveRating(5).then(rows =>{
        res.json(rows);
    })
})

app.get('/films/unseen', (req,res) => {
    retrieveUnwatchedFilms().then(rows =>{
        res.json(rows);
    })
})

app.post('/films', (req,res) => {  
       retrieveFilm(req.params.id).then(rows =>{
        res.json(rows);
       })
})


//start the server
app.listen(port, () => {console.log("application started!")});
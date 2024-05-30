//import
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {retrieveFilms,retrieveFavoriteFilms,retrieveBestRatedFilms,retrieveUnwatchedFilms,retrieveSeenLastMonthFilm} from './dao.js'

//init
const app=express();
const port=3001;

//middleware
app.use(express.json());
app.use(morgan('dev'));
//set up and enable CORS
const corsOptions = {
    origin: 'http://localhost:5173',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
//API implementations
app.get('/api/films', (req,res) => {
    retrieveFilms().then(rows =>{
        res.json(rows);
    })
})

app.get('/api/films/favorites', (req,res) => {
    retrieveFavoriteFilms().then(rows =>{
        res.json(rows);
    })
})

app.get('/api/films/bests', (req,res) => {
    retrieveBestRatedFilms().then(rows =>{
        res.json(rows);
    })
})

app.get('/api/films/unseen', (req,res) => {
    retrieveUnwatchedFilms().then(rows =>{
        res.json(rows);
    })
})

app.get('/api/films/SeenLastMonth', (req,res) => {
    retrieveSeenLastMonthFilm().then(rows =>{
        res.json(rows);
    })
})

/*app.get('/films/:id', (req,res) => {
    retrieveFilm(req.params.id).then(rows =>{
        res.json(rows);
    })
})

app.post('/films', (req,res) => { 
       addFilm(req.body).catch((err) =>{console.log("errore nell'interazione con il DB!", err)});
})
app.put('/films/:id', (req,res) =>{
    updateFilm(req.params.id,req.body).catch((err) =>{console.log("errore nell'interazione con il DB!", err)});
})

app.delete('/films/:id', (req,res) =>{
    DeleteFilm(req.params.id).catch((err) =>{console.log("errore nell'interazione con il DB!", err)});
})
app.put('/films/favorites/:id', (req,res) =>{
    setFilmAsfavorite(req.params.id).catch((err) =>{console.log("errore nell'interazione con il DB!", err)});
})
app.put('/films/ratings/:id', (req,res) =>{
    updateFilmRating(req.params.id,req.body).catch((err) =>{console.log("errore nell'interazione con il DB!", err)});
})
*/



//start the server
app.listen(port, () => {console.log("application started!")});
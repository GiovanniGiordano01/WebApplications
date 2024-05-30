import dayjs from "dayjs";
import sqlite from 'sqlite3';

const db= new sqlite.Database('./films.db', (err) =>{if(err) throw err});

function Film(id,title,isFavorite,rating,watchDate,userId){
    this.id=id;
    this.title=title;
    this.isFavorite=isFavorite;
    this.watchDate=watchDate && dayjs(watchDate);
    this.rating=rating;
    this.userId=userId;
    this.isSeenLastMonth = () => {
        if(this.watchDate!=null){
                    // Accessing watchDate only if defined
                    const diff = this.watchDate.diff(dayjs(), 'month');
                    return diff <= 0 && diff > -1; //if difference is greater than -1, film not seen last month
        }else{
            return false;
        }  
    };
    this.json = () =>{
        return {
            ...this,
            watchDate: this.watchDate? this.watchDate.format("YYYY-MM-DD"): null,
        };

    }
}
//INTERAZIONE CON IL DATABASE

//db.close() be careful, db interaction is asynchronous!
export function retrieveFilms(){
    return new Promise((resolve,reject) =>{
        db.all("select * from films", (err,rows) =>{
            if(err) {reject(err)}
            else{
                const films= rows.map((f) => new Film(f.id,f.title,((f.isFavorite===1)? true : false),f.rating,f.watchDate,f.userId));
                resolve(films);
            }                        
            
        })
    
    })
}
export function retrieveFavoriteFilms(){
    return new Promise((resolve,reject) =>{
        db.all("select * from films where isFavorite=1", (err,rows) =>{
            if(err){reject(err)}            
            else{
                const films= rows.map((f) => new Film(f.id,f.title,((f.isFavorite===1)? true : false),f.rating,f.watchDate,f.userId));
                resolve(films);
            }               
               
        })
    
    })
}
export function retrieveBestRatedFilms(){
    return new Promise((resolve,reject) =>{
        db.all("select * from films where rating=5", (err,rows) =>{
            if(err) {reject(err)}
            else{
                const films= rows.map((f) => new Film(f.id,f.title,((f.isFavorite===1)? true : false),f.rating,f.watchDate,f.userId));
                resolve(films);
            }                        
            
        })
    
    })
}

export function retrieveUnwatchedFilms(){
    return new Promise((resolve,reject) =>{
        db.all("select * from films where WatchDate IS NULL", (err,rows) =>{
            if(err) {reject(err)}
            else{
                const films= rows.map((f) => new Film(f.id,f.title,((f.isFavorite===1)? true : false),f.rating,f.watchDate,f.userId));
                resolve(films);
            }   
        })
    
    })
}

export function retrieveSeenLastMonthFilm(){
    return new Promise((resolve,reject) =>{
        //already some pre filtering!
        db.all("select * from films where WatchDate IS NOT NULL", (err,rows) =>{
            if(err) {reject(err)}
            else{
                const films= rows.map((f) => new Film(f.id,f.title,((f.isFavorite===1)? true : false),f.rating,f.watchDate,f.userId));
                resolve(films.filter(f => f.isSeenLastMonth()));
            }   
        })
    
    })
}

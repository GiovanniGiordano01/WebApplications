// LAB01
import dayjs from "dayjs";
import sqlite from 'sqlite3'
//import express from 'express'
"use strict";
const db= new sqlite.Database('./films.db', (err) =>{if(err) throw err});

function Film(id,title,favorite,date,rating,person_id){
    this.id=id;
    this.title=title;
    this.favorite=favorite;
    this.date=date;
    this.rating=rating;
    this.person_id=person_id;
    this.getDate= () => {return this.date;}
    this.toString_= () =>{
        console.log( "Id: " + this.id + " Title: " + this.title + " Favorite:" + this.favorite + " Date: " + this.date.format('YYYY/MM/DD') + " Rating: " + this.rating + " Person_id: " +this.person_id);
    }
    this.getID= () => {return this.id}
    this.resetDate= () => {this.date=null}
}
function  filmLibrary(){
    this.Films= [];
    this.add = (movie) => {this.Films.push(movie)}
    this.printAll= () => {
        for(let i=0; i<this.Films.length;i++){
            this.Films[i].toString_();
        }

    }
    this.sortByDate= () => {
        this.Films.sort((a1, a2)=>(a1.getDate()-a2.getDate()));
    }
    this.deleteFilm = (id) => {
        for(let i=0;i<this.Films.length;i++){
                if(this.Films[i].getID()===id){
                    this.Films.splice(i,1);
                }

        }

    }
    this.resetWatchedFilms= () =>{
        for(let i=0;i<this.Films.length;i++){
            this.Films[i].resetDate();
    }
    }
    this.StoreFilm=(f)=>{
        return new Promise((resolve,reject) =>{
            db.run('INSERT INTO films(id,title,isFavorite,rating,watchDate,UserId) VALUES(?,?,?,?,?,?)',[f.id,f.title,f.favorite,f.rating,f.date.format('YYYY-MM-DD'),f.person_id], (err) =>{
                if(err)
                    reject("errore nell'interazione con il database!");
                else
                    resolve("Aggiunta del film avvenuta con successo!");
            })
        
        })     
    }
    this.deleteFilm=(id) =>{
        return new Promise((resolve,reject) =>{
            db.run('DELETE FROM films WHERE id=?',[id],(err) =>{
                if(err)
                    reject("error when deleting the film, maybe ID doesn't exist!");
                else
                    resolve("delete operation was successful!");
            })
        })
    }
    this.deleteWatchDate=()=>{
        return new Promise((resolve,reject) =>{
            db.run('UPDATE films SET watchDate=NULL',(err) =>{
                if(err)
                    reject("error while deleting all watch dates!");
                else
                    resolve("succesfully deleted all watch dates!");
            })
        })
    }
}

let id=0;
const f1 = new filmLibrary();
const F1 = new Film(6,"2001 Odissea nello spazio", 1, dayjs('2024-03-12'),5,0);
const F2 = new Film(7,"Interstellar",1,dayjs(null),5,0);
const F3 = new Film(8,"Oppenheimer ", 2, dayjs('2023-08-09'),4,0);
/*f1.add(F1);
//f1.add(F2);
f1.add(F3);
console.log("prima del sort: ");
f1.printAll();
console.log("dopo il sort: ");
f1.sortByDate();
f1.printAll();*/
//INTERAZIONE CON IL DATABASE

/*db.all("SELECT * FROM films", (err,rows) =>{
    if(err)
        throw err;
    console.log(rows);
    });

db.all("SELECT * FROM users", (err,rows) =>{
    if(err)
        throw err;
    console.log(rows);
    });
const filmID=5;
db.get("SELECT * FROM films WHERE id=?",[filmID], (err,row) => {
    if(err)
        throw err;
    else
        console.log(row);
});*/

//db.close() be careful, db interaction is asynchronous!
function retrieveFilms(){
    return new Promise((resolve,reject) =>{
        db.all("select * from films", (err,rows) =>{
            if(err)
                reject(err);
            else                   
                resolve(rows);
        })
    
    })
}

function retrieveFavoriteFilms(){
    return new Promise((resolve,reject) =>{
        db.all("select * from films where isFavorite=1", (err,rows) =>{
            if(err)
                reject(err);
            else                   
                resolve(rows);
        })
    
    })
}

function retrieveTodayFilms(){
    return new Promise((resolve,reject) =>{
        db.all("select * from films where WatchDate=?",[dayjs().format('YYYY/MM/DD')], (err,rows) =>{
            if(err)
                reject(err);
            else                   
                resolve(rows);
        })
    
    })
}
function retrieveFilmAtDate(date){
    return new Promise((resolve,reject) =>{
        db.all("select * from films where WatchDate=?",[date.format('YYYY-MM-DD')], (err,rows) =>{
            if(err)
                reject(err);
            else                   
                resolve(rows);
        })
    
    })
}

function retrieveFilmAboveRating(rating){
    return new Promise((resolve,reject) =>{
        db.all("select * from films where rating>=?",[rating], (err,rows) =>{
            if(err)
                reject(err);
            else                   
                resolve(rows);
        })
    
    })
}

function retrieveFilmContainingString(string){
    return new Promise((resolve,reject) =>{
        db.all("select * from films where rating>=?",[rating], (err,rows) =>{
            if(err)
                reject(err);
            else                   
                resolve(rows);
        })
    
    })
}

retrieveFilms().then((rows) =>{
    console.log("films");
    console.log(rows);
});
retrieveFavoriteFilms().then((rows) =>{
    console.log("favorite");
    console.log(rows);
});
retrieveTodayFilms().then((rows) =>{
    console.log("today films");
    console.log(rows);
});
retrieveFilmAtDate(dayjs('2024-03-10')).then((rows)=>{
    console.log("date");
    console.log(rows);
})
retrieveFilmAboveRating(4).then((rows)=>{
    console.log("above rating");
    console.log(rows);
})
//DATABASE INTERACTION
//f1.StoreFilm(F2).then((msg)=> {console.log(msg)}).catch((msg)=> {console.log(msg)});
//f1.deleteFilm(7).then((msg)=> {console.log(msg)}).catch((msg) => {console.log(msg)});
//f1.deleteWatchDate().then((msg)=> {console.log(msg)}).catch((msg)=> {console.log(msg)});


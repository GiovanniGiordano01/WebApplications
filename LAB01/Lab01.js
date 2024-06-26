// LAB01
import dayjs from "dayjs";
"use strict";
function computeString(x){
    for(let i=0;i<x.length;i++){
        console.log(x[i].slice(0,2) + x[i].slice(-2));
     }
}

const stringhe=["giovanni","saaaaaaaas","va"];
computeString(stringhe);
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
}

let id=0;
const f1 = new filmLibrary();
const F1 = new Film(++id,"2001 Odissea nello spazio", true, dayjs('2024-03-12'),5,0);
//const F2 = new Film(++id,"Interstellar",true,dayjs(null),5,0);
const F3 = new Film(++id,"Oppenheimer ", false, dayjs('2023-08-09'),4,0);
f1.add(F1);
//f1.add(F2);
f1.add(F3);
console.log("prima del sort: ");
f1.printAll();
console.log("dopo il sort: ");
f1.sortByDate();
f1.printAll();

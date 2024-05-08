// LAB01
//import dayjs from "dayjs";
"use strict";
function Film(id,title,favorite,date,rating,person_id){
    this.id=id;
    this.title=title;
    this.favorite=favorite;
    this.date=date;
    this.rating=rating;
    this.person_id=person_id;
    this.getDate= () => {return this.date;}
    this.toString_= () =>{
        console.log( "Id: " + this.id + " Title: " + this.title + " Favorite:" + this.favorite + " Date: " + this.date + " Rating: " + this.rating + " Person_id: " +this.person_id);
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
    this.getFilms = (choice) => {
         if (choice=="Favorite"){
            return this.Films.filter((film)=>film.favorite);
        } else if (choice=="Best rated"){
            return this.Films.filter((film)=>film.rating===4);
        } else if (choice=="Unseen"){
            return this.Films.filter((film)=>film.date==null);
        }else{
            return [...this.Films];
        }
            
      }
    
    this.init= () =>{
        let id=0;
        this.Films=[
            new Film(++id,"2001 Odissea nello spazio", false, '2024-03-12',5,0),
            new Film(++id,"Interstellar",true,null,5,0),
            new Film(++id,"Shrek ", true, '2023-09-10',4,0),
            new Film(++id,"Il gatto con gli stivali ", false, '2023-12-12',4,0),
            new Film(++id,"Matrix ", true, '2002-08-09',2,0),
            new Film(++id,"Kung Fu Panda 4 ", false, '2024-04-05',1,0),
            new Film(++id,"Dune 2",true,'2024-03-02',5,0),
            new Film(++id,"Jurassic park", false,"2019-04-22",3)
        ];
    }
}

export {Film,filmLibrary};
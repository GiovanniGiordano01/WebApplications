// LAB01
import dayjs from "dayjs";
"use strict";

function Film(id,title,favorite,date,rating,person_id){
    this.id=id;
    this.title=title;
    this.favorite=favorite;
    this.date=date && dayjs(date);
    this.rating=rating;
    this.person_id=person_id;
    this.getDate= () => {
        if(this.date!=null){
            return this.date.format("YYYY-MM-DD");
        }else{
            return "not watched yet!";
        }
       
    }
    this.toString_= () =>{
        console.log( "Id: " + this.id + " Title: " + this.title + " Favorite:" + this.favorite + " Date: " + this.date + " Rating: " + this.rating + " Person_id: " +this.person_id);
    }
    this.getID= () => {return this.id}
    this.resetDate= () => {this.date=null}
    this.isSeenLastMonth = () => {
        if(this.date!=null){
                    // Accessing watchDate only if defined
                    const diff = this.date.diff(dayjs(), 'month');
                    return diff <= 0 && diff > -1; //if difference is greater than -1, film not seen last month
        }else{
            return false;
        }  
    };
}
function  filmLibrary(){
    this.id=0;
    this.Films= [];
    this.getID = () => {
        this.id++;
        return this.id
    };
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
    this.getFilms = () => {
    return [...this.Films]; 
      }
    this.getFilm = (id) => {
        for(let i=0;i<this.Films.length;i++){
            if(this.Films[i].getID()===id){
                return this.films[i];
            }

    } 
        }
    this.init= () =>{
        this.Films=[
            new Film(++(this.id),"2001 Odissea nello spazio", false, "2024-03-12",5,0),
            new Film(++(this.id),"Interstellar",true,null,5,0),
            new Film(++(this.id),"Shrek ", true, '2023-09-10',4,0),
            new Film(++(this.id),"Il gatto con gli stivali ", false, '2023-12-12',4,0),
            new Film(++(this.id),"Matrix ", true, '2002-08-09',2,0),
            new Film(++(this.id),"Kung Fu Panda 4 ", false, '2024-05-05',1,0),
            new Film(++(this.id),"Dune 2",true,'2024-03-02',5,0),
            new Film(++(this.id),"Jurassic park", false,"2019-04-22",3)
        ];
    }
}

export {Film,filmLibrary};
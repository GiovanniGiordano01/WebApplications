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
}

let id=0;
const f1 = new filmLibrary();
const F1 = new Film(++id,"2001 Odissea nello spazio", false, '2024-03-12',5,0);
const F2 = new Film(++id,"Interstellar",true,null,5,0);
const F3 = new Film(++id,"Shrek ", true, '2023-09-10',4,0);
const F4 = new Film(++id,"Il gatto con gli stivali ", false, '2023-12-12',4,0);
const F5 = new Film(++id,"Matrix ", true, '2002-08-09',2,0);
const F6 = new Film(++id,"Kung Fu Panda 4 ", false, '2024-04-05',1,0);
f1.add(F1);
f1.add(F2);
f1.add(F3);
f1.add(F4);
f1.add(F5);
f1.add(F6);

const table= document.getElementById("FilmTable");
const title=document.getElementById("title");
for(const film of f1.Films){
    const tr=document.createElement("tr");
    table.appendChild(tr);

    const td_title=document.createElement("td");
    tr.appendChild(td_title);
    td_title.innerText=film.title;

    const td_favorite=document.createElement("td");
    tr.appendChild(td_favorite);
    if(film.favorite){
        td_favorite.innerHTML=`            
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked>
            <label for="vehicle1"> Favorite</label><br> `
    }else{
        td_favorite.innerHTML=`            
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" >
            <label for="vehicle1"> Favorite</label><br> `
    }
    const td_date=document.createElement("td");
    tr.appendChild(td_date);
    td_date.innerText=film.date;

    const td_rating=document.createElement("td");
    tr.appendChild(td_rating);
    if(film.rating<1){
        td_rating.innerHTML=`<p></p>`;
    }else if(film.rating<2){
       td_rating.innerHTML=`<p>⭐</p>`;
    }else if(film.rating<3){
        td_rating.innerHTML=`<p>⭐⭐</p>`;

    }else if(film.rating<4){
        td_rating.innerHTML=`<p>⭐⭐⭐</p>`;

    }else if(film.rating<5){
        td_rating.innerHTML=`<p>⭐⭐⭐⭐</p>`;

    }else{
        td_rating.innerHTML=`<p>⭐⭐⭐⭐⭐</p>`;

    }

    const td_icons=document.createElement("td");
    tr.appendChild(td_icons);
    td_icons.innerHTML=`
            <button class="btn btn-primary"><i class='bi bi-pencil-square'>✏️</i></button>
            <button type="button" class="btn btn-danger">🗑️</button>`

    /*OTHER METHOD!
        tr.innerHTML =`
        <td>${film.title}</td>
        <td>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked>
            <label for="vehicle1"> Favorite</label><br>                       
        </td>
        <td>${film.date}</td>
        <td>
           <p>⭐⭐⭐⭐⭐</p>
        </td>
        <td>
          <button class="btn btn-primary"><i class='bi bi-pencil-square'>✏️</i></button>
          <button type="button" class="btn btn-danger">🗑️</button>
        </td> 
        `;*/

}
//event listeners!
const AllLink=document.getElementById("AllLink");
const FavoriteLink=document.getElementById("FavoriteLink");
const BestLink=document.getElementById("BestLink");
const UnseenLink=document.getElementById("UnseenLink");
const SeenlastLink=document.getElementById("SeenlastLink");



AllLink.addEventListener('click',(event)=>{

    console.log("ALL");
    title.innerHTML="";
    title.innerHTML=`<h2 class="col">All</h2>`
    AllLink.classList.add("active");
    BestLink.classList.remove("active");
    UnseenLink.classList.remove("active");
    SeenlastLink.classList.remove("active");
    FavoriteLink.classList.remove("active");
    table.innerHTML="";
    for(const film of f1.Films){
        const tr=document.createElement("tr");
        table.appendChild(tr);
    
        const td_title=document.createElement("td");
        tr.appendChild(td_title);
        td_title.innerText=film.title;
    
        const td_favorite=document.createElement("td");
        tr.appendChild(td_favorite);
        if(film.favorite){
            td_favorite.innerHTML=`            
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked>
                <label for="vehicle1"> Favorite</label><br> `
        }else{
            td_favorite.innerHTML=`            
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" >
                <label for="vehicle1"> Favorite</label><br> `
        }
        const td_date=document.createElement("td");
        tr.appendChild(td_date);
        td_date.innerText=film.date;
    
        const td_rating=document.createElement("td");
        tr.appendChild(td_rating);
        if(film.rating<1){
            td_rating.innerHTML=`<p></p>`;
        }else if(film.rating<2){
           td_rating.innerHTML=`<p>⭐</p>`;
        }else if(film.rating<3){
            td_rating.innerHTML=`<p>⭐⭐</p>`;
    
        }else if(film.rating<4){
            td_rating.innerHTML=`<p>⭐⭐⭐</p>`;
    
        }else if(film.rating<5){
            td_rating.innerHTML=`<p>⭐⭐⭐⭐</p>`;
    
        }else{
            td_rating.innerHTML=`<p>⭐⭐⭐⭐⭐</p>`;
    
        }
    
        const td_icons=document.createElement("td");
        tr.appendChild(td_icons);
        td_icons.innerHTML=`
                <button class="btn btn-primary"><i class='bi bi-pencil-square'>✏️</i></button>
                <button type="button" class="btn btn-danger">🗑️</button>`
    }
});

FavoriteLink.addEventListener('click',(event)=>{
    console.log("favorites")
    title.innerHTML="";
    title.innerHTML=`<h2 class="col">Favorites</h2>`
    AllLink.classList.remove("active");
    BestLink.classList.remove("active");
    UnseenLink.classList.remove("active");
    SeenlastLink.classList.remove("active");
    FavoriteLink.classList.add("active");
    table.innerHTML="";
    for(const film of f1.Films){
        if(film.favorite){
            const tr=document.createElement("tr");
            table.appendChild(tr);
        
            const td_title=document.createElement("td");
            tr.appendChild(td_title);
            td_title.innerText=film.title;
        
            const td_favorite=document.createElement("td");
            tr.appendChild(td_favorite);
            td_favorite.innerHTML=`            
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked>
                <label for="vehicle1"> Favorite</label><br> `

            const td_date=document.createElement("td");
            tr.appendChild(td_date);
            td_date.innerText=film.date;
        
            const td_rating=document.createElement("td");
            tr.appendChild(td_rating);
            if(film.rating<1){
                td_rating.innerHTML=`<p></p>`;
            }else if(film.rating<2){
               td_rating.innerHTML=`<p>⭐</p>`;
            }else if(film.rating<3){
                td_rating.innerHTML=`<p>⭐⭐</p>`;
        
            }else if(film.rating<4){
                td_rating.innerHTML=`<p>⭐⭐⭐</p>`;
        
            }else if(film.rating<5){
                td_rating.innerHTML=`<p>⭐⭐⭐⭐</p>`;
        
            }else{
                td_rating.innerHTML=`<p>⭐⭐⭐⭐⭐</p>`;
        
            }
        
            const td_icons=document.createElement("td");
            tr.appendChild(td_icons);
            td_icons.innerHTML=`
                    <button class="btn btn-primary"><i class='bi bi-pencil-square'>✏️</i></button>
                    <button type="button" class="btn btn-danger">🗑️</button>`

        }
    }

});

BestLink.addEventListener('click',(event)=>{
    console.log("BestLink");
    title.innerHTML="";
    title.innerHTML=`<h2 class="col">Best Rated</h2>`

    AllLink.classList.remove("active");
    BestLink.classList.add("active");
    UnseenLink.classList.remove("active");
    SeenlastLink.classList.remove("active");
    FavoriteLink.classList.remove("active");
    table.innerHTML="";
    for(const film of f1.Films){
        if(film.rating===5){
            const tr=document.createElement("tr");
            table.appendChild(tr);
        
            const td_title=document.createElement("td");
            tr.appendChild(td_title);
            td_title.innerText=film.title;
        
            const td_favorite=document.createElement("td");
            tr.appendChild(td_favorite);
            if(film.favorite){
                td_favorite.innerHTML=`            
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked>
                    <label for="vehicle1"> Favorite</label><br> `
            }else{
                td_favorite.innerHTML=`            
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" >
                    <label for="vehicle1"> Favorite</label><br> `
            }

            const td_date=document.createElement("td");
            tr.appendChild(td_date);
            td_date.innerText=film.date;
        
            const td_rating=document.createElement("td");
            tr.appendChild(td_rating);
            if(film.rating<1){
                td_rating.innerHTML=`<p></p>`;
            }else if(film.rating<2){
               td_rating.innerHTML=`<p>⭐</p>`;
            }else if(film.rating<3){
                td_rating.innerHTML=`<p>⭐⭐</p>`;
        
            }else if(film.rating<4){
                td_rating.innerHTML=`<p>⭐⭐⭐</p>`;
        
            }else if(film.rating<5){
                td_rating.innerHTML=`<p>⭐⭐⭐⭐</p>`;
        
            }else{
                td_rating.innerHTML=`<p>⭐⭐⭐⭐⭐</p>`;
        
            }
        
            const td_icons=document.createElement("td");
            tr.appendChild(td_icons);
            td_icons.innerHTML=`
                    <button class="btn btn-primary"><i class='bi bi-pencil-square'>✏️</i></button>
                    <button type="button" class="btn btn-danger">🗑️</button>`

        }
    }
});

UnseenLink.addEventListener('click',(event)=>{

    console.log("Unseen");
    title.innerHTML="";
    title.innerHTML=`<h2 class="col">Not watched yet</h2>`
    AllLink.classList.remove("active");
    BestLink.classList.remove("active");
    UnseenLink.classList.add("active");
    SeenlastLink.classList.remove("active");
    FavoriteLink.classList.remove("active");
    table.innerHTML="";
    for(const film of f1.Films){
        if(film.date===null){
            const tr=document.createElement("tr");
            table.appendChild(tr);
        
            const td_title=document.createElement("td");
            tr.appendChild(td_title);
            td_title.innerText=film.title;
        
            const td_favorite=document.createElement("td");
            tr.appendChild(td_favorite);
            if(film.favorite){
                td_favorite.innerHTML=`            
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked>
                    <label for="vehicle1"> Favorite</label><br> `
            }else{
                td_favorite.innerHTML=`            
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" >
                    <label for="vehicle1"> Favorite</label><br> `
            }

            const td_date=document.createElement("td");
            tr.appendChild(td_date);
            td_date.innerText=film.date;
        
            const td_rating=document.createElement("td");
            tr.appendChild(td_rating);
            if(film.rating<1){
                td_rating.innerHTML=`<p></p>`;
            }else if(film.rating<2){
               td_rating.innerHTML=`<p>⭐</p>`;
            }else if(film.rating<3){
                td_rating.innerHTML=`<p>⭐⭐</p>`;
        
            }else if(film.rating<4){
                td_rating.innerHTML=`<p>⭐⭐⭐</p>`;
        
            }else if(film.rating<5){
                td_rating.innerHTML=`<p>⭐⭐⭐⭐</p>`;
        
            }else{
                td_rating.innerHTML=`<p>⭐⭐⭐⭐⭐</p>`;
        
            }
        
            const td_icons=document.createElement("td");
            tr.appendChild(td_icons);
            td_icons.innerHTML=`
                    <button class="btn btn-primary"><i class='bi bi-pencil-square'>✏️</i></button>
                    <button type="button" class="btn btn-danger">🗑️</button>`

        }
    }
    
});

SeenlastLink.addEventListener('click',(event)=>{

    console.log("Seenlast");
    AllLink.classList.remove("active");
    BestLink.classList.remove("active");
    UnseenLink.classList.remove("active");
    SeenlastLink.classList.add("active");
    FavoriteLink.classList.remove("active");
    title.innerHTML="";
    title.innerHTML=`<h2 class="col">Seen last month</h2>`
    table.innerHTML="";
});
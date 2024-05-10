/* eslint-disable react/prop-types */
import { Row, Col, Table, Button } from "react-bootstrap";
import React,{useState} from 'react';
import FilmForm from "./FilmForm";

function Rating(props){
  return(
    <>
    {props.rating==0 && <td>✰✰✰✰✰</td>}
    {props.rating==1 && <td>★✰✰✰✰</td>}
    {props.rating==2 && <td>★★✰✰✰</td>}
    {props.rating==3 && <td>★★★✰✰</td>}
    {props.rating==4 && <td>★★★★✰</td>}
    {props.rating==5 && <td>★★★★★</td>}
    </>
  );
}
function Favorite(props){
  return(
    <>
      {props.favorite===true && <td>✅</td>}
      {props.favorite===false && <td>❌</td>}
    </>
  );
}
function Action() {
    return(
      <td>
        <Button variant='primary' className='mx-1'><i className='bi bi-pencil-square'></i>✏️</Button> 
        <Button variant='danger'><i className='bi bi-trash'></i>🗑️</Button>
      </td>
    );
  }
function FilmData(props) {
        return(
            <>
              <td>{props.film.title}</td>
              <Favorite favorite={props.film.favorite}/>
              <td>{props.film.getDate()}</td>
              <Rating rating={props.film.rating}/>    
            </>
          );   
  }
function FilmRow(props) {
    return(
      <tr><FilmData film={props.film}/><Action /></tr>
    );
  }

function Main(props){
  const [mode, setMode] = useState('view');
  return (
     <>
     <h1>{props.active}</h1>
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Favorite</th>
          <th>WatchDate</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {props.active==="All" && props.films.map((ans) => <FilmRow film={ans} key={ans.id}/>)} 
      {props.active==="Favorite" && props.films.filter((movie) => movie.favorite).map((movie) => <FilmRow film={movie} key={movie.id}/>)}    
      {props.active==="Best rated" && props.films.filter((movie) => movie.rating===5).map((movie) => <FilmRow film={movie} key={movie.id}/>)}
      {props.active==="Seen last month" && props.films.filter((movie) => movie.isSeenLastMonth()).map((movie) => <FilmRow film={movie} key={movie.id}/>)}
      {props.active==="Unseen" && props.films.filter((film)=>film.date==null).map((movie) => <FilmRow film={movie} key={movie.id}/>)}
      </tbody>
    </Table>
    {mode === 'view' && <Button variant='primary' onClick={() => {setMode('add');}}>Add</Button>}
    {mode === 'add' && <FilmForm addFilm={(film) => {props.addFilm(film); setMode('view');}} 
    cancel={()=> setMode('view')} mode={mode}/>}
    </>
  );
}

export default Main;
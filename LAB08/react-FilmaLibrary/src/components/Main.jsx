/* eslint-disable react/prop-types */
import { Table, Button } from "react-bootstrap";
import React,{useState} from 'react';
import {Link, useNavigate} from "react-router-dom"


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
function Action(props) {
  const navigate=useNavigate();
    return(
      <td>
        <Button variant="primary mx-1" onClick={() => { navigate(`edit/${props.film.id}`) }}>✏️</Button>
        <Button variant='danger' onClick={() => props.deleteFilm(props.film.id)}>🗑️</Button>
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
      <tr><FilmData film={props.film}/><Action film={props.film} handleEdit={props.handleEdit} deleteFilm={props.deleteFilm}/></tr>
    );
  }

function Main(props){
  const [mode, setMode] = useState('view');
  const [editableFilm, setEditableFilm] = useState();

  const handleEdit = (film) => {
    setEditableFilm(film); 
    setMode('edit');
  }
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
        {props.films.map((ans) => <FilmRow film={ans} key={ans.id} handleEdit={handleEdit} deleteFilm={props.deleteFilm}/>)} 
      </tbody>
    </Table>
    <Link className="btn btn-primary" to="/FilmLibrary/Add">Add</Link>
  </>
  );
}

export default Main;
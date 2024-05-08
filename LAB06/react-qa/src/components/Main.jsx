/* eslint-disable react/prop-types */
import { Row, Col, Table, Button } from "react-bootstrap";
function Rating(props){
  if(props.rating<=1){
    return (<td>⭐</td>);
  }else if(props.rating<=2){
    return (<td>⭐⭐</td>);
  }else if(props.rating<=3){
    return (<td>⭐⭐⭐</td>);
  }else if(props.rating<=4){
    return (<td>⭐⭐⭐⭐</td>);
  }else{
    return (<td>⭐⭐⭐⭐⭐</td>);
  }
}
function Favorite(props){
  if(props.fav==true){
    return (<td><input type="checkbox" id="vehicle1" name="movie" value="Bike" checked></input>
<label htmlFor="movie"> Favorites</label></td>)
  }else{
    return (<td><input type="checkbox" id="vehicle1" name="movie" value="Bike"></input>
<label htmlFor="movie"> Favorites </label></td>)
  }

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
              <Favorite fav={props.film.favorite}/>
              <td>{props.film.date}</td>
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
      { props.films.map((ans) => <FilmRow film={ans} key={ans.id}/>) }
      </tbody>
    </Table>
    </>
    );
}

export default Main;
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import dayjs from 'dayjs';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function FilmForm(props) {
  const [title, setTitle] = useState(props.film ? props.film.title : '');
  const [favorite, setFavorite] = useState(props.film ? props.film.favorite : false);
  const [date, setDate] = useState(props.film ? props.film.date ? props.film.date.format('YYYY-MM-DD') :"null" : dayjs().format('YYYY-MM-DD'));
  const [rating, setRating] = useState(props.film ? props.film.rating : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    // creare un nuovo film
    const newFilm = {title, favorite, date,rating};

    // TODO: aggiungere validazione
    
    if(props.mode === 'edit') {
      // aggiornare il film in questione
      props.updateFilm({id: props.film.id, ...newFilm});
    } else {
      // aggiungere il nuovo film allo stato
      props.addFilm(newFilm);
    }
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder={"Enter the movie title..."} required={true} minLength={2} value={title} onChange={(event) => setTitle(event.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Favorite" onChange={(event) => setFavorite((event.target.value==="on")? true : false)}/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Enter watch date</Form.Label>
        <Form.Control type="date" value={date} onChange={(event) => setDate(event.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group id="films-list" className="mb-3">
              <Form.Label>Rating: </Form.Label>
              {[1, 2, 3, 4, 5].map((value) => (
                <i
                  key={value}
                  className={value <= rating ? "bi bi-star-fill" : "bi bi-star"}
                  onClick={() => setRating(value)}
                ></i>
              ))}
      </Form.Group>
      {props.mode==='add' && <Button variant='success' type='submit'>Add</Button>}
      {props.mode==='edit' && <Button variant='success' type='submit'>Update</Button>}
      <Button variant='danger' onClick={props.cancel}>Cancel</Button>
    </Form>
  );
}

export default FilmForm;
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from "./components/NavHeader";
import Aside from "./components/Aside";
import Main from "./components/Main";
import { Film,filmLibrary } from "./FilmLibraryapp";
import { Container, Row,Col } from 'react-bootstrap';
import React,{useState} from 'react';
import './App.css'
const f = new filmLibrary();
f.init();
const films= f.getFilms();

function App() {
  const [Active,setActive]= useState("All");
  const [Films, setFilms] = useState(films);
  const chooseSelected = (s) => {
    setActive(s);
  }

  const addFilm = (x) => {
    setFilms(oldFilms => {
      const newId = Math.max(...oldFilms.map(movie => movie.id)) + 1;
      const newFilm = new Film(newId, x.title, x.favorite, x.date,x.rating, 0);
      f.add(newFilm);
      return [...oldFilms, newFilm];
    });
  }
  return (
    <>
    <NavHeader/>
    <Container fluid className='mt-3'>
      <Row>
        <Col md={3}>
          <Aside choose={chooseSelected} active={Active}/>
        </Col>
        <Col md={9}>
        <Main films={Films} active={Active} addFilm={addFilm}/>
        </Col> 
      </Row>

    </Container>
    </>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from "./components/NavHeader";
import Aside from "./components/Aside";
import Main from "./components/Main";
import FilmForm from "./components/FilmForm"
import { Film,filmLibrary } from "./FilmLibraryapp";
import { Container, Row,Col } from 'react-bootstrap';
import React,{useState} from 'react';
import {Routes,Route,Outlet} from 'react-router-dom'
import NotFound from "./components/NotFound"
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
  const updateFilm = (x) => {
    setFilms(oldFilms => {
      return oldFilms.map((film) => {
        if(film.id === x.id) {
          return new Film(x.id, x.title, x.favorite, x.date, x.rating,0);
        }
        else
          return film;
      });
    });
  }
  const deleteFilm = (x) =>{
    setFilms(() =>{
      f.deleteFilm(x);
      return f.getFilms();
    })
  }
  return (
    <Routes>
      <Route element={<><NavHeader/><Outlet/></>}>
        <Route path="/FilmLibrary" element={<>
          <Container fluid className='mt-3'>
            <Row>
              <Col md={3}>
                <Aside choose={chooseSelected} active={Active}/>
              </Col>
              <Col md={9}>
                <Main films={Films} active={Active} addFilm={addFilm} updateFilm={updateFilm} deleteFilm={deleteFilm}/>
              </Col> 
            </Row>
          </Container>
        </>}/> 
        <Route path="/FilmLibrary/add" element={<FilmForm mode="add" addFilm={(film) => {addFilm(film)}}/>}/>
        <Route path="/FilmLibrary/All" element={<>
          <Container fluid className='mt-3'>
            <Row>
              <Col md={3}>
                <Aside choose={chooseSelected} active={"All"}/>
              </Col>
              <Col md={9}>
                <Main films={Films} active={"All"} addFilm={addFilm} updateFilm={updateFilm} deleteFilm={deleteFilm}/>
              </Col> 
            </Row>
          </Container>
        </>}/>
        <Route path="/FilmLibrary/Favorite" element={<>
          <Container fluid className='mt-3'>
            <Row>
              <Col md={3}>
                <Aside choose={chooseSelected} active={"Favorite"}/>
              </Col>
              <Col md={9}>
                <Main films={Films.filter((movie) => movie.favorite)} active={"Favorite"} addFilm={addFilm} updateFilm={updateFilm} deleteFilm={deleteFilm}/>
              </Col> 
            </Row>
          </Container>
        </>}/>
        <Route path="/FilmLibrary/Best rated" element={<>
          <Container fluid className='mt-3'>
            <Row>
              <Col md={3}>
                <Aside choose={chooseSelected} active={"Best rated"}/>
              </Col>
              <Col md={9}>
                <Main films={Films.filter((movie) => movie.rating===5)} active={"Best rated"} addFilm={addFilm} updateFilm={updateFilm} deleteFilm={deleteFilm}/>
              </Col> 
            </Row>
          </Container>
        </>}/>
        <Route path="/FilmLibrary/Seen last month" element={<>
          <Container fluid className='mt-3'>
            <Row>
              <Col md={3}>
                <Aside choose={chooseSelected} active={"Seen last month"}/>
              </Col>
              <Col md={9}>
                <Main films={Films.filter((movie) => movie.isSeenLastMonth())} active={"Seen last month"} addFilm={addFilm} updateFilm={updateFilm} deleteFilm={deleteFilm}/>
              </Col> 
            </Row>
          </Container>
        </>}/>
        <Route path="/FilmLibrary/Unseen" element={<>
          <Container fluid className='mt-3'>
            <Row>
              <Col md={3}>
                <Aside choose={chooseSelected} active={"Unseen"}/>
              </Col>
              <Col md={9}>
                <Main films={Films.filter((film)=>film.date==null)} active={"Unseen"} addFilm={addFilm} updateFilm={updateFilm} deleteFilm={deleteFilm}/>
              </Col> 
            </Row>
          </Container>
        </>}/>  
        <Route path="*" element={<NotFound />}/>     
      </Route>
    </Routes>
  )
}

export default App

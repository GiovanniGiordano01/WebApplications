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

function App() {
  const [Active,setActive]= useState("All");
  const chooseSelected = (s) => {
    setActive(s);
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
        <Main films={f.getFilms(Active)} active={Active}/>
        </Col> 
      </Row>

    </Container>
    </>
  )
}

export default App

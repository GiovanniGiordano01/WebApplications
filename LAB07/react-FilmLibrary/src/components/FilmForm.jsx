import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import dayjs from 'dayjs';

function FilmForm(props) {
  const [text, setText] = useState(props.answer ? props.answer.text : '');
  const [email, setEmail] = useState(props.answer ? props.answer.email : '');
  const [date, setDate] = useState(props.answer ? props.answer.date.format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'));

  const handleSubmit = (event) => {
    event.preventDefault();
    // creare un nuova risposta
    const answer = {text, email, date};

    // TODO: aggiungere validazione

    if(props.mode === 'edit') {
      // aggiornare la risposta in questione
      props.updateAnswer({id: props.answer.id, ...answer});
    } else {
      // aggiungere la risposta allo stato
      props.addAnswer(answer);
    }
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" required={true} minLength={2} value={text} onChange={(event) => setTitle(event.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Should the film be inserted in the favorite playlist?</Form.Label>
        <Form.Control type="checkbox" required={true} value={email} onChange={(event) => setEmail(event.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Enter watch date</Form.Label>
        <Form.Control type="date" value={date} onChange={(event) => setDate(event.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Enter your rating</Form.Label>
        <Form.Control type="email" required={true} value={email} onChange={(event) => setRating(event.target.value)}></Form.Control>
      </Form.Group>
      {props.mode==='add' && <Button variant='success' type='submit'>Add</Button>}
      {props.mode==='edit' && <Button variant='success' type='submit'>Update</Button>}{' '}
      <Button variant='danger' onClick={props.cancel}>Cancel</Button>
    </Form>
  );
}

export default FilmForm;
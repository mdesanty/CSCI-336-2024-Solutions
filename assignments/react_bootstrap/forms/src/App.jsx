import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

function BootstrapForms() {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    score: 3
  });

  const [movies, setMovies] = useState([
    { title: 'Snatch', genre: 'Comedy', score: 5 },
    { title: 'Couples Retreat', genre: 'Comedy', score: 4 },
    { title: 'Super Troopers', genre: 'Comedy', score: 5 },
    { title: 'Grown Ups', genre: 'Comedy', score: 4 },
    { title: 'The Silence of the Lambs', genre: 'Horror', score: 5 },
    { title: 'The Wedding Ringer', genre: 'Comedy', score: 4 },
    { title: 'The Godfather', genre: 'Thriller', score: 4 },
    { title: 'Teenage Mutant Ninja Turtles III', genre: 'Action', score: 2 },
    { title: 'Dredd', genre: 'Action', score: 4 },
    { title: 'Thor: Love and Thunder', genre: 'Comedy', score: 3 },
    { title: 'Robocop', genre: 'Action', score: 4 },
    { title: 'Texas Chainsaw Massacre: The Next Generation', genre: 'Horror', score: 1 },
    { title: 'Avengers: Infinity War', genre: 'Comedy', score: 5 },
    { title: 'Terminator 2: Judgement Day', genre: 'Science Fiction', score: 5 }
  ]);

  const scoreValues = {
    1: 'Horrible',
    2: 'Bad',
    3: 'Okay',
    4: 'Good',
    5: 'Excellent'
  };

  function showModal() {
    setShowMovieModal(true);
  }

  function hideModal() {
    setShowMovieModal(false);
    setFormData({ title: '', genre: '', score: 3 });
    setErrors({});
  }

  function addMovie(e) {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setMovies([{ title: formData.title, genre: formData.genre, score: formData.score }, ...movies]);
    hideModal();
  }

  function validateForm() {
    const errors = {};

    if (formData.title === '') {
      errors.title = 'is required';
    }

    if (formData.title.length > 30) {
      errors.title = 'must be less than 30 characters';
    }

    if (formData.genre === '') {
      errors.genre = 'is required';
    }

    return errors;
  }

  return (
    <Container>
      <h2 className='py-3'>Mike's Movie List</h2>
      <div id='controls' className='my-3'>
        <Button onClick={showModal}>Add movie</Button>
      </div>
      <Table striped hover bordered>
        <thead>
          <tr>
            <th className='w-50'>Title</th>
            <th className='w-25'>Genre</th>
            <th className='w-25'>Score</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, key) =>
            <tr key={key}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.score}/5 - {scoreValues[movie.score]}</td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal show={showMovieModal} onHide={hideModal}>
        <Form noValidate onSubmit={addMovie}>
          <Modal.Header closeButton>
            Add movie
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId='movieTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' className={errors.title ? 'is-invalid' : ''} autoFocus onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='movieGenre' className='pt-2'>
              <Form.Label>Genre</Form.Label>
              <Form.Select defaultValue='' className={errors.genre ? 'is-invalid' : ''} onChange={(e) => setFormData({ ...formData, genre: e.target.value })}>
                <option value=''>Select a genre</option>
                <option value='Action'>Action</option>
                <option value='Comedy'>Comedy</option>
                <option value='Drama'>Drama</option>
                <option value='Horror'>Horror</option>
                <option value='Romance'>Romance</option>
                <option value='Suspense'>Suspense</option>
                <option value='Science Fiction'>Science Fiction</option>
                <option value='Thriller'>Thriller</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.genre}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='movieScore' className='pt-3'>
              <Form.Label>Score</Form.Label>
              <p className='mb-0 small'>{scoreValues[formData.score]}</p>
              <Form.Range defaultValue={formData.score} min={1} max={5} step={1} onChange={(e) => setFormData({ ...formData, score: e.target.value })} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={hideModal}>Cancel</Button>
            <Button variant='primary' type='submit'>Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default BootstrapForms;
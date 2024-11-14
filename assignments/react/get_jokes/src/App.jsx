import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ChuckJoke from './components/ChuckJoke';

import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('https://md-chuck-norris-jokes.herokuapp.com/jokes')
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <center>
      <div id="get-chuck-jokes">
        <h1>Chuck Jokes</h1>
        {jokes.length > 0 ?
          <>
            {jokes.map(joke => <ChuckJoke key={joke.id} joke={joke} />)}
          </>
          :
          <span>Loading...</span>
        }
      </div>
    </center>
  );
}

export default App;

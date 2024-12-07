import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        setImgUrl(response.data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div id="doggo-container">
      <h2>Here is a doggo!</h2>
      <img
        src={imgUrl}
        alt={'Doggo Image'}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "https://img.freepik.com/free-photo/lovely-pet-portrait-isolated_23-2149192357.jpg";
        }}
      />
    </div>
  );
}

export default App;

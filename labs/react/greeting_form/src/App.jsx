import React, { useState } from 'react';
import Greeting from './components/Greeting';

import './App.css';

function App() {
  const [greetings, setGreetings] = useState([
    {greeting: 'Hello', firstName: 'John', lastName: 'Doe'},
  ]);
  const [formData, setFormData] = useState({greeting: '', firstName: '', lastName: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreetings([...greetings, formData]);
    setFormData({greeting: '', firstName: '', lastName: ''});
  }

  return (
    <div id="greetings">
      <div>
        {greetings.map((greeting, index) => (
          <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Greeting:</label>
          <input type="text" name="greeting" value={formData.greeting} onChange={(e) => setFormData({...formData, greeting: e.target.value})} />
        </div>

        <div className="input-container">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
        </div>

        <div className="input-container">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
        </div>

        <button type="submit">Add Greeting</button>
      </form>

    </div>
  );
}

export default App;

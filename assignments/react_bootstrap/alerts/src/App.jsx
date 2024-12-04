import React, { useState } from 'react';
import { Container, Alert, Button } from 'react-bootstrap';

import './App.css';

function App() {
  const [alerts, setAlerts] = useState([
    { message: 'You have loaded the page', variant: 'primary', dismiss: true }
  ]);

  return (
    <Container id="alerts-container">
      <div id="alerts">
        {alerts.map((alert, key) =>
          <Alert key={key} variant={alert.variant} dismissible={alert.dismiss}>
            {alert.message}
          </Alert>
        )}
      </div>

      <Button
        id="blue-alert-btn"
        variant="primary"
        onClick={() => setAlerts([...alerts, { variant: 'primary', dismiss: false, message: 'Blue alert added' }])}
      >
        Add alert
      </Button>

      <Button
        id="green-alert-btn"
        variant="success"
        onClick={() => setAlerts([...alerts, { variant: 'success', dismiss: true, message: 'Green alert added' }])}
      >
        Add alert
      </Button>

      <Button
        id="yellow-alert-btn"
        variant="warning"
        onClick={() => setAlerts([...alerts, { variant: 'warning', dismiss: false, message: 'Yellow alert added' }])}
      >
        Add alert
      </Button>

      <Button
        id="purple-alert-btn"
        variant="purple"
        onClick={() => setAlerts([...alerts, { variant: 'purple', dismiss: true, message: 'Purple alert added' }])}
      >
        Add alert
      </Button>

      <Button
        id="clear-alerts-btn"
        variant="danger"
        onClick={() => setAlerts([])}
      >
        Clear alerts
      </Button>
    </Container>
  );
}

export default App;

import React from 'react';
import './App.scss';

import Customers from './Components/customers';

function App() {
  const onSubmit = event => {
    event.preventDefault();
    console.log(event.target.custId.value);
    const bodyObj = {
      passportNumber: event.target.passNo.value,
      name: event.target.name.value,
      flightNumber: event.target.flightNo.value,
      gender: event.target.gender.value,
      age: parseInt(event.target.age.value),
    };
    fetch(`/customer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyObj),
    })
      .then(res => res.json())
      .then(response => {
        console.log('customer added', response);
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="app">
      <header className="header">
        <h2>This is a simple application</h2>
      </header>
      {/* <Customers /> */}
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Customer Id" name="custId" /> <br />
        <input type="text" placeholder="Passport Number" name="passNo" />
        <br />
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="text" placeholder="Flight Number" name="flightNo" />
        <br />
        <input type="text" placeholder="Gender" name="gender" />
        <br />
        <input type="text" placeholder="Age" name="age" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

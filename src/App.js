import React from 'react';
import Form from './components/Form'
import List from './components/List'
import { useState} from 'react';
import { useEffect} from 'react';
import './App.css';

function App() {


  const [contact,setContact] = useState([])

  useEffect(()=>{console.log(contact)},[contact])

  return (

    <div className="App">
      
    {/* Burda Form.js propslar gedir */}

    <Form addContactProp = {setContact} oldcontact = {contact} />
    <br />
    <List/>
    </div>

  );
}

export default App;

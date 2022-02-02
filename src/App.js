import React from 'react';
import Form from './components/Form'
import Filter from './components/Filter';
import List from './components/List'
import { useState} from 'react';
import { useEffect} from 'react';
import './App.css';

function App() {


  const [contact,setContact] = useState([])

  useEffect(()=>{console.log(contact)},[contact])

  return (

    <div className="App">
    <br />

    <Filter/>

    {/* liste yazdirmaq */}
    <List licontact={contact}/>

    {/* Burda Form.js propslar gedir */}
    <Form addContactProp = {setContact} oldcontact = {contact} />
    <br />

    </div>

  );
}

export default App;

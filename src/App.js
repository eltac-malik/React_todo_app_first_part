import React from 'react';
import Form from './components/Form'
import List from './components/List'
import { useState} from 'react';
import './App.css';

function App() {


  const [contact,setContact] = useState
  ([
    {name:"Eltac",phonenumber:"055234234"},
    {name:"Elsever",phonenumber:"070234234"},
    {name:"Ferman",phonenumber:"070234244"}
  ])

  return (

    <div className="App">
    <br />
    {/* Burda Form.js propslar gedir */}
    <Form addContactProp = {setContact} oldcontact = {contact} />
    <br />

    {/* liste yazdirmaq */}
    <List licontact={contact}/>


    </div>

  );
}


export default App;

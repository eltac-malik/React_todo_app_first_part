import React from 'react';
import {useState} from 'react'


function List(props) {

  const[filtertext,setFiltertext] = useState("")

  const filtered = props.licontact.filter((item) =>
  {
    return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filtertext.toLocaleLowerCase()))
  })


  return <div>
    <div>
      <input placeholder='Search' onChange={(e)=> {setFiltertext(e.target.value)}} />
    </div>
    
    <br />
    <br />
    <br />

  <ul>
    {filtered.map((e,i)=>(<li key={i}>{e.name} - {e.phonenumber}</li>))}
  </ul>
  
    <br />

  </div>;
}

export default List;

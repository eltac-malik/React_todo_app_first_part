import React from 'react';

function List(props) {
  return <div>
    
  <ul>
    {props.licontact.map((e,i)=>(<li key={i}>{e.name}</li>))}
  </ul>

  </div>;
}

export default List;

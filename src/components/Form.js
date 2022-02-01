import React from 'react';
import { useState } from 'react';

function Form(props)
{
    

  const [form,setForm] = useState({name:"",phonenumber:""});

  const change = (e) => {setForm({...form,[e.target.id]:e.target.value})}

  const onSub = (e) => 
  {
      if (form.name === "" || form.phonenumber === "") 
      {
        return false
      }
      
      // burda addcontactprop a evvelki proplari ve en son form inputlari daxil edirik
      props.addContactProp([...props.oldcontact,form]);

      // input elave olunannan sonra icini temizleyir
      setForm({name:"",phonenumber:""})

    e.preventDefault();
  }

  return (

    <form onSubmit={onSub} className="App">
      <br />
      <input value={form.name} id='name' placeholder='Fullname' autocomplete="off" onChange={change} />
      <br />
      <input  value={form.phonenumber} id='phonenumber' autocomplete="off" placeholder='Phone Number' onChange={change} />
      <br />
      <button >Add</button>

      <h1>{form.name}  {form.phonenumber}</h1>

    </form>

  );
}

export default Form;

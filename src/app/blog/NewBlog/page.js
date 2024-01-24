"use client"
import axios from 'axios';
import React, { useState } from 'react';

const initialFormData = {
  title: "",
  body: "",
  photo: "",
}
const NewBlog = () => {
  const [formData, setFormData] = useState( initialFormData );

  const handleInputOnChange = ( e ) => {
    const { name, value } = e.target;
    setFormData( { ...formData, [name]: value } );
  }
  const handleSubmit = () => {
    const submittedData = {
      title: formData.title,
      body: formData.body,
      photo: formData.photo,
      randomPhoto: Math.floor( ( Math.random() * 3 ) )
    }
    axios.post( `/api/blog/newBlog`, submittedData )
      .then( ( res ) => {
        console.log( res );
      } )
  }
  return (
    <div>
      <input
        type='text'
        name="title"
        value={formData?.title}
        onChange={( e ) => { handleInputOnChange( e ) }}
      />
      <input
        type='text'
        name="body"
        value={formData?.body}
        onChange={( e ) => { handleInputOnChange( e ) }}
      />
      <input
        type='file'
        name="photo"
        value={formData?.photo}
        onChange={( e ) => { handleInputOnChange( e ) }}
      />

      <br /><button onClick={() => { handleSubmit() }}>save</button>

    </div>
  )
}

export default NewBlog
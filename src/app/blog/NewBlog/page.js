"use client"
import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { QuillFormats, QuillModules } from '../../../utility/custom/quill';

const initialFormData = {
  title: "",
  body: "",
  mTitle: "",
  mDesc: "",
  photo: "",
}
const NewBlog = () => {
  const [formData, setFormData] = useState( initialFormData );

  const handleInputOnChange = ( e ) => {
    const { name, value } = e.target;
    setFormData( { ...formData, [name]: value } );
  }

  const handleFileUpload = ( e ) => {
    const file = e.target.files[0];
    // setFormData( { ...formData, photo: file } );

    console.log( 'fsdfsdf sdlfj sdkfj sl;djf ;slad jfsl;adkjf sl;adkjf;lsakdjf slkd jfslkdjf' );
  }


  const handleEditorOnChange = ( e ) => {
    setFormData( { ...formData, body: e } );

  }

  const handleSubmit = () => {
    const submittedData = {
      title: formData.title,
      body: formData.body,
      mTitle: formData.mTitle,
      mDesc: formData.mDesc,
      photo: formData.photo,
      randomPhoto: Math.floor( ( Math.random() * 3 ) )
    }
    axios.post( `/api/blog/newBlog`, submittedData )
      .then( ( res ) => {
        console.log( res );
      } )
  }
  return (
    <div className='p-5'>

      <div className="mb-4">
        {/* <label
          className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Title
        </label> */}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          name="title"
          value={formData?.title}
          onChange={( e ) => { handleInputOnChange( e ) }}
          placeholder="Blog Title"
        />
      </div>
      <div className='pb-2'>
        <ReactQuill
          theme="snow"
          modules={QuillModules}
          formats={QuillFormats}
          value={formData?.body}
          onChange={handleEditorOnChange}
          placeholder="Full Blog..."
        />
      </div>
      <div className="mb-2">
        {/* <label
          className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Title
        </label> */}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          name="mTitle"
          value={formData?.mTitle}
          onChange={( e ) => { handleInputOnChange( e ) }}
          placeholder="Meta Title"
        />
      </div>
      <div className="mb-2">
        {/* <label
          className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Title
        </label> */}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          name="mDesc"
          value={formData?.mDesc}
          onChange={( e ) => { handleInputOnChange( e ) }}
          placeholder="Meta Description"
        />
      </div>
      <div className='pb-2'>
        <input
          type='file'
          name="photo"
          value={formData?.photo}
          onChange={handleFileUpload}
        />
      </div>
      <div className='pb-2'>
        <button
          className='bg-black text-white px-2 text-[20px] cursor-pointer'
          onClick={() => { handleSubmit() }}
        >save</button>

      </div>


    </div>
  )
}

export default NewBlog
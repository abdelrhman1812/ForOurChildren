import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import Head from '../Head/Head';
import Navdash from '../Navdash/Navdash';

function AddArtical() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);


  const addArticle = async (value) => {
    // Update the image URL in the form data
    value.imgurl = url;

    const storedData = JSON.parse(localStorage.getItem('articleContent')) || [];

    if (Array.isArray(storedData)) {
      storedData.push(value);
      localStorage.setItem('articleContent', JSON.stringify(storedData));
      formik.resetForm();
    } else {
      console.error('Data in local storage is not an array:', storedData);
    }

    // Move navigation outside of setTimeout

  };

  const formik = useFormik({
    initialValues: {
      name: '',
      lname: '',
      email: '',
      phone: '',
      title: '',
      imgurl: '',
      about: '',
      description: '',
    },
    onSubmit: addArticle,
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const upload = async () => {
    if (!file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Abdelrhman');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/decau6fvv/image/upload',
        formData
      );

      setUrl(response.data.url); // Set the URL in the state
      console.log(response.data.url); // Handle the Cloudinary response as needed
    } catch (error) {
      console.error('Error uploading file to Cloudinary:', error);
    }
  };

  return (
    <>
      <div className="content">
        <Navdash />
        <Head name="اضافة مقال" />
        <div className="row ">
          <div className="col-lg-8 ">
            <div className="addArtical position-relative">
              <h2>اضافة مقال </h2>
              <p>اكتب مقالك الان</p>
              <img src={require('../../../images/Dasbord/Notes/noet.png')} className='noteimg' alt="" />

              <form onSubmit={formik.handleSubmit}>
                <div className="name">
                  <input type="text" placeholder="الاسم" name='name' value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                  <input type="text" placeholder="اسم العائله" name='lname' value={formik.values.lname} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                </div>

                <div>
                  <input type="email" placeholder="البريد الالكتروني" name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                </div>

                <div>
                  <input type="number" placeholder="رقم الهاتف" name='phone' value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                </div>
                <div>
                  <input type="text" placeholder='عنوان المقال' name='title' value={formik.values.title} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                </div>

                <div>
                  <textarea name="description" id="" cols="30" rows="10" placeholder='ملخص المقال' value={formik.values.description} onBlur={formik.handleBlur} onChange={formik.handleChange}></textarea>
                </div>

                <div>
                  <label htmlFor="upload">
                    {file ? '' : <i className="fa-solid fa-camera mx-2"></i>}
                    {file ? (
                      <button type="button" className='bg-transparent text-black w-auto m-0' onClick={upload}>
                        <i className="fa-solid fa-upload"></i> تحميل الصوره
                      </button>
                    ) : ''}
                  </label>
                  <input type="text" placeholder="صورة المقال" name='imgurl' value={url || ''} onBlur={formik.handleBlur} onChange={formik.handleChange} readOnly />
                  <input type="file" name='imgurl' id='upload' className='d-none' onChange={handleFileChange} />
                </div>

                <div>
                  <textarea name="about" id="" cols="30" rows="10" placeholder='من انت ؟' value={formik.values.about} onBlur={formik.handleBlur} onChange={formik.handleChange}></textarea>
                </div>

                <div className='text-start'>
                  <button type='submit'> نشر </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block ">
            <img src={require('../../../images/Dasbord/Nav/avatar.png')} className='imgartical' alt=" " />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddArtical;

import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const RegisterChildren = () => {
    const [error, seterror] = useState(null);
    const [success, setSuccess] = useState(null);
    let navigate = useNavigate();

    async function registerSubmit(values) {
        setSuccess("Success");
        console.log(values);
        const formData = {
            name: values.name,
            familyName: values.familyName,
            age: values.age,
            image: values.image.name,
            gender: values.gender,
        };

        const storedData = JSON.parse(localStorage.getItem('children')) || [];

        storedData.push(formData);
        localStorage.setItem('children', JSON.stringify(storedData));


        // Add your logic for handling the form submission, including image upload
        setTimeout(() => {
            navigate("/childrens");
        }, 2000);
    }

    let validationSchema = Yup.object({
        name: Yup.string().min(3, "Your Name Must be More than 3 characters").max(10, "Your Name Must be less than 10 characters").required("Name must be required"),
        familyName: Yup.string().min(3, "Your Name Must be More than 3 characters").max(10, "Your Name Must be less than 10 characters").required("Name must be required"),
        age: Yup.number().required("Age is required"),
    });

    let formik = useFormik({
        initialValues: {
            name: "",
            familyName: "",
            age: "",
            image: null,
            gender: "meal", // Add the gender field with a default value
        },
        validationSchema,
        validate: function () {
            seterror(null);
        },
        onSubmit: registerSubmit,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("image", file);
        formik.setFieldTouched("image", true);
    };

    function displayIcons(e) {
        if (e.target.value.trim() !== "") {
            e.target.nextElementSibling.classList.add('d-none');
            e.target.nextElementSibling.classList.remove('d-block');
        } else {
            e.target.nextElementSibling.classList.remove('d-none');
            e.target.nextElementSibling.classList.add('d-block');
        }
    }

    return (
        <>
            <div className="register login registerChildren">
                <div className='container'>
                    <h2 className='fw-bold'>What about your children? </h2>
                    <p>Fill in the fields so we can help you</p>
                    <div className='row g-0'>
                        <div className='form-container m-0'>
                            {error ? (
                                <div className='alert alert-danger'>
                                    <i className='fa-solid fa-triangle-exclamation'></i>
                                    <div className="text">
                                        <p>{error}</p>
                                    </div>
                                </div>
                            ) : ""}
                            {success ? (
                                <div className='alert alert-success'>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <div className="text">
                                        <p>{success}</p>
                                        <span>You can now visit the Application</span>
                                    </div>
                                </div>
                            ) : ""}
                            <div className="imageUser">
                                {formik.values.image ? (
                                    <figure>
                                        <img src={URL.createObjectURL(formik.values.image)} className='w-100' alt="Selected" />
                                    </figure>
                                ) : (
                                    <figure>
                                        <img src={require('../../images/Childrens/ody.jpg')} alt="Default" />

                                    </figure>
                                )}
                                <label htmlFor="upload"><i className="fa-solid fa-camera"></i> </label>
                                <input type="file" onChange={handleFileChange} className='d-none' name="upload" id='upload' />
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className='item'>
                                    <input type="text" className='form-control' name='name' id='name' value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Name' onKeyUp={displayIcons} />
                                    <i className='fa fa-user icon-input'></i>
                                    {formik.errors.name && formik.touched.name ? <span className='error'> <i className="fa-solid fa-circle-xmark"></i> {formik.errors.name}</span> : ''}
                                    {!formik.errors.name && formik.touched.name ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> Your name has been approved </span> : ""}
                                </div>
                                <div className='item'>
                                    <input type="text" className='form-control' name='familyName' id='familyName' value={formik.values.familyName} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Family Name' onKeyUp={displayIcons} />
                                    <i className='fa fa-user icon-input'></i>
                                    {formik.errors.familyName && formik.touched.familyName ? <span className='error'> <i className="fa-solid fa-circle-xmark"></i> {formik.errors.familyName}</span> : ''}
                                    {!formik.errors.familyName && formik.touched.familyName ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> Your name has been approved </span> : ""}
                                </div>

                                {/* Age */}
                                <div className='item'>
                                    <input type="number" className='form-control' name='age' id='age' value={formik.values.age} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Age' onKeyUp={displayIcons} />
                                    <i className="fa-solid fa-hashtag icon-input"></i>
                                    {formik.errors.age && formik.touched.age ? <span className='error'> <i className="fa-solid fa-circle-xmark"></i> {formik.errors.age}</span> : ''}
                                    {!formik.errors.age && formik.touched.age ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> Your age has been approved </span> : ""}
                                </div>
                                <div className="select">
                                    <select name="gender" id="gender" {...formik.getFieldProps("gender")}>
                                        <option value="meal">Meal</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className='btns ' >
                                    <button disabled={!(formik.isValid && formik.dirty)} type='submit' >Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterChildren;

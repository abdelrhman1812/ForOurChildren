import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const RegisterChildren = () => {
    const [error, seterror] = useState(null);
    const [success, setSuccess] = useState(null);
    let navigate = useNavigate();

    async function registerSubmit(values) {
        setSuccess("تم التسجيل");
        console.log(values);

        // Check if the data in local storage is an array
        const storedData = JSON.parse(localStorage.getItem('children')) || [];

        if (Array.isArray(storedData)) {
            const formData = {
                name: values.name,
                familyName: values.familyName,
                age: values.age,
                image: values.image ? values.image.name : null,
                gender: values.gender,
            };

            storedData.push(formData);
            localStorage.setItem('children', JSON.stringify(storedData));
        } else {
            console.error('Data in local storage is not an array:', storedData);
            // Handle the situation where data in local storage is not an array
        }

        // Add your logic for handling the form submission, including image upload
        setTimeout(() => {
            navigate("/childrens");
        }, 2000);
    }


    let validationSchema = Yup.object({
        name: Yup.string().min(3, "يجب أن يكون اسمك أكثر من 3 أحرف").max(10, "يجب أن يكون اسمك أقل من 10 أحرف").required("الاسم مطلوب"),
        familyName: Yup.string().min(3, "يجب أن يكون اسمك أكثر من 3 أحرف").max(10, "يجب أن يكون اسمك أقل من 10 أحرف").required("الاسم مطلوب"),
        age: Yup.number().required("العمر مطلوب"),
    });

    let formik = useFormik({
        initialValues: {
            name: "",
            familyName: "",
            age: "",
            image: null,
            gender: "ذكر", // Add the gender field with a default value
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
                    <h2 className='fw-bold'>ماذا عن اطفالك ؟  </h2>
                    <p>سجل الأن لنتمكن من تقديم المساعده</p>
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
                                        <span>يمكنك الآن زيارة التطبيق</span>
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
                                        <img src={require('../../images/Childrens/1.jpg')} alt="Default" />

                                    </figure>
                                )}
                                <label htmlFor="upload"><i className="fa-solid fa-camera"></i> </label>
                                <input type="file" onChange={handleFileChange} className='d-none' name="upload" id='upload' />
                            </div>
                            <form onSubmit={formik.handleSubmit}>


                                <div className='item'>
                                    <input type="text" className='form-control' name='name' id='name' value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='الأسم' onKeyUp={displayIcons} />
                                    <i className='fa fa-user icon-input'></i>
                                    {formik.errors.name && formik.touched.name ? <span className='error'> <i className="fa-solid fa-circle-xmark"></i> {formik.errors.name}</span> : ''}
                                    {!formik.errors.name && formik.touched.name ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> تمت الموافقة على اسمك  </span> : ""}
                                </div>
                                <div className='item'>
                                    <input type="text" className='form-control' name='familyName' id='familyName' value={formik.values.familyName} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='اسم العائله' onKeyUp={displayIcons} />
                                    <i className='fa fa-user icon-input'></i>
                                    {formik.errors.familyName && formik.touched.familyName ? <span className='error'> <i className="fa-solid fa-circle-xmark"></i> {formik.errors.familyName}</span> : ''}
                                    {!formik.errors.familyName && formik.touched.familyName ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> تمت الموافقة على اسمك  </span> : ""}
                                </div>

                                {/* Age */}
                                <div className='item'>
                                    <input type="number" className='form-control' name='age' id='age' value={formik.values.age} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='العمر' onKeyUp={displayIcons} />
                                    <i className="fa-solid fa-hashtag icon-input"></i>
                                    {formik.errors.age && formik.touched.age ? <span className='error'> <i className="fa-solid fa-circle-xmark"></i> {formik.errors.age}</span> : ''}
                                    {!formik.errors.age && formik.touched.age ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> تمت الموافقة على عمرك </span> : ""}
                                </div>
                                <div className="select">
                                    <select name="gender" id="gender" {...formik.getFieldProps("gender")}>
                                        <option value="meal">ذكر</option>
                                        <option value="Female">انثي</option>
                                    </select>
                                </div>
                                <div className='btns ' >
                                    <button disabled={!(formik.isValid && formik.dirty)} type='submit' >تسجيل</button>
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

import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
const Register = () => {

    /* ========== Use State  ========== */
    const [show, setShow] = useState(false)
    const [error, seterror] = useState(null)
    const [success, setSuccess] = useState(null)


    let eye = useRef(null)
    let navigate = useNavigate()

    /* ========== Login Submit ========== */
    async function registerSubmit(values) {
        setSuccess("تم التسجيل بنجاح")
        console.log(values)
        setTimeout(() => {
            navigate('/login')
        }, 2000)
    }

    /* ========== Validation ========== */
    let validationSchema = Yup.object({

        name: Yup.string().min(3, "يجب أن يكون اسمك أكثر من 3 أحرف").max(10, "يجب أن يكون اسمك أقل من 10 أحرف").required("الاسم مطلوب"),
        email: Yup.string().email("أدخل البريد الإلكتروني صالحا").required("البريد الإلكتروني مطلوب"),
        password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, "كلمة المرور تبدأ بحرف كبير ويجب أن تتكون من أكثر من 3 أحرف").required("كلمة المرور مطلوبة"),
        rePassword: Yup.string().oneOf([Yup.ref("password")], "كلمة المرور غير متطابقة").required("تأكيد كلمه المرور مطلوبه"),
    })
    let formik = useFormik({

        //take for me inputs that i neede it
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: ""

        }, validationSchema, validate: function () {
            seterror(null)
        },
        onSubmit: registerSubmit,

    })


    /* ========== Display Icons ========== */

    function displayIcons(e) {
        // console.log(e.target);
        let eYe = eye.current

        if (e.target.value.trim() !== "") {
            e.target.nextElementSibling.classList.add('d-none');
            e.target.nextElementSibling.classList.remove('d-block');
            eYe.classList.remove('d-none');


        } else {
            e.target.nextElementSibling.classList.remove('d-none');
            e.target.nextElementSibling.classList.add('d-block');
            eYe.classList.add('d-none');


        }
    }


    /* ========== Display Eye ========== */
    function displayEye() {
        setShow(!show)
    }


    return <>
        <div className="register ">

            <div className='container '>
                <div className='row g-0'>


                    <div className='form-container m-0'>
                        {error ? <div className='alert alert-danger'>
                            <i className='fa-solid fa-triangle-exclamation'></i>
                            <div className="text">
                                <p>{error}</p>
                                <span>الرجاء اختيار عنوان بريد إلكتروني مختلف.</span>
                            </div>

                        </div>
                            : ""}
                        {success ? <div className='alert alert-success'>
                            <i className="fa-solid fa-circle-check"></i>
                            <div className="text">
                                <p>{success}</p>
                                <span>يمكنك الآن زيارة التطبيق</span>
                            </div>

                        </div>
                            : ""}


                        <h2 className='fw-bold'>انشاء حساب   </h2>
                        <p>لتبقى على تواصل معنا يرجى التسجيل في موقعنا   </p>
                        {/* onSubmit this form the method onsubmit call the function from formik */}
                        <form onSubmit={formik.handleSubmit} >
                            <div className='item'>
                                {/* {formik.values.name ? <label htmlFor="name" >Full Name : </label> : ""} */}
                                <input type="text" className='form-control   ' name='name' id='name' value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='الاسم' onKeyUp={displayIcons} />
                                <i className='fa fa-user icon-input '></i>
                                {formik.errors.name && formik.touched.name ? <span className='error'> <i className="fa-solid fa-circle-xmark"></i> {formik.errors.name}</span> : ''}
                                {!formik.errors.name && formik.touched.name ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> تمت الموافقة على اسمك </span> : ""}

                            </div>


                            <div className='item'>

                                {/* {formik.values.email ? <label htmlFor="email" >Email : </label> : " "} */}
                                <input type="email" className='form-control ' name='email' id='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='البريد الالكتروني' onKeyUp={displayIcons} />
                                <i className="fa-solid fa-at icon-input"></i>
                                {formik.errors.email && formik.touched.email ? <span className='error'><i className="fa-solid fa-circle-xmark"></i> {formik.errors.email}</span> : ''}
                                {!formik.errors.email && formik.touched.email ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> بريدك الإلكتروني صالح</span> : ""}


                            </div>


                            <div className="item">
                                {/* {formik.values.password ? <label htmlFor="password" >Password : </label> : " "} */}
                                <input type={show ? "text" : "password"} className='form-control ' name='password' id='password' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='كلمة المرور' onKeyUp={displayIcons} />
                                <i className="fa-solid fa-lock icon-input"></i>
                                <i ref={eye} onClick={displayEye} className="fa-solid fa-eye icon-input d-none"></i>
                                {formik.errors.password && formik.touched.password ? <span className='error'><i className="fa-solid fa-circle-xmark"></i> {formik.errors.password}</span> : ''}
                                {!formik.errors.password && formik.touched.password ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> كلمة المرور الخاصة بك صالحة </span> : ""}


                            </div>

                            <div className="item">
                                {/* {formik.values.rePassword ? <label htmlFor="rePassword" >rePassword : </label> : " "} */}
                                <input type="password" className='form-control ' name='rePassword' id='rePassword' value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='تاكيد كلمة المرور' onKeyUp={displayIcons} />
                                <i className="fa-solid fa-rotate-left icon-input"></i>
                                {formik.errors.rePassword && formik.touched.rePassword ? <span className='error'><i className="fa-solid fa-circle-xmark"></i> {formik.errors.rePassword}</span> : ''}
                                {!formik.errors.rePassword && formik.touched.rePassword ? <span className='is-valid text-success fw-bold'><i className="fa-solid fa-circle-check"></i> تمت مطابقة إعادة كلمة المرور الخاصة بك </span> : ""}



                            </div>


                            <div className='btns'>
                                <button disabled={!(formik.isValid && formik.dirty)} type='submit' > تسجيل </button>
                            </div>


                            <p className='member'> هل لدسك حساب ؟ <Link to={'/login'}> تسجيل الدخول</Link>  </p>



                        </form>
                    </div>
                </div>













            </div>
        </div>



    </>
}

export default Register
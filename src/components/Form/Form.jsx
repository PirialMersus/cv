import s from './Form.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faComments} from "@fortawesome/free-solid-svg-icons/faComments";
import React, {useState} from "react";
import {withStyles} from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import {useFormik} from "formik";
import emailjs from 'emailjs-com';

import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons/faTelegramPlane";

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#ffb400',
        },
        '& MuiInputBase-formControl': {
            width: '300px',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ffb400',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ffb400',
            },
            '&:hover fieldset': {
                borderColor: '#ffb400',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ffb400',
            },
        },
    },
})(TextField);


export const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.message.length === 0) {
                errors.message = 'enter the message'
            } else if (values.message.length > 300) {
                errors.message = 'message is to big';
            }
            return errors;
        },
        onSubmit: values => {
            emailjs.send('service_gsfx0qh', 'template_lojlps9', values, 'user_bGtXPIUcyJP1RAgR0lXla')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            formik.resetForm()
        },
    })

    const [value, setValue] = useState(0)

    return (
        <form className={s.form} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className={s.inputField} onBlur={() => setValue(0)}>
                <FontAwesomeIcon name={'name'} icon={faUser} style={{color: `${value === 1 ? '#ffb400' : '#ccc'}`}}/>
                <CssTextField
                    label="Your Name"
                    fullWidth
                    onClick={() => setValue(1)}

                    {...formik.getFieldProps('name')}/>
                {formik.touched.name && formik.errors.name &&
                <div style={{color: 'red'}}>{formik.errors.name}</div>}
            </div>
            <div className={s.inputField} onBlur={() => setValue(0)}>
                <FontAwesomeIcon icon={faEnvelope} style={{color: `${value === 2 ? '#ffb400' : '#ccc'}`}}/>
                <CssTextField
                    onClick={() => setValue(2)}
                    label="Your Email"
                    fullWidth


                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email &&
                <div style={{color: 'red'}}>{formik.errors.email}</div>}
            </div>
            <div className={s.inputField} onBlur={() => setValue(0)}>
                <FontAwesomeIcon icon={faComments} className={'icon'}
                                 style={{color: `${value === 3 ? '#ffb400' : '#ccc'}`}}/>
                <CssTextField
                    onClick={() => setValue(3)}
                    className='textAreaInput'
                    label="Your Comment"
                    fullWidth
                    multiline
                    rows={2}
                    {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message &&
                <div style={{color: 'red'}}>{formik.errors.message}</div>}

            </div>
            <button type={'submit'} className={s.btn}><span>Send message</span><FontAwesomeIcon
                icon={faTelegramPlane}/>
            </button>
        </form>
    )
}
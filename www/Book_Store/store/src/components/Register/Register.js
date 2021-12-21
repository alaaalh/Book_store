import React from 'react'
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { BrowserRouter as Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Register(props) {
    
    return (
        <>
            <form>
                <div className=" my-3">
                <input 
                type='text'
                placeholder={"first name"}
                className="form-control"
                value={props.data.firstName}
                name="firstName"
                onChange={props.handleChange}
                />
                <small className='text-danger'>{props.errMassage.errFirstName}</small>
                </div>

                <div className=" my-3">
                <input
                type='email'
                placeholder={'email'}
                className="form-control"
                value={props.data.email}
                name="email"
                onChange={props.handleChange}
                />
                <small className='text-danger my-3'>{props.errMassage.errEmail}</small>
                </div>

                <div className=" my-3">
                <input
                type={props.errMassage.inputType}
                placeholder={'password'}
                className="form-control"
                value={props.data.password}
                onChange={props.handleChange}
                name="password"
                />
                <small className='text-danger'>{props.errMassage.errPassword}</small>
                </div>

                <div className=" my-3">
                <input
                type= {props.errMassage.inputType}
                placeholder={'password confirm'}
                className="form-control"
                value={props.data.confirm}
                name='confirm'
                onChange={props.handleChange}
                />
                <small className='text-danger '>{props.errMassage.errConfirm}</small>
                </div>

                <button type="button" className="btn btn-primary " onClick={props.handleSubmit}>
                    submit
                </button>
                
                <div className="btn btn-link">
                {/* <Link to='/register' >you already have an account</Link> */}
                </div>
            </form>
        </>
    )
}
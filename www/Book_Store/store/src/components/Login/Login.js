import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { BrowserRouter as Link } from "react-router-dom";


export default function Login(props) {



  return (
    <>
    <form>
      <div className="form-group my-3">
        <input
          type="email"
          className="form-control"
          style={{ border: `1px solid ${props.errMassage.inputEmail}` }}
          placeholder="Email"
          value={props.data.email}
          onChange={props.handleChange}
          name="email"
        />
        <small className="text-danger">{props.errMassage.errMassageEmail}</small>
      </div>
        <input
          type={props.errMassage.inputType}
          className="form-control"
          style={{ border: `1px solid ${props.errMassage.inputPassword}` }}
          value={props.data.password}
          onChange={props.handleChange}
          name="password"
          placeholder={'password'}
        />
        <div
          style={{
            marginTop: "-30px",
            marginLeft: "430px",
            marginBottom: "20px",
          }}
          onClick={props.handlePassword}
        >
          <FontAwesomeIcon icon={faEye} />
        </div>
        <small className="text-danger">{props.errMassage.errMassagePassword}</small>
        <div onClick={props.handlePassword}></div>
      <button type="button" className="btn btn-primary my-4" onClick={props.handleClick}>
        Submit
      </button>
      <div className="btn btn-link">
      </div>
    </form>
    </>
  );
};
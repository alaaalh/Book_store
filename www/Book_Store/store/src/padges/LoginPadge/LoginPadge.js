import React from "react";
import Login from "../../components/Login/Login";
import { useState } from "react";
import { axiosInstance } from '../../axios/config';

export default function LoginPadge() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errMassage, setErrMassage] = useState({
    errMassageEmail: null,
    errMassagePassword: null,
    inputEmail: "none",
    inputPassword: "none",
    inputType: "password",
  });

  // eslint-disable-next-line no-unused-vars
  const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setData({
        ...data,
        email: e.target.value,
      });
      !regex.test(e.target.value)
        ? setErrMassage({
            ...errMassage,
            errMassageEmail: "email is not valid",
            inputEmail: "red",
          })
        : setErrMassage({
            ...errMassage,
            errMassageEmail: null,
            inputEmail: "green",
          });
    }

    if (e.target.name === "password") {
      setData({
        ...data,
        password: e.target.value,
      });

      e.target.value.length < 9
        ? setErrMassage({
            ...errMassage,
            errMassagePassword: "password is not valid",
            inputPassword: "red",
          })
        : setErrMassage({
            ...errMassage,
            errMassagePassword: null,
            inputPassword: "green",
          });
    }
  };

  const handleClick = () => {
    if (!regex.test(data.email)) {
      setErrMassage({
        ...errMassage,
        errMassageEmail: "email is not valid",
        inputEmail: "red",
      });
    } else if (data.password.length < 9) {
      setErrMassage({
        ...errMassage,
        errMassagePassword: "password is not valid",
        inputPassword: "red",
      });
    } else {
      axiosInstance.post(`/auth/login`,data)
      .then(response => {console.log(response)})
      .catch(err => console.log(err))
    }

  
  };

  const handlePassword = () => {
    setErrMassage({
      inputType: "text",
    });
  };

  return (
    <>
      <Login
        handlePassword={handlePassword}
        handleChange={handleChange}
        handleClick={handleClick}
        data={data}
        errMassage={errMassage}
      />
    </>
  );
}
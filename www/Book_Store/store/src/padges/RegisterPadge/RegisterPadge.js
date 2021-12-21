import React from "react";
import Register from "../../components/Register/Register";
import { useState } from "react";
import { axiosInstance } from "../../axios/config";

const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
export default function RegisterPadge() {
  const [data, setData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errMassage, setErrMassage] = useState({
    errFirstName: null,
    errEmail: null,
    errPassword: null,
    errConfirm: null,
    inputType: "password",
  });

  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      setData({
        ...data,
        firstName: e.target.value,
      });
      e.target.value.length < 4
        ? setErrMassage({
            ...errMassage,
            errFirstName: "the least character is 3 letter",
          })
        : setErrMassage({
            ...errMassage,
            errFirstName: null,
          });
    }

    if (e.target.name === "email") {
      setData({
        ...data,
        email: e.target.value,
      });
      !regex.test(e.target.value)
        ? setErrMassage({
            ...errMassage,
            errEmail: "this email is not valid",
          })
        : setErrMassage({
            ...errMassage,
            errEmail: null,
          });
    }

    if (e.target.name === "password") {
      setData({
        ...data,
        password: e.target.value,
      });
      e.target.value < 9
        ? setErrMassage({
            ...errMassage,
            errPassword: "the least character is 9 letter",
          })
        : setErrMassage({
            ...errMassage,
            errPassword: null,
          });
    }

    if (e.target.name === "confirm") {
      setData({
        ...data,
        confirm: e.target.value,
      });
      !(e.target.value === data.password)
        ? setErrMassage({
            ...errMassage,
            errConfirm: "this value is not match",
          })
        : setErrMassage({
            ...errMassage,
            errConfirm: null,
          });
    }
  };

  const handleSubmit = () => {
    if (data.firstName.length < 4) {
      setErrMassage({
        ...errMassage,
        errFirstName: "the least character is 3 letter",
      });
    } else if (!regex.test(data.email)) {
      setErrMassage({
        ...errMassage,
        errEmail: "this email is not valid",
      });
    } else if (data.password < 9) {
      setErrMassage({
        ...errMassage,
        errPassword: "the least character is 9 letter",
      });
    } else if (!data.password === data.confirm) {
      setErrMassage({
        ...errMassage,
        errConfirm: "this value is not match",
      });
    } else {
      axiosInstance
        .post(`/auth/register`, {
          name: data.firstName,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Register
        data={data}
        handleChange={handleChange}
        errMassage={errMassage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

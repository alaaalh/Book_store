/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import './HowAre.css'

export default function HowAre() {
  return (
    <div>
    <Link to='/'>BACK</Link>
      <section className="background firstsection">
        <div className="box-main">
          <div className="firstHalf">
            <p className="text-big">About US</p>

            <p className="text-small">
              Here you will get to know the team members of our company
            </p>

            <br />

            <p className="center">
              <a href="#Order" style={{textDecoration:'none',color:'white'}}>
                Below are the people who works in our company
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="background">
        <p className="text-footer bg-dark text-light">Copyright ©-All rights are reserved</p>
      </footer>
    </div>
  );
}

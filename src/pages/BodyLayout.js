import React, { useContext, useEffect } from "react";
import Image from 'react-bootstrap/Image';

import AuthContext from "../context/Auth/AuthContext";

const BodyLayout = () => {

    const {loadlog,cookieValidate} = useContext(AuthContext)

    useEffect( () => {
        cookieValidate()
      },[loadlog])
   
    return(
        <>  
            <section id="about" className="about">
                <div className="container">

                    <div className="row">
                    <div className="col-lg-6">
                        <Image src="assets/img/about.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <h3>About Us</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul>
                        <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        </ul>
                        <div className="row icon-boxes">
                        <div className="col-md-6">
                            <i className="bx bx-receipt"></i>
                            <h4>Corporis voluptates sit</h4>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                            <i className="bx bx-cube-alt"></i>
                            <h4>Ullamco laboris nisi</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
            </section>
            <section id="services" className="services section-bg">
                <div className="container">

                    <div className="section-title">
                    <h2>Services</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <div className="icon-box">
                        <i className="bi bi-briefcase"></i>
                        <h4>Lorem Ipsum</h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-lg-0">
                        <div className="icon-box">
                        <i className="bi bi-card-checklist"></i>
                        <h4>Dolor Sitema</h4>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="icon-box">
                        <i className="bi bi-bar-chart"></i>
                        <h4>Sed ut perspiciatis</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="icon-box">
                        <i className="bi bi-binoculars"></i>
                        <h4>Nemo Enim</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="icon-box">
                        <i className="bi bi-brightness-high"></i>
                        <h4>Magni Dolore</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="icon-box">
                        <i className="bi bi-calendar4-week"></i>
                        <h4>Eiusmod Tempor</h4>
                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        </div>
                    </div>
                    </div>

                </div>
            </section>
        </>
    )
  }
  
export default BodyLayout
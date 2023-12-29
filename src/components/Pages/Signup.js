import React, { useEffect, useState } from 'react'
import './Login.css';
import { Input, initMDB } from "mdb-ui-kit";
import { Link } from 'react-router-dom';

function Signup() {
    useEffect(() => {
        initMDB({ Input });
    },)
 
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <img src= "signup.png"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        {/* <form> */}
                        <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign Up</h3>
                            <div class="form-check form-check-inline mb-4">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">Public</label>
                            </div>

                            <div class="form-check form-check-inline mb-4">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">Police</label>
                            </div>
                            <div className="form-outline mb-4" data-mdb-input-init>
                                <input type="text" id="form3Example1" className="form-control form-control-lg"
                                    placeholder="Enter your Full Name" />
                                <label className="form-label" for="form3Example3">Full Name</label>
                            </div>
                            <div className="form-outline mb-4" data-mdb-input-init>
                                <input type="email" id="form3Example2" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label className="form-label" for="form3Example3">Email address</label>
                            </div>
                            <div className="form-outline mb-4" data-mdb-input-init>
                                <input type="number" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid Mobile Number" />
                                <label className="form-label" for="form3Example3">Mobile Number</label>
                            </div>
                            <div className="form-outline mb-4" data-mdb-input-init>
                                <input type="text" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter your State" />
                                <label className="form-label" for="form3Example3">State</label>
                            </div>                           <div className="form-outline mb-4" data-mdb-input-init>
                                <input type="text" id="form3Example5" className="form-control form-control-lg"
                                    placeholder="Enter your City" />
                                <label className="form-label" for="form3Example3">City</label>
                            </div>
                            <div className="form-outline mb-3" data-mdb-input-init>
                                <input type="password" id="form3Example6" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" for="form3Example4">Password</label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Register</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to='/'
                                    className="link-danger">Login</Link></p>
                            </div>

                        {/* </form> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
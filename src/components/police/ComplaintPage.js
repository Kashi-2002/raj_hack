import React, { useEffect } from 'react'
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { Collapse } from 'mdb-ui-kit';
import { useParams } from 'react-router-dom';

function ComplaintPage() {
    useEffect(() => {
        initMDB({ Input, Ripple, Collapse });
    },)

    const { comaplained_id } = useParams();

    //---------------- HERE WE WILL FETCH COMPLAINT DETAILS , THEN COMPLAINANT DETAILS AND LASLTY ALL PROCESSED LOGS----------------

    // const getComplaint = async (id) => {
    //     if(handleToken()) return;
    //     // API Call 
    //     const response = await fetch(`http://localhost:5000/fetchComplaint/${comaplained_id}`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         "auth-token": token
    //       }
    //     });
    //     const json = await response.json() 
    //   }

    //---------------- HERE WE WILL FETCH COMPLAINT DETAILS , THEN COMPLAINANT DETAILS AND LASLTY ALL PROCESSED LOGS----------------

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                className="rounded-circle img-fluid" style={{ width: "100px" }} />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">Johnatan Smith</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">example@example.com</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Phone</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">(097) 234-5678</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Mobile</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">(098) 765-4321</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Address</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-4">
                        <div className="card-body text-center">

                            <form style={{ width: "26rem" }}>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="text" id="form4Example1" className="form-control" />
                                    <label className="form-label" for="form4Example1">Name</label>
                                </div>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="form4Example2" className="form-control" />
                                    <label className="form-label" for="form4Example2">Email address</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                    <label className="form-label" for="form4Example3">Message</label>
                                </div>
                                <div data-mdb-input-init className="mb-2">
                                    <label className="form-label" for="customFile">Select File</label>
                                    <input type="file" className="form-control" id="customFile" />
                                </div>



                                <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Send</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            data-mdb-collapse-init
                            className="accordion-button"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Complaint description
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is hidden by default,
                            until the collapse plugin adds the appropriate classes that we use to style each
                            element. These classes control the overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just about any HTML
                            can go within the <strong>.accordion-body</strong>, though the transition does
                            limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            data-mdb-collapse-init
                            className="accordion-button collapsed"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Other Details
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by
                            default, until the collapse plugin adds the appropriate classes that we use to
                            style each element. These classes control the overall appearance, as well as the
                            showing and hiding via CSS transitions. You can modify any of this with custom CSS
                            or overriding our default variables. It's also worth noting that just about any
                            HTML can go within the <strong>.accordion-body</strong>, though the transition
                            does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h6>Attached Documents</h6>
                    <button type="button" class="btn btn-primary" data-mdb-ripple-init>Download</button>
                </div>
            </div>

            <div>
                <h2>Process Logs</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ComplaintPage
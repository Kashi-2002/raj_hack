import React, { useEffect } from 'react'
import { Tab, initMDB } from "mdb-ui-kit";
import ComplaintList from './complaintList';

function AllComplaints() {
    useEffect(() => {
        initMDB({ Tab });
    },)
    return (
        <div className="container">
            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        data-mdb-tab-init
                        className="nav-link active"
                        id="ex1-tab-1"
                        href="#ex1-tabs-1"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected="true"
                    >New Complaints</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        data-mdb-tab-init
                        className="nav-link"
                        id="ex1-tab-2"
                        href="#ex1-tabs-2"
                        role="tab"
                        aria-controls="ex1-tabs-2"
                        aria-selected="false"
                    >Open</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        data-mdb-tab-init
                        className="nav-link"
                        id="ex1-tab-3"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                    >Closed</a>
                </li>
            </ul>

            <div className="tab-content" id="ex1-content">
                <div
                    className="tab-pane fade show active"
                    id="ex1-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                >
                    <ComplaintList status="New Complaint" />
                </div>
                <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                    <ComplaintList status="Open" />
                </div>
                <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                    <ComplaintList status="Closed" />
                </div>
            </div>
        </div>
    )
}

export default AllComplaints
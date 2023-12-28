import React from 'react'
import { Link } from 'react-router-dom';

const data = [
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "Closed",
        City: "Lucknow",
        id_: "124567890",
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "Closed",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "Closed",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "Closed",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "Open",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "Open",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "Open",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "Open",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "Open",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "New Complaint",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "New Complaint",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "New Complaint",
        id_: "124567890",
        City: "Lucknow"
    },
    {
        title: "Rajasthan Police Cyber Crime Awareness Mission",
        description: "RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime.",
        status: "New Complaint",
        id_: "124567890",
        City: "Lucknow"
    },
]


function ComplaintList(props) {
    //---------------- HERE WE WILL FETCH COMPLAINT DETAILS----------------


    //---------------- HERE WE WILL FETCH COMPLAINT DETAILS----------------

    const newData = data.filter((item) => item.status.includes(props.status));

    return (
        <div className="container">

            {
                (newData.length < 1) && (<h4>Nothing to Display!</h4>)
            }

            {
                (newData.length > 0) &&
                <div className="row row-cols-3">
                    {
                        newData.map((item, i) => {
                            return (<div className="col" key={i} style={{ marginTop: "20px" }}>
                                <div className="card" style={{ width: "25rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text"> {item.description} </p>
                                        <Link to={`/police/complaint/${item.id_}`} className="card-link">Card link</Link>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            }
        </div>
    )
}

export default ComplaintList
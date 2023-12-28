import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import ComplaintPage from './ComplaintPage'
import AllComplaints from './AllComplaints';

function Police() {
    return (

        <div style={{backgroundColor: "#f2f2f2"}}>
            <Navbar />
            {/* <ComplaintPage /> */}
            <AllComplaints/>
        </div>
    )
}

export default Police
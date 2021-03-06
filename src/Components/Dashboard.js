import React from 'react'
import { Link } from 'react-router-dom';




export default function Dashboard(props) {
    return (
        <div id="dashboard" className="my-4">
            <div className="section-title">
                <div className="title">Your Health</div>
                <Link to="/my-account" className="see-all">See All</Link>
            </div>

            <div className="innerWrap">
                <a href="#" className="card p-3">
                    <div className="title">Doctors</div>
                    <div className="image-wrapper"><img className="lazy" src={require("../Assets/images/doctor.png")} alt="" /></div>
                </a>
            
            
                <a href="#" className="card p-3">
                    <div className="title">Medicines</div>
                    <div className="image-wrapper"><img className="lazy" src={require("../Assets/images/medicine.png")} alt="" /></div>
                </a>
            
            
                <a href="#" className="card p-3">
                    <div className="title">Test</div>
                    <div className="image-wrapper"><img className="lazy" src={require("../Assets/images/test.png")} alt="" /></div>
                </a>
            
            
                <a href="#" className="card p-3">
                    <div className="title">Report</div>
                    <div className="image-wrapper"><img className="lazy" src={require("../Assets/images/report.png")} alt="" /></div>
                </a>
            </div>
        </div>
    )
}
import React, { Component } from 'react';
import EducationDetails from '../components/EducationDetails';

class Education extends Component {

    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <EducationDetails title="Java Developer" where="Edunova Osijek" from=" 2018" to="2019"/>
            <EducationDetails title="Bachelor of Computer Science" where="Faculty of Electrical Engineering Osijek – Professional study ofInformatics" from="2010" to="2014"/>
            <EducationDetails title="Technician for computing" where="Electromechanical school Varaždin" from="2003" to="2008"/>
            <EducationDetails title="Elementary educationn" where="Elementary School Ivan Kukuljević, Belišće" from="1995" to="2003"/>
            </div>
            )
        }
    }
    
export default Education
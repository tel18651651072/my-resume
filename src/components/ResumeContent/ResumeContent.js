import React, {Component} from 'react'
import Name from '../Name/Name'
import JobIntension from '../JobIntension/JobIntension'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import PrejectExp from '../ProjectExp/PrejectExp'
import './Style.css'

class ResumeContent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="ResumeContent-wrapper">
                <Name/>
                <JobIntension/>
                <Education/>
                <Experience/>
                <PrejectExp/>
            </div>
        )
    }
}

export default ResumeContent
import React, {Component} from 'react'
import './Style.css'
import AsideBanner from '../AsideBanner/AsideBanner'
import ResumeContent from '../ResumeContent/ResumeContent'

class ResumePart extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className="ResumePart-wrapper">
                <AsideBanner/>
                <ResumeContent/>
            </div>
        )
    }
}

export default ResumePart
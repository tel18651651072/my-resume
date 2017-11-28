import React,{Component} from 'react';
import Title from '../Title/Title'
import '../../common/css/fontIcon.css'
import './Style.css'

class Education extends Component {
    constructor() {
        super();
        this.state = {
            title:'教育背景',
            fontIcon:'icon-books',
            education:{
                time:'2002.9-2006.6',
                university:'河海大学',
                profession:'数学与应用数学'
            }
        }
    }

    render() {
        return (
            <div className="Education-wrapper">
                <Title title={this.state.title} fontIcon={this.state.fontIcon}/>
                <div className="Education-content">
                    <span>{this.state.education.time}</span>
                    <span>{this.state.education.university}</span>
                    <span>{this.state.education.profession}</span>
                </div>
            </div>
        )
    }
}

export default Education
import React,{Component} from 'react';
import Title from '../Title/Title'
import '../../common/css/fontIcon.css'
import './Style.css'

class JobIntension extends Component {
    constructor() {
        super();
        this.state = {
            title:'求职意向',
            fontIcon:'icon-flag',
            jobIntension:{
                orientation:'web前端',
                inteType:'全职',
                location:'杭州',
                pay:'16k-18k',
                time:'随时到岗'
            }
        }
    }

    render() {
        return(
            <div className="JobIntension-wrapper">
                <Title title={this.state.title} fontIcon={this.state.fontIcon}/>
                <div className="jobIntension-content">
                    <span>{this.state.jobIntension.orientation}</span>
                    <span>{this.state.jobIntension.inteType}</span>
                    <span>{this.state.jobIntension.location}</span>
                    <span>{this.state.jobIntension.pay}</span>
                    <span>{this.state.jobIntension.time}</span>
                </div>
            </div>
        )
    }
}

export default JobIntension
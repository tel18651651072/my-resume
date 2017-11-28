import React, {Component} from 'react'
import './Style.css'
import '../../common/css/fontIcon.css'

class PersonalInfo extends Component {
    constructor() {
        super();
        this.data = {
            title:'个人信息',
            age:'33岁',
            nation:'汉族',
            location:'杭州市',
            phone:'17321050924',
            email:'2578962719@qq.com'
        }
    }

    render() {
        return(
            <div className="PersonalInfo-wrapper">
                <h4 className="title">
                    <i className="icon-newspaper"></i>
                    <span className="text">{this.data.title}</span>
                    <a className="revise-btn">
                        <i className="icon-file-text2"></i>
                    </a>
                </h4>
                <div className="line">
                    <i className="icon-leaf"></i>
                    <span className="text">{this.data.age}</span>
                </div>
                <div className="line">
                    <i className="icon-address-book"></i>
                    <span className="text">{this.data.nation}</span>
                </div>
                <div className="line">
                    <i className="icon-location2"></i>
                    <span className="text">{this.data.location}</span>
                </div>
                <div className="line">
                    <i className="icon-phone"></i>
                    <span className="text">{this.data.phone}</span>
                </div>
                <div className="line">
                    <i className="icon-envelop"></i>
                    <span className="text">{this.data.email}</span>
                </div>
            </div>
        )
    }
}

export default PersonalInfo

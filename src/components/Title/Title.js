import React,{Component} from 'react';
import './Style.css'


class Title extends Component {
    constructor() {
        super();
        this.props = {
            title:'',
            fontIcon:''
        }
    }

    render() {
        return(
            <div className="title-wrapper">
                <span className="icon-wrapper">
                    <i className={this.props.fontIcon}></i>
                </span>
                <div className="title-text">
                    {this.props.title}
                </div>
            </div>
        )
    }
}

export default Title
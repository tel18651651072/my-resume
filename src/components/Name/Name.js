import React,{Component} from 'react';
import './Style.css'

class Name extends Component {
    constructor() {
        super();
        this.state = {
            name:'陈晓明'
        }
    }
    render() {
        return(
            <div className="name-wrapper">
                {this.state.name}
            </div>
        )
    }
}

export default Name
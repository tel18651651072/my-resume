import React, {Component} from 'react';
import './Style.css'

class Alert extends Component {
    constructor(props) {
        super(props);
        this.props = {
            children:''
        }
    }

    render() {
        const className = [
            'Alert-wrapper',
            this.props.className
        ].join(' ')

        return(
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}

export default Alert
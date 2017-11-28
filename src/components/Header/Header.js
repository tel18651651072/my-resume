import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.props = {
            headerTitle:''
        }
    }
    render() {
        return(
            <header className="App-header">{this.props.headerTitle}</header>
        )
    }
}

export default Header
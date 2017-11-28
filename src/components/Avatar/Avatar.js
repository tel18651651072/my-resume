import React,{Component} from 'react';
import './Style.css';
import AvatarImg from './images/chenxm.jpg'

class Avatar extends Component {
        constructor() {
            super();
         }
        render() {
            return (
                <div className="Avatar-wrapper">
                    <img src={AvatarImg} />
                </div>
            )
        }
    }

    export default Avatar
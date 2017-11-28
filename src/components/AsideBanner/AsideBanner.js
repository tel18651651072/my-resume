import React, {Component} from 'react';
import './Style.css'
import Avatar from '../Avatar/Avatar'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import TechnicalAbility from '../TechnicalAbility/TechnicalAbility'
import Hobby from '../Hobby/Hobby'

class AsideBanner extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="AsideBanner-wrapper">
                <Avatar/>
                <PersonalInfo/>
                <TechnicalAbility/>
                <Hobby/>
            </div>
        )
    }
}

export default AsideBanner
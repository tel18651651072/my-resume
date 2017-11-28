import React, {Component} from 'react';
import './Style.css'
import '../../common/css/fontIcon.css'

class TechnicalAbility extends Component {
    constructor() {
        super();
        this.data = {
            title:'技能特长',
            techList:[
                {
                    title:'html/css',
                    degree:'80%'
                },
                {
                    title:'js',
                    degree:'80%'
                },
                {
                    title:'vue',
                    degree:'90%'
                },
                {
                    title:'webpack',
                    degree:'60%'
                },
                {
                    title:'react',
                    degree:'70%'
                },
                {
                    title:'node',
                    degree:'50%'
                }
            ]
        }
    }

    render() {
        return (
            <div className="TechnicalAbility-wrapper">
                <h4 className="title">
                   <i className="icon-magic-wand"></i>
                   <span className="text">{this.data.title}</span>
                    <a className="revise-btn">
                        <i className="icon-file-text2"></i>
                    </a>
                </h4>
                <div className="tech-content">
                    {this.data.techList.map((item) =>
                        <div className="line">
                            <h5 className="tech-header">{item.title}</h5>
                            <div className="tech-performance">
                                <p style={{width:item.degree}}></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default TechnicalAbility
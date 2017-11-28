import React,{Component} from 'react'
import './Style.css'

class Hobby extends Component {
    constructor() {
        super();
        this.data = {
            title:'兴趣爱好',
            hobbies:[
                {preferItem:'学习',identifyCss:'icon-pencil2'},
                {preferItem:'摄影',identifyCss:'icon-camera'},
                {preferItem:'音乐',identifyCss:'icon-music'},
                {preferItem:'看电影',identifyCss:'icon-play'}
            ]
        }
    }

    render() {
        return (
            <div className="Hobby-wrapper">
                <h4 className="title">
                    <i className="icon-lifebuoy"></i>
                    <span className="text">{this.data.title}</span>
                    <a className="revise-btn">
                        <i className="icon-file-text2"></i>
                    </a>
                </h4>
                <div className="hobby-grid">
                    {this.data.hobbies.map((item) =>
                        <div>
                            <div className="hobby-gridItem">
                                <i className={item.identifyCss}></i>
                            </div>
                            <span>{item.preferItem}</span>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Hobby


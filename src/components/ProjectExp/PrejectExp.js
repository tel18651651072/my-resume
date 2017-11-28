import React,{Component} from 'react';
import Title from '../Title/Title'
import '../../common/css/fontIcon.css'
import './Style.css'
import Alert from '../Alert/Alert'

class PrejectExp extends Component {
    constructor() {
        super();
        this.state = {
            title:'项目经验',
            fontIcon:'icon-target',
            PrejectExpBrief:{
                PrejectExpBriefSummary:{
                    time:'2017.2-2017.11',
                    PrejectName:'杰华保险微信端平台站'
                },
                content:'使用vue2.0技术栈独立实现集合元素微信端平台的前端项目，node express 搭建环境 安装插件 前端实现工程化操作，用webpack实现模块化，路由使用vue-router，项目中尽量使用es6，数据交互使用axios，组件是自己写和vux组件库搭配使用，后期会逐步自己写，以取代vux在定制这块的不灵活，状态管理使用vuex和props,emit搭配使用'
            },
            AlertShow: ''
        }
    }

    handleAlertShow() {
        this.setState({
            AlertShow: 'AlertShow'
        })
    }

    handleBack() {
        this.setState({
            AlertShow: ''
        })
    }

    render() {
        return(
            <div className="PrejectExp-wrapper">
               <Title title={this.state.title} fontIcon={this.state.fontIcon}/>
               <div className="PrejectExp-content">
                   <div className="PrejectExp-summary">
                       <span>{this.state.PrejectExpBrief.PrejectExpBriefSummary.time}</span>
                       <span>{this.state.PrejectExpBrief.PrejectExpBriefSummary.PrejectName}</span>
                   </div>
                   <div className="detail">
                       {this.state.PrejectExpBrief.content}
                       <span className="theMore" onClick={this.handleAlertShow.bind(this)}>[the more]</span>
                   </div>
               </div>
                <Alert className={this.state.AlertShow}>
                    <div className="innerContainer">
                        <div className="innerContent">
                            <Title title={this.state.title} fontIcon={this.state.fontIcon}/>
                            <span className="goBack" onClick={this.handleBack.bind(this)}>返回</span>
                            我是弹框的内容部分
                        </div>
                    </div>
                </Alert>
            </div>
        )
    }
}

export default PrejectExp
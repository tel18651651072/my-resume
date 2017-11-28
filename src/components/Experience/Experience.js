import React,{Component} from 'react';
import Title from '../Title/Title'
import '../../common/css/fontIcon.css'
import './Style.css'

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            title:'工作经验',
            fontIcon:'icon-clipboard',
            ExperienceRecently:{
                summary:{
                    time:'2017.2.15-2017.11.17',
                    company:'广州易星（杭州）',
                    job:'web前端'
                },
                detail:[
                    '1.使用vue webpack node.js 结合原生js html5 css3 完成前端的动态页面',
                    '2.vue-router做路由管理',
                    '3.尽可能使用ES6 ',
                    '4.express搭建本地环境',
                    '5.命令行的使用 npm安装',
                    '6.css编译 stylus less scss 混用 ',
                    '7.使用vuex实现数据状态管理 使用axios实现数据获取提交 用到vux组件库做表单',
                    '8.页面组件化 模块化 实现方式',
                    '9.slot内容分发，列表的transion-group动画',
                    '10.技术攻克点 有文件上传，在线交流  保险之家分享页',
                    '11.繁复的地方 在于有好几个入口会产生步骤回跳，保证数据渲染正确，并且会某几个功能相同的页面设置成公用组件流程通道，为了性能体验，车险报价的1-5步骤都做成了本地存储，增加了技术实现逻辑上的复杂性 车险报价一条主线，两条辅线，辅线的入口分别为我的订单，我的客户，用于信息资料的查看和修改',
                    '12.技术亮点：承包城市选择组件，弹框组件 搜索条件查询以及产生的动态列表 选择联动 各种浮出效果 眼睛功能以及在分享的情况下条件性隐藏 回跳前几步当前记录和之前的数据处理 在线交流 文件上传'
                ]
            },
            ExperiencePrevious:{
                summary:{
                    time:'2015.8-2017.12',
                    company:'上海麦季网络',
                    job:'web前端'
                },
                detail:[
                    '1.根据设计图和客户需求实现静态布局排版，动态效果实现；',
                    '2.和后端工程师协助做好代码对接；',
                    '3.客户的功能模块的添加和二次开发；',
                    '4.bootstrap框架的熟练应用和主流浏览器的兼容以及手机屏视图转换；',
                    '5.h5页面的视图实现；',
                    '6.各种常用插件的应用和自主开发。',
                    '7.使用ajax实现数据交互；',
                    '8.使用模板技术实现动态加载；',
                    '9.gulp和git的使用；',
                    '10.根据产品需求实现相应功能实现；',
                    '11.根据测试实现bug修复;',
                    '12.常用模块组件化.'
                ]
            }
        }
    }

    render() {
        return(
            <div className="Experience-wrapper">
               <Title title={this.state.title} fontIcon={this.state.fontIcon}/>
               <div className="Experience-summary">
                   <span>{this.state.ExperienceRecently.summary.time}</span>
                   <span>{this.state.ExperienceRecently.summary.company}</span>
                   <span>{this.state.ExperienceRecently.summary.job}</span>
               </div>
               <div className="Experience-detail">
                   {this.state.ExperienceRecently.detail.map(item =>
                       <div>{item}</div>
                   )}
               </div>
               <div className="Experience-summary">
                   <span>{this.state.ExperiencePrevious.summary.time}</span>
                   <span>{this.state.ExperiencePrevious.summary.company}</span>
                   <span>{this.state.ExperiencePrevious.summary.job}</span>
               </div>
                <div className="Experience-detail">
                    {this.state.ExperiencePrevious.detail.map(item =>
                        <div>{item}</div>
                    )}
                </div>
            </div>
        )
    }
}

export default Experience
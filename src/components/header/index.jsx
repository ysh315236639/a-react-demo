import React, { Component } from 'react';
import './index.scss'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '首页'
    }
  }
  render() { 
    return ( 
      <div className="header">
        <div className="left">
          <p>{this.state.title}</p>
        </div>
        <div className="right">
          <div>
            <i className="avter"></i>
            <span>刘小明</span>
          </div>
          <div>
            <i className="iconfont iconicon_xiaoxi"></i>
            <span>消息</span>
          </div>
          <div>
            <i className="iconfont iconicon_bangzhu"></i>
            <span>帮助</span>
          </div>
          <div>
            <i className="iconfont iconicon_chexiao"></i>
            <span>退出</span>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Header;
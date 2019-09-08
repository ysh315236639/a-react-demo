import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;
class Nav extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
      current: '1'
    }
  }
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  handleClick = e => {
    this.setState({
      current: e.key
    })
  }
  render() { 
    return (
      <Menu
        mode="inline"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256, height: '100%'}}
      >
        <Menu.Item key="1">
          <Link to="/statistice">
            <Icon type="fund" />  
            首页
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>产品管理</span>
            </span>
          }
        >
          <Menu.Item key="2">
            <Link to="/pro">产品</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="account-book" />
              <span>收支明细</span>
            </span>
          }
        >
          <Menu.Item key="3">
            <Link to="">收入明细</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="">支出明细</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
 
export default Nav;
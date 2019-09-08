import React, { Component } from 'react'
import { Form, Icon, Input, Button, notification  } from 'antd'
import store from '../../store'
import { setToken } from '../../utils/cookie'
import './index.scss'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: 'admin',
        password: '123456'
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.username === 'admin' && values.password === '123456') {
          const action = {
            type: 'login',
            value: {
              username: values.username,
              password: values.password,
              name: 'Bab'
            }
          }
          setToken('2489423156')
          store.dispatch(action)
          this.props.history.push('/')
        } else {
          notification.error({
            message: '错误',
            description: '账号或密码错误',
            duration: 1.5
          })
        }
      }
    })
  }
  render() { 
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-box">
          <p className="login-title">管理员登陆</p>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                initialValue: 'admin',
                rules: [{required: true, message: '请输入账号！'}]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                initialValue: '123456',
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">Login in</Button>
            </Form.Item>
          </Form>
          <p>账号：amdin 密码：123456</p>
        </div>
      </div>
    );
  }
}

export default Form.create() (Login);
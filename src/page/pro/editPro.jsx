import React, { Component } from 'react';
import { Modal, Form, Input, Select, Row, Col, Button } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
class EditPro extends Component {
  render() { 
    const pro = this.props.currentPro
    return (
      <Modal 
        title={this.props.title}
        visible={this.props.visible}
        onOk={this.props.handleOk}
        onCancel={this.props.handleCancel}
        footer={[
          <Button key="back" onClick={this.props.handleCancel}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={this.props.handleOk}>
            确定
          </Button>,
        ]}
      >
        <Form onSubmit={this.props.handleOk}>
          <Row gutter={16}>
            <Col span={12}>
            <Form.Item label="商品名称">
              <Input value={pro.name} placeholder="请输入姓名" />
            </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="商品类型">
                <Select defaultValue={pro.type}>
                  <Option value="1">生鲜</Option>
                  <Option value="2">电子产品</Option>
                  <Option value="3">服装</Option>
                  <Option value="4">食物</Option>
                  <Option value="5">家电</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="零售价">
                <Input value={pro.retailprice} placeholder="请输入零售价" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="成本价">
                <Input value={pro.costprice} placeholder="请输入成本价" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="产地">
            <Input value={pro.address} placeholder="请输入产地" />
          </Form.Item>
          <Form.Item label="广告语">
            <TextArea value={pro.ad} placeholder="请输入广告语" />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
 
export default EditPro;
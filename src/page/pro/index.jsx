import React, { Component } from 'react';
import { DatePicker, Select, Table, Button } from 'antd'
import moment from 'moment'
import './index.scss'
import chicken from '../../assets/img/timg.jpg'
import EditPro from './editPro'
const { Option } = Select
const { Column } = Table

class Pro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '2015-01-01',
      productTypes: [ // 商品类型
        { name: '生鲜', value: '1' },
        { name: '电子产品', value: '2' },
        { name: '服装', value: '3' },
        { name: '食物', value: '4' },
        { name: '家电', value: '5' },
      ],
      proType: 1, // 当前商品类型
      tableData: [
        { name: '鸡腿', img: chicken, address: '福州', retailprice: 15, costprice: 10.8, salesvolume: 1562, ad: '天然无添加', key: 1, type: '4' },
        { name: '鸡胸肉', img: chicken, address: '福州', retailprice: 15, costprice: 10.8, salesvolume: 1562, ad: '天然无添加', key: 2, type: '4' },
        { name: '烤鸡翅', img: chicken, address: '福州', retailprice: 15, costprice: 10.8, salesvolume: 1562, ad: '天然无添加', key: 3, type: '4' },
        { name: '炸鸡柳', img: chicken, address: '福州', retailprice: 15, costprice: 10.8, salesvolume: 1562, ad: '天然无添加', key: 4, type: '4' },
        { name: '鸡肉汉堡', img: chicken, address: '福州', retailprice: 15, costprice: 10.8, salesvolume: 1562, ad: '天然无添加', key: 5, type: '4' },
      ],
      visible: false,
      title: '编辑商品',
      currentPro: {} // 当前商品
    }
  }
  // 删除
  handDel = (index) => {
    const arr = this.state.tableData
    arr.splice(index, 1)
    this.setState({
      tableData: arr
    })
  }
  // 弹窗确认
  handleOk = () => {
    this.setState({
      visible: false,
      currentPro: {}
    })
  }
  // 关闭编辑弹窗
  handleCancel = () => {
    this.setState({
      visible: false,
      currentPro: {}
    })
  }
  // 打开编辑弹窗
  openModal = (record, type) => {
    if(type === 1) {
      this.setState({
        title: '新增商品',
        visible: true,
        currentPro: {}
      })
    } else if(type === 2) {
      this.setState({
        title: '编辑商品',
        visible: true,
        currentPro: record
      })
    }
  }
  render() { 
    const dateFormat = 'YYYY-MM-DD'
    return (
      <div className="pro-box">
        <div className="pro-search">
          <span>上架时间：</span>
          <DatePicker defaultValue={moment(this.state.time, dateFormat)} format={dateFormat} />
          <span>商品类型：</span>
          <Select defaultValue={this.state.proType} style={{ width: 150 }}>
            {
              this.state.productTypes.map((item, index) => {
                return (
                  <Option key={index} value={item.value}>{item.name}</Option>
                )
              })
            }
          </Select>
          <Button style={{marginLeft: '10px'}} onClick={() => this.openModal({}, 1)} type="primary">新增商品</Button>
        </div>
        <div className="pro-table">
          <Table dataSource={this.state.tableData}>
            <Column 
              title="序号"
              key="序号"
              render={(text,record, index) => (
                <span>{index + 1}</span>
              )} 
            />
            <Column title="名称" dataIndex="name" key="name" />
            <Column 
              title="图片" 
              dataIndex="img" 
              key="img"
              render={text => (
                <img className="pro-img" src={text} alt="商品图片" />
              )}
            />
            <Column title="产地" dataIndex="address" key="address" />
            <Column title="零售价" dataIndex="retailprice" key="retailprice" />
            <Column title="成本价" dataIndex="costprice" key="costprice" />
            <Column title="当月销量" dataIndex="salesvolume" key="salesvolume" />
            <Column title="广告" dataIndex="ad" key="ad" />
            <Column 
              title="操作"
              key="操作"
              render={(text, record, index) => (
                <div>
                  <Button onClick={() => this.openModal(record, 2)} type="primary" style={{marginRight: '10px'}}>编辑</Button>
                  <Button onClick={() => this.handDel(index)} type="danger">删除</Button>
                </div>
              )}
            />
          </Table>
        </div>
        <EditPro
          title={this.state.title}
          visible={this.state.visible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          currentPro={this.state.currentPro}
        />
      </div>
    );
  }
}

export default Pro;
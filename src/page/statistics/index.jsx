import React, { Component } from 'react';
import './index.scss'
import echarts from 'echarts'
class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  // 初始化饼图
  initPie = () => {
    const myChart = echarts.init(document.getElementById('pie'))
    myChart.setOption({
      title: {
        text: '当月各类产品销量情况',
        subtext: '纯属虚构',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient : 'vertical',
        x : 'left',
        data:['生鲜','电子产品','服装','食物','家电']
      },
      series: [{
          name: '销量',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data: [
            {value:335, name:'生鲜'},
            {value:310, name:'电子产品'},
            {value:234, name:'服装'},
            {value:135, name:'食物'},
            {value:1548, name:'家电'}
          ]
      }]
    })
  }
  // 初始化折线图
  initCategory = () => {
    const category = echarts.init(document.getElementById('category'))
    category.clear()
    category.setOption({
      title : {
        text: '上月订单情况',
        subtext: '纯属虚构'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend : {
        data:['下单量','退单量']
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          data : ['第一周', '第二周', '第三周', '第四周']
        }
      ],
      yAxis : [
        {
          type: 'value'
        }
      ],
      series : [
        {
          name: '下单量',
          type: 'line',
          data: [5000, 8000, 18530, 6700]
        },
        {
          name: '退单量',
          type: 'line',
          data: [3010, 2084, 3452, 1896]
        }
      ]
    })
  }
  componentDidMount() {
    this.initPie()
    this.initCategory()
  }
  render() { 
    return (
      <div className="chart-box">
        <div id="pie" className="pie"></div>
        <div id="category" className="category"></div>
      </div>
    );
  }
}
 
export default Statistics;
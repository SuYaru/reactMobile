import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { Card,Tabs} from 'antd-mobile';
import axios from 'axios'
const mapStateToProps = state=>{
  console.log(state);
  return {
    carts: state.carts,
  }
}
const tabs = [
  {id:1, title: '全部'   },
  {id:2, title: '待付款' },
  {id:3, title: '待发货' },
  {id:4, title: '待收货' },
  {id:5, title: '待评价' },
];
class Carts extends Component{
    // 如果细分有分类，可以传入tab id 切换分类
    changeTab=(tab)=>{
        //console.log(tab);
        //console.log(this.props.carts);
    }
    componentDidMount(){
      this.showProducts();
    }
    showProducts=()=>{
       const productStyle={width:'50px',height:'50px'}
       const innserStyle={margin:'10px',fontSize: '16px'}
       const numStyle={width:'50px',height:'25px',lineHeight:'25px',textAlign:'center',float:'left'}

       var jsx=[];
       console.log(this.props.carts);
      if(Array.prototype.isPrototypeOf(this.props.carts)){
            this.props.carts.map(val=>{
              jsx.push(
                <Card  key={val.id}>
                    <Card.Header
                        title={val.name}
                        thumb={val.pImage}
                        thumbStyle={productStyle}
                        extra={<span style={innserStyle}>原产地：{val.pLocal}</span>}

                    />
                    <Card.Body>
                        <div style={innserStyle}>产品描述：{val.details}</div>
                        <div style={innserStyle}>产品功效：{val.workFor}</div>
                        <div style={innserStyle}>当前库存：{val.pNumber.number}</div>
                    </Card.Body>
                    <Card.Footer content={<span>生产日期：{val.produceTime}</span>} extra={<div>价格：{val.price.number}￥</div>} />
                    <Card.Footer content={
                        <div>
                          <span style={numStyle}> 总数：{val.quantity}</span>
                        </div>}
                    />
                </Card>
              )
          })
      }else{
          jsx.push(
            <Card key={'nothing'}>
                <Card.Body>
                    <div style={innserStyle}>当前暂无数据</div>
                </Card.Body>
            </Card>
          )
      }
      return jsx;
    }
    render(){
        let cartsStyle={backgroundColor:'white'}
        let mineStyle={height:document.documentElement.clientHeight-95,overflow:'auto'}
        return (
          <div style={cartsStyle}>
                <Tabs tabs={tabs} onTabClick={(tab)=>{this.changeTab(tab)}}>
                </Tabs>
                <div className="productsContent" style={mineStyle}>
                     {this.showProducts()}
                </div>
          </div>
        )
    }

}

export default connect(mapStateToProps)(Carts);

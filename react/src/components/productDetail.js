import React ,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { Card,NavBar,Icon,Button} from 'antd-mobile';
import { increase,decrease,fetchList,addToCarts} from '../actions'
import { pluseSvg,decreaseSvg } from '../assets/'
const mapStateToProps = (state)=>{
    return {
        counter : state.carts[0].counter,
        carts   :state.carts
    }
}
class productDetail extends Component{
    state = {
        product:{},
    };
    componentDidMount(){
        axios({
            url:`http://localhost:3000/product/${this.props.match.params.id}`,
            method:'get'
        }).then(res=>{
            this.setState({
                product:res.data
            })
        })
    }
    componentWillUnmount=()=>{
        this.setState=(state,callback)=>{
            return;
        }
    }
   backGoing=()=>{
    this.props.history.goBack();
   }
   render(){
       const productInfo =this.state.product;
       const {counter,increase,decrease,addToCarts} = this.props;
       const productStyle={width:'50px',height:'50px'}
       const innserStyle={margin:'10px',fontSize: '12px'}
       const localStyle={margin:'10px 10px 10px -10px',fontSize: '12px',display:'inline-block'}
       const imgStyle={width:'100%',height:'100%',fontSize: '12px',display:'inline-block'}
       const numStyle={width:'50px',height:'25px',lineHeight:'25px',textAlign:'center',float:'left'}
       if(Object.keys(productInfo).length!=0){
            return (
                <div>
                    {/* 导航栏 */}
                    <NavBar  mode="dark" icon={<Icon type="left" />}
                    onLeftClick={() =>{this.backGoing()}}
                    rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                    ]}
                    >产品详情</NavBar>
                    <Card>
                        <Card.Header
                            title={productInfo.name}
                            thumbStyle={productStyle}
                        />
                        <Card.Body>
                            <img src={productInfo.pImage} style={imgStyle}></img>
                            <div style={innserStyle}>产品描述：{productInfo.details}</div>
                            <div style={innserStyle}>产品功效：{productInfo.workFor}</div>
                            <div style={innserStyle}>当前库存：{productInfo.pNumber.number}</div>
                        </Card.Body>
                        <Card.Footer extra={<span style={localStyle}>原产地：{productInfo.pLocal}</span>}></Card.Footer>
                        <Card.Footer content={<span>生产日期：{productInfo.produceTime}</span>} extra={<div>价格：{productInfo.price.number}￥</div>} />
                        <Card.Footer content={
                            <div>
                                <Button style={{width:'21px',height:'25px',background: `url(${decreaseSvg}) center center /  21px 21px no-repeat`,display:'inline-block',float:'left'}} onClick={decrease}></Button>
                                <span style={numStyle}>{counter}</span>
                                <Button style={{width:'21px',height:'25px',background: `url(${pluseSvg}) center center /  21px 21px no-repeat`,display:'inline-block',float:'left'}} onClick={increase}></Button>
                            </div>}
                        extra={<Button type="primary" inline size="small" style={{ marginRight: '4px',marginTop:'10px'}} onClick={(productInfo)=>{addToCarts(this.state.product)}}>加入购物车</Button>} />
                    </Card>
                </div>
           )
       }else{
            return (
               false
            )
       }

  }
}

const productDetailContainer = connect(mapStateToProps,{increase,decrease,fetchList,addToCarts})(productDetail);
export default productDetailContainer;
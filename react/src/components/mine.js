import React ,{Component} from 'react';
import {connect} from  'react-redux';
import { Flex,TextareaItem ,List,Button, Calendar } from 'antd-mobile';
import { userSvg,familySvg,calenderSvg,settingSvg,arrow_rightSvg,order_01Svg,order_02Svg,order_03Svg,order_04Svg,order_05Svg,tool_01Svg,tool_02Svg,tool_03Svg,tool_04Svg,tool_05Svg,tool_06Svg,tool_07Svg,tool_08Svg} from '../assets/index'
import { checkUser } from '../actions'
const mapStateToProps = state=>{
    console.log(state);
    return {
        user:state.user,
        show:false,
        config:{},
    }
}
const now = new Date();
class mine extends Component{
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
    constructor(props) {
        super(props);
        /* this.state = {
          config: {},
        }; */

    };

    componentDidMount(){
        console.log(this.state);
        console.log(this.props);
    }
    componentWillUnmount=()=>{
        this.setState=(state,callback)=>{
          return;
        }
    }
    backHistory=()=>{
        this.props.history.goBack();
    }
    login=()=>{
        var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
        console.log(username,password);
        console.log(this.props.user.username,this.props.user.password);
        if(username==this.props.user.username && password==this.props.user.password){
           /*  this.setProps({
                user:{
                    login:true
                }
            }) */
            console.log(666);
            this.props.user.login=true;
        }

    }
    onConfirm = (startTime, endTime) => {
      document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
      this.setState({
            show: false,
            startTime,
            endTime,
      });
    }

    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime: undefined,
            endTime: undefined,
        });
    }
    onSelectHasDisableDate = (dates) => {
        console.warn('onSelectHasDisableDate', dates);
    }

   render(){
    let mineStyle={height:document.documentElement.clientHeight-50,overflow:'auto'}
    let relatedStyle={background:`url(${familySvg}) 10px center /  20px 20px no-repeat`,backgroundColor:'rgba(0,0,0,0.3)',width:'70%',height:'30px',lineHeight:'30px',paddingLeft:'30px',borderRadius:'15px',textAlign:'center',fontSize:'6px'}
    let userStyle={color:'#fff',fontSize: '20px',padding: '20px 15px',backgroundImage:'linear-gradient(to right, #20dbff, #5433ff'}
    let innerStyle={margin:'10px 0'}
    let myOrder={backgroundColor:'white',borderRadius:'15px',margin: '10px',fontSize:'12px',padding:'10px'}
    if(this.props.user.login){
        return (
            <div className="mineContent" style={mineStyle}>
                {/* 头部用户导航 */}
                <div style={userStyle}>
                    <Flex>
                      <Flex.Item>
                          <div style={{ background:`url(${userSvg}) center center /  59px 59px no-repeat` ,width:'49px',height:'49px'}}></div>
                      </Flex.Item>
                      <Flex.Item style={{flex:2}}>
                          <Flex direction='column' align='start'>
                              <Flex.Item>Username</Flex.Item>
                              <Flex.Item style={relatedStyle} align='center'> <span>关联用户账号</span> </Flex.Item>
                          </Flex>
                      </Flex.Item>
                      <Flex.Item>
                          <Flex>
                              <Flex.Item>
                                  <List className="calendar-list" style={{ background:`url(${calenderSvg}) center center /  25px 25px no-repeat`,width:'25px',height:'25px'}} onClick={()=>{this.setProps({show:true,config:{ type: 'one' }})
                                  }}></List>
                                  <Calendar
                                    {...this.props.config}
                                    visible={this.props.show}
                                    onCancel={this.onCancel}
                                    onConfirm={this.onConfirm}
                                    onSelectHasDisableDate={this.onSelectHasDisableDate}
                                    defaultDate={now}
                                    minDate={new Date(+now - 5184000000)}
                                    maxDate={new Date(+now + 31536000000)}
                                  />
                              </Flex.Item>
                              <Flex.Item style={{ background:`url(${settingSvg}) center center /  25px 25px no-repeat`,width:'25px',height:'25px'}}></Flex.Item>
                          </Flex>
                      </Flex.Item>
                    </Flex>
                    <Flex style={{ margin:'15px 0',fontSize:'12px',textAlign:'center'}} >
                        <Flex.Item >
                            <div style={innerStyle}>622</div>
                            <div>收藏夹</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={innerStyle}>48</div>
                            <div>关注店铺</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={innerStyle}>31</div>
                            <div>足迹</div>
                        </Flex.Item>
                    </Flex>
                </div>
                {/* 我的订单 */}
                <div style={myOrder}>
                     <Flex style={{ borderBottom:'1px solid #ddd' }}>
                        <Flex.Item>
                            <Flex justify='between'>
                                  <Flex.Item style={{ fontWeight:600,margin:'10px'}}>我的订单</Flex.Item>
                                  <Flex.Item></Flex.Item>
                                  <Flex.Item style={{color:'#666',background:`url(${arrow_rightSvg})right center /  21px 21px no-repeat`,paddingRight:'21px'}}>查看全部订单</Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <Flex justify='between' style={{textAlign:'center'}}>
                                  <Flex.Item style={{background:`url(${order_01Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>待付款</Flex.Item>
                                  <Flex.Item style={{background:`url(${order_02Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>待发货</Flex.Item>
                                  <Flex.Item style={{background:`url(${order_03Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>待收货</Flex.Item>
                                  <Flex.Item style={{background:`url(${order_04Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>评价</Flex.Item>
                                  <Flex.Item style={{background:`url(${order_05Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>退款/售后</Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                </div>
                {/* 必备工具 */}
                <div style={myOrder}>
                     <Flex style={{ borderBottom:'1px solid #ddd' }}>
                        <Flex.Item>
                            <Flex justify='between'>
                                  <Flex.Item style={{ fontWeight:600,margin:'10px'}}>必备工具</Flex.Item>
                                  <Flex.Item></Flex.Item>
                                  <Flex.Item style={{color:'#666',background:`url(${arrow_rightSvg})right center /  21px 21px no-repeat`,paddingRight:'21px'}}>查看全部工具</Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <Flex style={{textAlign:'center'}}>
                                  <Flex.Item style={{background:`url(${tool_01Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>野生小伙伴</Flex.Item>
                                  <Flex.Item style={{background:`url(${tool_02Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>领券</Flex.Item>
                                  <Flex.Item style={{background:`url(${tool_03Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>闲置换钱</Flex.Item>
                                  <Flex.Item style={{background:`url(${tool_04Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>客服小蜜蜂</Flex.Item>
                            </Flex>
                            <Flex style={{textAlign:'center'}}>
                                <Flex.Item style={{background:`url(${tool_05Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>优惠</Flex.Item>
                                <Flex.Item style={{background:`url(${tool_06Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>我的评价</Flex.Item>
                                <Flex.Item style={{background:`url(${tool_07Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>换肤</Flex.Item>
                                <Flex.Item style={{background:`url(${tool_08Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>更多</Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                </div>

                {/* 游乐园 */}
                <div style={myOrder}>
                     <Flex style={{ borderBottom:'1px solid #ddd' }}>
                        <Flex.Item>
                            <Flex justify='between'>
                                  <Flex.Item style={{ fontWeight:600,margin:'10px'}}>必备工具</Flex.Item>
                                  <Flex.Item></Flex.Item>
                                  <Flex.Item style={{color:'#666',background:`url(${arrow_rightSvg})right center /  21px 21px no-repeat`,paddingRight:'21px'}}>查看全部工具</Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <Flex style={{textAlign:'center'}}>
                                  <Flex.Item style={{background:`url(${tool_01Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>野生小伙伴</Flex.Item>
                                  <Flex.Item style={{background:`url(${tool_02Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>领券</Flex.Item>
                                  <Flex.Item style={{background:`url(${tool_03Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>闲置换钱</Flex.Item>
                                  <Flex.Item style={{background:`url(${tool_04Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>客服小蜜蜂</Flex.Item>
                            </Flex>
                            <Flex style={{textAlign:'center'}}>
                                <Flex.Item style={{background:`url(${tool_05Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>优惠</Flex.Item>
                                <Flex.Item style={{background:`url(${tool_06Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>我的评价</Flex.Item>
                                <Flex.Item style={{background:`url(${tool_07Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>换肤</Flex.Item>
                                <Flex.Item style={{background:`url(${tool_08Svg}) center 10px /  30px 30px no-repeat`,paddingTop:'50px'}}>更多</Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <Flex direction='column' style={{ background:'white'}}>
                    <Flex.Item style={{margin:'10px'}}>
                        <Flex >
                            <Flex.Item style={{ flex:3}} >您需要登陆才能继续访问[user:123,pw:123]</Flex.Item>
                            <Flex.Item> <Button type="ghost" size="small" inline>关闭</Button></Flex.Item>
                        </Flex>
                    </Flex.Item>
                    <Flex.Item>
                        <Flex direction='column'>
                            <Flex.Item >
                                <img src={userSvg} style={{width:'50px',height:'50px'}}></img>
                            </Flex.Item>
                            <Flex.Item>
                                <List>
                                    <TextareaItem
                                    title="用户名"
                                    placeholder="请输入用户名"
                                    id='username'
                                    />
                                    <TextareaItem
                                    title="密码"
                                    placeholder="请输入密码"
                                    id='password'
                                    />
                                    <List.Item>
                                    <div
                                        style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                                        onClick={()=>{checkUser({'name':'aaaa'})}}
                                    >
                                        登陆
                                    </div>
                                    </List.Item>
                                </List>
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                </Flex>

            </div>
        )
    }

  }
}
export default connect(mapStateToProps,{checkUser})(mine);
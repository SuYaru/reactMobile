import React ,{Component} from 'react';
import axios from 'axios';
import { Card,NavBar,Icon} from 'antd-mobile';

export default class newDetail extends Component{
    state = {
        new:{},
    };
   componentDidMount(){
        axios({
            url:`http://localhost:3000/news/${this.props.match.params.id}`,
            method:'get'
        }).then(res=>{
            //console.log(res);
            this.setState({
                new:res.data
            })
        })
   }
   backGoing=()=>{
        this.props.history.goBack();
   }
   render(){
       const newInfo =this.state.new;
       const newStyle={width:'50px',height:'50px'}
       const contentStyle={textIndent:'2em',margin:'10px 0'}
       if(Object.keys(newInfo).length!=0){
            return (
                <div>
                    {/* 导航栏 */}
                    <NavBar  mode="dark" icon={<Icon type="left" />}
                    onLeftClick={() =>{this.backGoing()}}
                    rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                    ]}
                    >新闻详情</NavBar>
                    <Card>
                        <Card.Header
                            title={newInfo.title}
                            thumbStyle={newStyle}
                            extra={<span>作者：{newInfo.author}</span>}
                        />
                        <Card.Body>
                            <img src={newInfo.newImg} />
                            <div style={contentStyle}>{newInfo.text}</div>
                        </Card.Body>
                        <Card.Footer content={newInfo.newCopy}  extra={<div>{newInfo.newDate}</div>} />
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
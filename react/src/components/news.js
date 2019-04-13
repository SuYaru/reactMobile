import React,{Component} from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon,Tabs,ListView,Brief, Flex} from 'antd-mobile';
import axios from 'axios';
import {NavLink}  from 'react-router-dom'

export default class News extends Component{
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
          dataSource,
          news:[],
          currentPage:1,
          jsx:[]
        };
    }
    backGoing=()=>{
      this.props.history.goBack();
    }
    getTabs=()=>{
        axios({
          url:`http://localhost:3000/newsKind`,
          method:'get'
        }).then(res=>{
            this.setState ({
              tabs:[...res.data],
              totalPage:[...res.data].length
            });
        })/* .then(res=>{
          console.log(res);
          this.changeNews();
        }).then(res=>{
          console.log(this.state.jsx);

        }) */
    }
    changeNews=()=>{
      /* this.setState({
        currentPage:props.id+1 || 1
      },function(){
        this.getNews();
      }) */
      console.log(this.state.totalPage);
      for(var i=1;i<=this.state.totalPage;i++){
          this.getNews(i);
      }
    }
    getNews=()=>{
        axios({
          url:`http://localhost:3000/news?_page=1&_limit=25`,
          method:'get',
          async:false
        }).then(res=>{
            console.log(res.data);
            //var temp=this.renderRow(res.data);
            //
            this.setState({
              news:res.data
            })
        });
    }

    renderRow=(index)=>{
        console.log(index);
        //console.log(rowData);
        var jsxTemp=[];
        var linkStyle={display:'block'}
        this.state.news.forEach((val,ind)=>{
            console.log(ind);
            if(index*this.state.totalPage<=ind && ind <this.state.totalPage*(index+1)){
                var newUrl=`/newDetail/${val.id}`;
                jsxTemp.push(
                    <NavLink to={newUrl} key={val.id} style={linkStyle}>
                        <div  style={{ padding: '0 15px' }}>
                            <div style={{
                                lineHeight: '50px',
                                color: '#000',
                                fontSize: 18,
                                borderBottom: '1px solid #F6F6F6',
                              }}
                            >{val.title}</div>
                            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                              <img style={{ height: '64px', marginRight: '15px' }} src={val.newImg} alt="" />
                              <div style={{ lineHeight: 1 }}>
                                <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{val.text}</div>
                                <div><span style={{ fontSize: '16px', color: '#FF6E27' }}>{val.author}</span></div>
                              </div>
                            </div>
                          </div>
                    </NavLink>
                )
            }
        });
      //console.log(jsxTemp);
      return jsxTemp;

    }
    testMethod=(ind)=>{

      console.log(ind);
      console.log('触发方法');
      return [<span>{ind}</span>];
    }
    /* {this.getNews(tab.id+1)} */
    renderContent = tab =>(
        <div style={{backgroundColor: '#fff' }}>
            {this.renderRow(tab.id)}
        </div>
    );
    render(){
      let mineStyle={height:document.documentElement.clientHeight-95,overflow:'auto',backgrounColor:'yellow'}
      return (
        <div >
            {/* 导航栏 */}
            <NavBar  mode="dark" icon={<Icon type="left" />}
                  onLeftClick={() =>{this.backGoing()}}
                  rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                  ]}
            >热点新闻</NavBar>
            <div  style={mineStyle}>

            <Tabs
                tabs={this.state.tabs}
                tabBarPosition="left"
                tabDirection="vertical"
                initalPage={'t2'}
            >
                    {this.renderContent}
              </Tabs>
            </div>


        </div>
      )
    }
    componentDidMount(){
        this.getTabs();
        this.getNews();
        //this.renderRow();

        // 这里不能同时进行是因为会并行处理，这样拿不到 tab 设定好的tabs 总数
        //this.changeNews();
    }
    componentWillUnmount=()=>{
        this.setState=(state,callback)=>{
          return;
        }
    }
}
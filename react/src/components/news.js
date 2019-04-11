import React,{Component} from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon,Tabs,ListView,Brief} from 'antd-mobile';
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
          currentPage:1
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
        })
    }
    getNews=(props)=>{
        axios({
          url:`http://localhost:3000/news?_page=${this.state.currentPage}&_limit=5`,
          method:'get'
        }).then(res=>{
          //console.log(res.data);
          this.setState ({
            news:[...this.state.news,...res.data],
            page:this.state.page+1
          });
        })
    }
    renderRow=(rowData,rowID)=>{
      var newUrl=`/newDetail/${rowData.id}`
      //console.log(rowData);
      return (
        <NavLink to={newUrl}>
            <div key={rowData.id} style={{ padding: '0 15px' }}>
                <div style={{
                    lineHeight: '50px',
                    color: '#000',
                    fontSize: 18,
                    borderBottom: '1px solid #F6F6F6',
                  }}
                >{rowData.title}</div>
                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                  <img style={{ height: '64px', marginRight: '15px' }} src={rowData.newImg} alt="" />
                  <div style={{ lineHeight: 1 }}>
                    <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.text}</div>
                    <div><span style={{ fontSize: '16px', color: '#FF6E27' }}>{rowData.author}</span></div>
                  </div>
                </div>
            </div>
        </NavLink>
      )
    }
    changeNews=(props)=>{
      this.setState({
        curPage:props.id+1
      },function(){
        this.getNews();
      })
    }
    render(){
      let mineStyle={height:document.documentElement.clientHeight-95,overflow:'auto'}
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
            <ListView
              dataSource={this.state.dataSource.cloneWithRows(this.state.news)}
              renderRow={(rowData, sectionID, rowID, highlightRow) => this.renderRow(rowData,rowID)}
              style={{
                height: document.documentElement.clientHeight-95,
                overflow: 'auto',
              }}
              scrollRenderAheadDistance={500}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={10}
            />

        </div>
      )
    }
    componentDidMount(){
        //this.getTabs();
        this.getNews();
    }
    componentWillUnmount=()=>{
        this.setState=(state,callback)=>{
          return;
        }
    }
}
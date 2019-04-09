import React,{Component} from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon,Tabs, WhiteSpace } from 'antd-mobile';
import axios from 'axios';


export default class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
          tabs:[],
          news:[],
          curPage:1,
          totalPage:0
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
            console.log('Tabs');
            this.setState ({
              tabs:[...res.data],
              totalPage:[...res.data].length
            });
        })
    }
    getNews=()=>{
        axios({
          url:`http://localhost:3000/news?_page=${this.state.curPage}&_limit=10`,
          method:'get'
        }).then(res=>{
          console.log(res.data);

          this.state.news=[];
            [...res.data].map(val=>{
                this.state.news.push(
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }} key={val.id}>
                      <p>{val.title}</p>
                  </div>
                )
            })
          this.setState({
            curPage: this.state.curPage+=this.state.curPage<this.state.totalPage?1:0
          })

        })

    }
    changeNews=()=>{
      console.log('qweqe');
      this.getNews();
    }
    renderContent =()=>(
      <div >
          {this.state.news}
      </div>
    );
    render(){
      let mineStyle={height:document.documentElement.clientHeight-50,overflow:'auto'}
      return (
        <div style={mineStyle}>
            {/* 导航栏 */}
            <NavBar  mode="dark" icon={<Icon type="left" />}
                  onLeftClick={() =>{this.backGoing()}}
                  rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                  ]}
            >热点新闻</NavBar>

            <Tabs
            tabs={this.state.tabs}
            tabBarPosition="left"
            tabDirection="vertical"
            onTabClick={()=>{this.changeNews()}}
            renderTabBar={props =>
              <Tabs.DefaultTabBar {...props} page={3} />}>
                  {this.renderContent}
            </Tabs>

        </div>
      )
    }
    componentDidMount(){
        this.getTabs();
        this.getNews();

    }
}
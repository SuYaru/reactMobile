import React ,{Component} from 'react';
import { ListView,NavBar,Icon } from 'antd-mobile';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
export default class Products extends React.Component {
  constructor(props) {
      super(props);
      const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      });
      this.state = {
        dataSource,
        list:[],
        currentPage:1
      };
  }
  getProductData=()=>{
      axios({
        url:`http://localhost:3000/product?_page=${this.state.currentPage}&_limit=5&_order=asc&_sort=id`,
        method:'get'
      }).then(res=>{
        console.log(res.data);
          this.setState ({
            list:[...this.state.list,...res.data],
            page:this.state.page+1
          });
      })
  }
  componentDidMount(){
      this.getProductData();
  }
 /*  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  } */
  onEndReached=()=>{
      this.getProductData();
  }
  backGoing=()=>{
    this.props.history.goBack();
  }
  // 渲染每一行
  renderRow=(rowData,rowID)=>{
    var productUrl=`/productDetail/${rowData.id}`;
    return (
      <NavLink to={productUrl}>
          <div key={rowData.id} style={{ padding: '0 15px' }}>
              <div style={{
                  lineHeight: '50px',
                  color: '#888',
                  fontSize: 18,
                  borderBottom: '1px solid #F6F6F6',
                }}
              >{rowData.name}</div>
              <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                <img style={{ height: '64px', marginRight: '15px' }} src={rowData.pImage} alt="" />
                <div style={{ lineHeight: 1 }}>
                  <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.details}</div>
                  <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowData.price.number}</span>¥</div>
                </div>
              </div>
          </div>
      </NavLink>
    )
  }
    render() {
        console.log(111111111);
        return (
            <div>
                  <NavBar  mode="dark" icon={<Icon type="left" />}
                  onLeftClick={() =>{this.backGoing()}}
                  rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                  ]}
                  >畅销产品</NavBar>
            </div>
        );
    }
}


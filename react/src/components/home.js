import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getCarouselListData} from '../actions';
import { Carousel, WingBlank,SearchBar,List,Grid } from 'antd-mobile';
import { indexNewsSvg,indexNewsRecSvg } from '../assets/index'
import axios from 'axios';
const mapStateToProps = (state)=>{
    return {
        carousel:state.carousel
    }
}
const Item = List.Item;
const Brief = Item.Brief;
class Home extends Component{
    state = {
      data: [],
      imgHeight: 176,
      searchContent:'美食',
      indexNews:[],
      indexProducts:[],
      disabled: false,
    }
    getIndexNews=()=>{
        axios({
          url:`http://localhost:3000/news?_page=1&_limit=3&_order=asc&_sort=id`
        }).then(res=>{
          [...res.data].map(val=>{
            this.state.indexNews.push(
              <Item extra={val.newDate} align="top" thumb={indexNewsRecSvg} multipleLine onClick={() => { }  }  key={val.id }>
                {val.title}<Brief>{val.text}</Brief>
              </Item>
           )
          })
        })
    }
    getIndexProducts=()=>{
      axios({
        url:`http://localhost:3000/product?_page=1&_limit=9&_order=asc&_sort=id`
      }).then(res=>{
        [...res.data].map(val=> {
            this.state.indexProducts.push(
              {icon: `${val.pImage}`,
              text: `${val.name}`}
            )
        });
      })
    }
    render(){
      const searchStyle={fontFamily: 'arial',fontSize: 16};
      const {carousel}=this.props;
      return (
        <div className="indexContent" style={{ height:document.documentElement.clientHeight-50}}>
              {/* 顶部搜索框 */}
            <SearchBar
              value={this.state.searchContent}
              placeholder="Search"
              onSubmit={value => console.log(value, 'onSubmit')}
              onClear={value => console.log(value, 'onClear')}
              onCancel={() => console.log('onCancel')}
              showCancelButton
              onChange={this.onChange}
              style={ searchStyle}
            />
            {/* 轮播图 */}
            <WingBlank>
                <Carousel
                  autoplay={false}
                  infinite
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}
                >
                  {carousel.map(val => (
                    <a
                      key={val.id}
                      href={val.carUrl}
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                      <img
                        src={val.carImg}
                        alt={val.title}
                        style={{ width: '100%', verticalAlign: 'top' }}
                      />
                    </a>
                  ))}
                </Carousel>
            </WingBlank>
            {this.state.indexNews.map(val=>{
              {val.title}
            })}
            {/* 热点新闻 */}
            <div>
              <List renderHeader={() => '热点新闻'} className="my-list" style={{ textAlign:'left',margin:'0 10px'}}>
                {this.state.indexNews}
              </List>
            </div>

            {/* 产品推荐 */}
            <div>
                <div className="sub-title" style={{ textAlign:'left',margin:'15px',color:'#888'}}>产品推荐</div>
                <Grid data={this.state.indexProducts}  columnNum={3}
                  renderItem={dataItem => (
                    <div style={{ padding: '12.5px' }}>
                      <img src={dataItem.icon} style={{ width: '60px', height: '60px' }} alt="" />
                      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                        <span>{dataItem.text}</span>
                      </div>
                    </div>
                  )}
                />
            </div>
        </div>
      )
    }
    componentDidMount() {
      // simulate img loading
      this.props.getCarouselListData();
      this.getIndexNews();
      this.getIndexProducts();
    }
    componentWillUnmount=()=>{
        this.setState=(state,callback)=>{
          return;
        }
    }
}
/* 属性 mapStateToProps 必须要，否则缺少属性 */
const HomeContainer = connect(mapStateToProps,{getCarouselListData})(Home);
export default HomeContainer;
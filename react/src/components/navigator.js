import React ,{Component} from 'react';
import { TabBar } from 'antd-mobile';
import { Home,News,Products,Mine,ProductsDetail,Carts} from './index'
import { indexSvg,index2Svg,newsSvg,news2Svg,productSvg,product2Svg,mineSvg,mine2Svg,cartsSvg,carts2Svg} from '../assets/index'
import { HashRouter as Router,Route,Switch} from 'react-router-dom'
export default class Navigator extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
        };
      }

    renderContent(pageText) {
      return (
        <div style={{ backgroundColor: 'rgb(242,242,242)', height: '100%', textAlign: 'left' }}>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/news" component={News}/>
                <Route path="/products" component={Products}/>
                <Route path="/productDetail/:id" component={ProductsDetail}/>
                <Route path="/carts" component={Carts}/>
                <Route path="/mine" component={Mine}/>
            </Switch>
        </div>
      );
    }
    render() {
        return (
          <div style={{ position:'fixed',width: '100%',height: '100%', bottom: 0}}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={false}
              style={{ position:'fixed' }}
            >
              <TabBar.Item
                title="首页"
                key="Home"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${indexSvg}) center center /  21px 21px no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${index2Svg}) center center /  21px 21px no-repeat` }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                badge={1}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    },()=>{
                      this.props.history.push('/')
                    });
                }}
                data-seed="logId"
              >
              {this.renderContent('/')}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${newsSvg}) center center /  21px 21px no-repeat` }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${news2Svg}) center center /  21px 21px no-repeat`}}
                  />
                }
                title="热点新闻"
                key="News"
                badge={'new'}
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'redTab',
                    },()=>{
                      this.props.history.push('/news')
                    });
                }}
                data-seed="logId1"
              >
                {this.renderContent('news')}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${productSvg}) center center /  21px 21px no-repeat`}}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${product2Svg}) center center /  21px 21px no-repeat`}}
                  />
                }
                title="畅销产品"
                key="Product"
                dot
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'greenTab',
                    },()=>{
                      this.props.history.push('/products');
                    });
                }}
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${cartsSvg}) center center /  21px 21px no-repeat`}}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${carts2Svg}) center center /  21px 21px no-repeat`}}
                  />
                }
                title="购物车"
                key="Product"
                dot
                selected={this.state.selectedTab === 'purpleTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'purpleTab',
                    },()=>{
                      this.props.history.push('/carts');
                    });
                }}
              >
              {this.renderContent('carts')}
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: `${mineSvg}` }}
                selectedIcon={{ uri: `${mine2Svg}`}}
                title="我的"
                key="mine"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'yellowTab',
                    },()=>{
                        this.props.history.push('/mine')
                    });
                }}
              >
              {this.renderContent('mine')}
              </TabBar.Item>
            </TabBar>
          </div>
        );
    }
}

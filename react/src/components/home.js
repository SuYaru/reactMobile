import React,{Component} from 'react';
import store from '../store'
import { connect } from 'react-redux';
import {fetchList} from '../actions/counter';

const mapStateToProps = (state)=>{
  return {

  }
}
class Home extends Component{
    tryIt =()=>{
      this.props.fetchList={fetchList};
    }

    render(){
      return (
        <div>
          Home
          {/* <button onClick={this.tryIt}>Dispatch</button>
              以下这样可以拿到数据
          */}
          <button onClick={this.props.fetchList}>Dispatch</button>
        </div>
      )
    }
    componentDidMount(){
        //console.log(this.props);
        //console.log('Home每次启动前请求数据');
        this.props.fetchList();
    }
}
/* 属性 mapStateToProps 必须要，否则缺少属性 */
const HomeContainer = connect(mapStateToProps,{fetchList})(Home);
export default HomeContainer;
import React,{Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state=>{
  //console.log(state);
  return {

    counter: state.counter
  }
}

class About extends Component{
  render(){
    const {counter,counter1,list} = this.props.counter;
    //console.log(this.props);
    return (
      <div>
        About
        <br/>
        Counter:
      </div>
    )
  }
}
/* 这里直接暴露 connnect 结果也行。文件引入是整体引入的 */
export default connect(mapStateToProps)(About)
import React from 'react'
import style from '../main.css'
import { connect } from 'react-redux';
import { increase,decrease,fetchList,addToCarts} from '../actions'
import { list } from 'postcss';

const mapStateToProps = (state)=>{
    return {
        counter : state.counter.counter,
        counter1: state.counter.counter1,
        lists   : state.counter.lists,
        total   :state.counter.total,
        carts   :state.carts
    }

    // return  {...state}    // 这个也可以，只是后面前缀引用
}

// 无状态组件
import ListItem from './listitem'


class Counter extends React.Component{
    changeThisPage=(page)=>{
        //console.log("change",page);
        this.props.fetchList({page:page});
    }
    showPageList(){
        //console.log(3333);
        //console.log(this.props.total);
        var jsx=[];
        if(this.props.total>0){
            var pages=Math.ceil(this.props.total/10);
            for(let i=1;i<=pages;i++){
                jsx.push(<span key={i} style={{padding:5,cursor:'pointer'}} onClick={()=>{this.changeThisPage(i)}}>{i}</span>);
            }
        }
        return jsx;
    }

    showList(){
        //console.log(4444);
        //console.log(this.props.lists.length);
        var lists=this.props.lists;
        if(!lists){
            return <li>暂无数据</li>
        }

        var jsx = [];
        //console.log(this.props);
        for(var i=0;i<lists.length;i++){
            jsx.push(<ListItem key={i} product={lists[i]} addToCarts={this.props.addToCarts}/>)
        }
        return jsx;
    }
    render(){
        // 这里为了单独拿出变量，以便在之后不需要再 this.props.变量名
        // 直接 { 变量名 } 使用
        //console.log(this.props);
        //console.log(2222);
        const {counter,counter1,lists,increase,decrease,carts,fetchList,addToCarts} = this.props;

        if(!lists){
            return <li>暂无数据</li>
        }

        var jsx = [];
        for(var i=0;i<lists.length;i++){
            jsx.push(<li key={i}>{lists[i].name}</li>)
        }
        //console.log(this.props);
        return (
            <div>
                这里是Counter 主页面
               Counter: {counter}
                 <br/>
                Counter1: {counter1}
                <br/>
                {this.showPageList()}
                {this.showList()}
                <br/>
                <button onClick={increase}>increase</button>
                <button onClick={decrease}>decrease</button>
            </div>
        )
    }


    componentDidMount(){
        //console.log('每次启动前请求数据');
        this.props.fetchList();
    }
}
// 这里是不是有属性会渲染一次，有方法再重新渲染一次
const CounterContainer = connect(mapStateToProps,{increase,decrease,fetchList,addToCarts})(Counter);
export default CounterContainer;
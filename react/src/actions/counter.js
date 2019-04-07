import axios from 'axios';
export const increase = ()=>{
    return {
        type: 'INCREASE'
    }
}

export const decrease = ()=>{
    return {
        type: 'DECREASE'
    }
}

export const getListData = (data)=>{
    return {
        type   : 'GETLISTS',
        payload: data
    }
}

// vuex this.$store.dispatch('xxx'); --> action
// dispatch 是函数-->react redux里的dispatch也是一个函数


/*
    现在定义了一个函数叫fetchList
    它返回了一个函数，而这个函数有一个参数
    而这个参数类型是function函数
    进行axios请求，在请求完以后
    调用dispatch这个函数，而这个函数可以附带参数
    而dispatch这个函数的参数，是一个函数

    dispatch从哪里来，原来 dispatch是从仓库中来

    请注意，redux的中间件有很多种，而我们只是选择了redux-thunk这一种
    redux-thunk
    redux-promise
    redux-saga
*/
export function fetchList(params={page:1}){
    //console.log(params.page);    // dispatch 不存在
    return dispatch=>{
        var url = `http://localhost:3000/product?_page=${params.page}&_limit=10&_order=asc&_sort=id`;
        return axios({
            url   : url,
            method: 'get'
        }).then(res=>{
            console.log(res);
            var data={
                total:res.headers["x-total-count"],
                lists:res.data
            }
            dispatch(getListData(data));
        })
    }
}
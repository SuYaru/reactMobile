var initialState = {
    counter : 1,
    lists   : [],
    total   :0
};

function counter(state = initialState ,action){
    // 有且只有一棵状态数，状态是只读的，需要利用纯函数来进行状态的修改
    switch(action.type){
        case 'INCREASE':
            // return {counter: state.counter + 1};
            // return Object.assign({},state,{counter:state.counter + 1});

            return {...state,counter:state.counter+1};

        case 'DECREASE':
            // return {counter1: state.counter1 - 1};
            // return Object.assign({},state,{counter1:state.counter1 - 1});
            return {...state,counter:state.counter-1};
        case 'GETLISTS':   // 获取列表，payload 负载
            //console.log(action.payload);
            return Object.assign({},state,{lists:action.payload.lists,total:action.payload.total})
        default:

            return state;
    }
}
export default counter;
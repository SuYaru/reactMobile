var initialState =[];

function carousel(state = initialState ,action){
    // 有且只有一棵状态数，状态是只读的，需要利用纯函数来进行状态的修改
    switch(action.type){
        case 'GETCAROUSELIST':   // 获取列表，payload 负载
            return [...action.payload]
        default:
            return state;
    }
}
export default carousel;
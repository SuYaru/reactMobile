var initialState ={
    username:'123',
    password:'123',
    login:false
};

function user(state = initialState ,action){
    // 有且只有一棵状态数，状态是只读的，需要利用纯函数来进行状态的修改
    switch(action.type){
        case 'CHECKUSER':   // 获取列表，payload 负载
            state.login=true;
            return {...state}
        default:
            return state;
    }
}
export default user;
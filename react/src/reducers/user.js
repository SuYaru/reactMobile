// var initialState ={
//     username:'123',
//     password:'123',
//     login:false
// };

// function user(state = initialState ,action){
//     // 有且只有一棵状态数，状态是只读的，需要利用纯函数来进行状态的修改
//     console.log(55555);// 获取列表，payload 负载
//     switch(action.type){
//         case 'CHECKUSER':
//             console.log(777777777777777);
//             console.log(state);
//             return [...state]
//         default:
//             return state;
//     }
// }
// export default user;

var initialState ={};

function user(state = initialState ,action){
    console.log('ttttttt');
    // 有且只有一棵状态数，状态是只读的，需要利用纯函数来进行状态的修改
    switch(action.type){
        case 'CHECKUSER':   // 获取列表，payload 负载
        console.log(777777777777777);
            return [...action.payload]
        default:
            return state;
    }
}
export default user;
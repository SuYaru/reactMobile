var initialState = {
    counter : 1,
    total   :0
};
var _ = require('lodash');

function carts(state=initialState,action) {
    switch(action.type){
        case 'INCREASE':
        // return {counter: state.counter + 1};
        // return Object.assign({},state,{counter:state.counter + 1});

            return {...state,counter:state.counter+1};

        case 'DECREASE':
            // return {counter1: state.counter1 - 1};
            // return Object.assign({},state,{counter1:state.counter1 - 1});
            return {...state,counter:state.counter-1};
        case "ADDTOCARTS":
       // 在 state 里寻找，id 为  action.payload.id 的数据下标
        var pos=_.findIndex(state,{id:action.payload.id});
        console.log(action.payload);
        console.log(state);
        if(pos !== -1 ){
           // action.payload.quantity+=1;    // 这个 赋值每次的初始值为0
           state[pos].quantity+=state.counter;
           state[pos].subTotal=state[pos].quantity*state[pos].price.number;
           return [...state];
        }else{
            // 一开始carts 对象并未设置 quantity 属性，赋值以后就相当于有了新的属性
            action.payload.quantity=state.counter;
            action.payload.subTotal=action.payload.price.number;
            return [...state,action.payload];
        }
        default:
            return state;
    }
}

export default carts;
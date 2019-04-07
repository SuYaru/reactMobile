var initialState=[];
var _ = require('lodash');

function carts(state=initialState,action) {
    switch(action.type){
        case "ADDTOCARTS":
       // 在 state 里寻找，id 为  action.payload.id 的数据下标
        var pos=_.findIndex(state,{id:action.payload.id});
        console.log(state,pos,action.payload);
        if(pos !== -1 ){
           // action.payload.quantity+=1;    // 这个 赋值每次的初始值为0
           state[pos].quantity+=1;
           state[pos].subTotal=state[pos].quantity*state[pos].price.number;
           return [...state];
        }else{
            // 一开始carts 对象并未设置 quantity 属性，赋值以后就相当于有了新的属性
            action.payload.quantity=1;
            action.payload.subTotal=action.payload.price.number;
            return [...state,action.payload];
        }
        default:
            return state;
    }
}

export default carts;
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
            state[0].counter+=1;
            return state;

        case 'DECREASE':
            // return {counter1: state.counter1 - 1};
            // return Object.assign({},state,{counter1:state.counter1 - 1});
            state[0].counter-=1;
            return state;
        case "ADDTOCARTS":
            var pos=_.findIndex(state,{id:action.payload.id});
            if(pos !== -1 ){
                // action.payload.quantity+=1;    // 这个 赋值每次的初始值为0
                state[pos].quantity+=state[0].counter;
                state[0].counter=1;
                state[pos].subTotal=state[pos].quantity*state[pos].price.number;
                return state;
            }else{
                // 一开始carts 对象并未设置 quantity 属性，赋值以后就相当于有了新的属性
                action.payload.quantity=state[0].counter;
                state[0].counter=1;
                action.payload.subTotal=action.payload.price.number;
                state.push(action.payload);
                return state;
            }
        default:
            return [state];
    }
}

export default carts;
// 添加购物车时，应该添加整个产品对象
export const addToCarts = (data)=>{
    console.log(data)
    return {
        type: 'ADDTOCARTS',
        payload:data
    }
}
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

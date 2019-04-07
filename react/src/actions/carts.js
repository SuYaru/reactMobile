// 添加购物车时，应该添加整个产品对象
export const addToCarts = (data)=>{
    return {
        type: 'ADDTOCARTS',
        payload:data
    }
}

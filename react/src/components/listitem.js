import React from 'react'
import { deflate } from 'zlib';

// 无状态组件
const ListItem=(props)=>{
    //console.log(props);
    const {name,pNumber,workFor,details,pImage,produceTime,price}=props.product;
    return (
        <li>
            产品名称：{name }<br/>
            产品数量：{pNumber.number}<br/>
            产品功效：{workFor}<br/>
            产品描述：{details}<br/>
            产品图片：<img src={pImage}></img><br/>
            产品生产时间：{produceTime}<br/>
            产品价格：{price.number}<br/>
            <button onClick={(product)=>{props.addToCarts(props.product)}}>加入购物车</button>
        </li>
    )
}

export default ListItem;
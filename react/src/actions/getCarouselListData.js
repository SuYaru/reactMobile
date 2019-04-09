import axios from 'axios';
export const getCarouselList = (data)=>{
    return {
        type: 'GETCAROUSELIST',
        payload:data
    }
}

export function getCarouselListData(params={page:1}){
    //console.log(params.page);    // dispatch 不存在
    return dispatch=>{
        var url = `http://localhost:3000/carousel?_page=${params.page}&_limit=5&_order=asc&_sort=id`;
        return axios({
            url   : url,
            method: 'get'
        }).then(res=>{
            /* var data={
                total:res.headers["x-total-count"],
                lists:res.data
            }*/
            dispatch(getCarouselList(res.data));
        })
    }
}
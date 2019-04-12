// export const checkUser = (data)=>{
//     console.log(data)
//     var a=[1,2,3,4]
//     return {
//         type: 'CHECKUSER',
//         payload:a
//     }
// }
export const checkUser = (data)=>{
    console.log(data)
    return {
        type: 'CHECK',
        payload:data
    }
}

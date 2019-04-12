const faker=require('faker');
const Mock=require('mockjs');
const _=require('lodash');
//console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));


module.exports=function(){
    /* 'number|1-100':1   ： 属性名是 name ，范围是 1-100，属性值是 1  */
    return {
        people:_.times(100, function(n){
            return{
                id:n,
                name:faker.name.firstName(),
                companyName:faker.company.companyName(),
                cname:Mock.Random.cname(),
                text:Mock.Random.cparagraph(),
                time:Mock.Random.date('yyyy-MM-dd'),
                start:Mock.mock({
                    'number|1-100':1
                })
            }
        }),
        product:_.times(100, function(n){
            return{
                id:n,
                name:Mock.Random.ctitle(3),
                pNumber:Mock.mock({
                    'number|100-200':1
                }),
                pImage:Mock.Random.image('200x100',Mock.Random.color()),
                workFor:Mock.Random.ctitle(),
                details:Mock.Random.sentence(),
                produceTime:Mock.Random.date('yyyy-MM-dd'),
                price:Mock.mock({
                    'number|1-100':1
                }),
                pLocal:Mock.Random.province()+Mock.Random.city()
            }
        }),
        carousel:_.times(5, function(n){
            return{
                id:n,
                title:Mock.Random.cname(),
                carImg:Mock.Random.image('200x100',Mock.Random.color()),
                text:Mock.Random.cparagraph(),
                carUrl:Mock.Random.url()
            }
        }),
        news:_.times(25, function(n){
            return{
                id:n,
                title:Mock.Random.ctitle(),
                author:Mock.Random.cname(),
                newImg:Mock.Random.image('200x100',Mock.Random.color()),
                text:Mock.Random.csentence(40,50),
                newUrl:Mock.Random.url(),
                newDate:Mock.Random.date(),
                newCopy:Mock.Random.province()+Mock.Random.city()
            }
        }),
        newsKind:_.times(5, function(n){
            return{
                id:n,
                title:Mock.Random.ctitle()
            }
        }),
    }
}
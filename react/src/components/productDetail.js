import React ,{Component} from 'react';
import axios from 'axios';
export default class productDetail extends Component{

   componentDidMount(){
        console.log(this.props.match.params);
        axios({
            url:`http://localhost:3000/product/${this.props.match.params.id}`,
            method:'get'
        }).then(res=>{
            console.log(res);
        })
   }
   render(){
       return (
             <div>
                 productDetail
             </div>
       )
  }
}
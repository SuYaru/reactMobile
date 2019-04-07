import React ,{Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state=>{
  return {
    carts: state.carts
  }
}
class Carts extends Component{
   render(){
       console.log(this.props.carts);
       return (
             <div>
                 Carts
             </div>
       )
  }
}

export default connect(mapStateToProps)(Carts);

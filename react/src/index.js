import React from 'react'
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { Provider } from 'react-redux';
import store from './store'
import { Navigator,About,Carts,Counter,Home } from './components'
import { HashRouter as Router,Route,Switch ,NavLink} from 'react-router-dom'

class Index extends React.Component{
    render(){
        //console.log(store.getState());
        /* store 会贯穿给所有路由对象 */
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <div>
                            <Switch>
                                <Route path="/" component={Navigator}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('app'));
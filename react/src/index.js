import React from 'react'
import ReactDOM from 'react-dom';
import style from './main.css'
import { Provider } from 'react-redux';
import store from './store'
import { About,Carts,Counter,Home } from './components'
//import About from './components/about'
//import Counter from './components/counter'
//import Carts from './components/carts'
import { HashRouter as Router,Route,Switch ,NavLink} from 'react-router-dom'

class Index extends React.Component{

    render(){
        //console.log(store);
        /* store 会贯穿给所有路由对象 */
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/counter">Counter</NavLink></li>
                            <li><NavLink to="/carts">Carts</NavLink></li>
                        </ul>

                        <div>
                            <Switch>
                                <Route path="/" component={Home} exact/>
                                <Route path="/about" component={About}/>
                                <Route path="/counter" component={Counter}/>
                                <Route path="/carts" component={Carts}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('app'));
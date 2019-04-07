import carts from './carts'
import counter from './counter'

import { combineReducers }from 'redux'

export default combineReducers({
    carts:carts,
    counter:counter
})
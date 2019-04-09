import carts from './carts'
import counter from './counter'
import carousel from './carousel'

import { combineReducers } from 'redux'

export default combineReducers({
    carts,
    counter,
    carousel
})
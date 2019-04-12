import carts from './carts'
import counter from './counter'
import carousel from './carousel'
import user from './user'

import { combineReducers } from 'redux'

export default combineReducers({
    carts,
    counter,
    carousel,
    user
})
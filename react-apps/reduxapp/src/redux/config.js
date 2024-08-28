//src/redux/config.js
import { configureStore } from '@reduxjs/toolkit'

const counterLogic = (state = 0, action) => {

}

export const myStore = configureStore (({
    reducer:{
        "counter" : counterLogic
    }
}))
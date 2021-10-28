import { combineReducers, createStore } from "redux";
import chartsArray from "../src/Services/reducers/chartReducer";
import chartItems from "../src/Services/reducers/reducer";


const rootReducer = combineReducers({
    chartItems,
    chartsArray
})



const  configureStore = ()=>{
     return createStore(rootReducer);
}

export default configureStore;

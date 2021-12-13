import { combineReducers } from "redux";
import CountryReducer from "./countryReducer";

const rootReducer = () => 
    combineReducers({
        CountryReducer
    })


export default rootReducer;
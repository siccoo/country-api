import { CountryReducerState, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_REQUEST } from "../../types";

const initiState:CountryReducerState =  {
    countries: [],
    isLoading: false,
    error: ""
}

export default function countryReducer(state:CountryReducerState = initiState, action: any) {
    switch(action.type) {

        // FETCH COUNTRIES REQUEST, LOADING TRUE
        case FETCH_COUNTRIES_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        // IF FETCHING IS SUCCESSFUL
        case FETCH_COUNTRIES_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                countries: action.payload,
                error: ""
            }

        // IF FETCHING HAS ANY ERRORS
        case FETCH_COUNTRIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}
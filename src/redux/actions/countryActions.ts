import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE } from "../constants/countryConstants";
import { CountryAction } from "../../types";

import { Dispatch } from "redux";
import axios from "axios";

// FETCH ALL COUNTRIES REQUEST
export function fetchAllCountriesRequest(): CountryAction {
    return {
        type: FETCH_COUNTRIES_REQUEST
    }
}

// FETCH ALL SUCCESS COUNTRIES
export function fetchAllCountriesSuccess(countries: []): CountryAction {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}

// FETCH ALL FAILURE COUNTRIES
export function fetchAllCountriesFailure(error: string): CountryAction {
    return {
        type: FETCH_COUNTRIES_FAILURE,
        payload: error
    }
}

// FETCH ALL COUNTRIES DATA
export function fetchAllCountries() {
    return (dispatch: Dispatch) => {
        // AXIOS CALL
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            const countries = res.data;
            dispatch(fetchAllCountriesSuccess(countries))
        }).catch((err) => {
            dispatch(fetchAllCountriesFailure(err))
        })
    }
}
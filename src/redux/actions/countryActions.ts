import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE } from "../constants/countryConstants";
import { CountryAction } from "../../types";

// FETCH ALL COUNTRIES
export function fetchAllCountries():CountryAction {
    return {
        type: FETCH_COUNTRIES_REQUEST
    }
}

// FETCH ALL SUCCESS COUNTRIES
export function fetchAllCountriesSuccess(countries: []):CountryAction {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}

// FETCH ALL FAILURE COUNTRIES
export function fetchAllCountriesFailure(error: string):CountryAction {
    return {
        type: FETCH_COUNTRIES_FAILURE,
        payload: error
    }
}
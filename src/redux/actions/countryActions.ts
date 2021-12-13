import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE } from "../constants/countryConstants";

// FETCH ALL COUNTRIES
export function fetchAllCountries():any {
    return {
        type: FETCH_COUNTRIES_REQUEST
    }
}
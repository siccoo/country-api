import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE } from "../redux/constants/countryConstants"

// TYPES
export type CountryReducerState = {
    countries: [],
    isLoading: boolean,
    error: string
}

// ACTION TYPES
export type FetchAllCountriesRequestAction = {
    type: typeof FETCH_COUNTRIES_REQUEST
    payload?: string
}

export type FetchAllCountriesSuccessAction = {
    type: typeof FETCH_COUNTRIES_SUCCESS
    payload: []
}

export type FetchAllCountriesFailureAction = {
    type: typeof FETCH_COUNTRIES_FAILURE,
    payload: string
}

export type CountryAction = FetchAllCountriesRequestAction | FetchAllCountriesSuccessAction | FetchAllCountriesFailureAction
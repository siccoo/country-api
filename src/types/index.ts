import { CountryReducerState } from "./countryTypes";

export * from "./countryTypes";

// GLOBAL APP STATE
export type AppState = {
    countryReducer: CountryReducerState
}
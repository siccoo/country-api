import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initState = {};

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// Redux Devtool Setup
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// OR

// if (process.env.NODE_ENV === "development") {
//     if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//         composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//     }
// }

export default function makeStore(initialState = initState) {
    const middleWares = [thunk];

    // Creating Redux Store
    const store = createStore(rootReducer(), initialState, composeEnhancer(applyMiddleware(...middleWares)));

    if ((module as any).hot) {
        ; (module as any).hot.accept("./reducers", () => {
            const nextReducer = require("./reducers").default
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
import * as types from './action.type.js';

const INIT_STATE = {
    country_code: "",
}

const CountryCodeReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.COUNTRYCODE:
            return { ...state, country_code: action.payload };

        default:
            return state;
    }
}

export default CountryCodeReducer;
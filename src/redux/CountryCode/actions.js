import * as types from './action.type.js';

export const getCountryCode = (payload) => {
    return ({
        type: types.COUNTRYCODE,
        payload
    });
}
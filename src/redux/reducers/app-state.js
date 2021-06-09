import {
    GET_CITIES_LIST_REQUEST,
    GET_CITIES_LIST_SUCCESS,
    GET_CITIES_LIST_FAIL
} from '../actions/types';

const initialState = {
    loadingCities: false,
    cities: []
};

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_CITIES_LIST_REQUEST:
            return {
                ...state,
                loadingCities: true
            };

        case GET_CITIES_LIST_SUCCESS:
            console.log("GET_CITIES_LIST_SUCCESS", action.payload)
            return {
                ...state,
                loadingCities: false,
                cities: action.payload
            };

        case GET_CITIES_LIST_FAIL:
            return {
                ...state,
                loadingCities: false,
            };

        default:
            return state;
    }
}

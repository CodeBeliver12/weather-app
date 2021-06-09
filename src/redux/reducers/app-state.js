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
            return {
                ...state,
                loadingCities: false,
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

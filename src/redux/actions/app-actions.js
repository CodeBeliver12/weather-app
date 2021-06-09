import { ActionDispatcher } from ".";
import { API_KEY } from "../../constants";
import { client } from "../../services/api-service";
import { GET_CITIES_LIST_FAIL, GET_CITIES_LIST_REQUEST, GET_CITIES_LIST_SUCCESS } from "./types";

export const getCitiesList = () => (dispatch) =>
    new Promise(function (resolve, reject) {
        dispatch(ActionDispatcher(GET_CITIES_LIST_REQUEST));
        client
            .get(`/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=${API_KEY}`)
            .then((res) => {
                if (res.status == 200) {
                    dispatch(ActionDispatcher(GET_CITIES_LIST_SUCCESS, res.data.list));
                } else {
                    dispatch(ActionDispatcher(GET_CITIES_LIST_FAIL));
                }
                resolve(res);
            })
            .catch((err) => {
                dispatch(ActionDispatcher(GET_CITIES_LIST_FAIL));
                resolve({ meta: { status: false } })
                reject(err);
            });
    });
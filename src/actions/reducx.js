import {ACTION} from './types';
import axios from 'axios';

export const getData = () => (dispatch, getState) => {
	//console.log('Action called')
    axios
        .get('http://127.0.0.1:5000/')
        .then((res) => {
            dispatch({
                type: ACTION,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
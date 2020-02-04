import { GET_DATA, SET_DATA } from './types';

const getData = () => ({
    type: GET_DATA,
});

const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});

export {
    getData,
    setData,
};

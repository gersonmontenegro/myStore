import {
    GET_DATA,
    SET_DATA,
    GET_PRODUCTS,
    SET_CURRENT_SUBLEVEL,
    GET_CURRENT_SUBLEVEL,
    MODIFY_CART,
    SET_CURRENT_PRODUCT_ID,
    SET_FAVORITE,
} from './types';

const getData = () => ({
    type: GET_DATA,
});

const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});

const getProducts = () => ({
    type: GET_PRODUCTS,
});

const setCurrentSublevel = (payload) => ({
    type: SET_CURRENT_SUBLEVEL,
    payload,
});

const getCurrentSublevel = () => ({
    type: GET_CURRENT_SUBLEVEL,
});

const modifyCart = (payload) => ({
    type: MODIFY_CART,
    payload,
});

const setCurrentProductId = (payload) => ({
    type: SET_CURRENT_PRODUCT_ID,
    payload,
});

const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});

export {
    getData,
    setData,
    getProducts,
    setCurrentSublevel,
    getCurrentSublevel,
    modifyCart,
    setCurrentProductId,
    setFavorite,
};

import {
    GET_DATA,
    SET_DATA,
    GET_PRODUCTS,
    SET_CURRENT_SUBLEVEL,
    GET_CURRENT_SUBLEVEL,
    MODIFY_CART,
    SET_CURRENT_PRODUCT_ID,
    SET_FAVORITE,
    GET_PRODUCT_DETAIL_BY_ID,
    CHECK_PRODUCT,
    REMOVE_PRODUCT_FROM_CART,
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

const getProductDetailById = (payload) => ({
    type: GET_PRODUCT_DETAIL_BY_ID,
    payload,
});

const checkProduct = (payload) => ({
    type: CHECK_PRODUCT,
    payload,
});

const removeProductFromCart = (payload) => ({
    type: REMOVE_PRODUCT_FROM_CART,
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
    getProductDetailById,
    checkProduct,
    removeProductFromCart,
};

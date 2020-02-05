import { combineReducers } from 'redux';
import products from 'data/list_products.json';
import filter from 'lodash/filter';
import find from 'lodash/find';
import {
    GET_PRODUCTS,
    SET_CURRENT_SUBLEVEL,
    GET_CURRENT_SUBLEVEL,
    MODIFY_CART,
    SET_CURRENT_PRODUCT_ID,
    SET_FAVORITE,
    GET_PRODUCT_DETAIL_BY_ID,
} from '../actions/types';

const initiallProducts = {
    products,
    currentSublevel: 0,
};
const initialCart = {};
const initialCurrentProduct = {};

const productsReducer = (state = initiallProducts.products.products, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return state;
        }
        case SET_FAVORITE: {
            const id = action.payload;
            const newData = state.map((item) => {
                if (item.id === id) {
                    item.favorite = !item.favorite;
                    if (item.favorite) {
                        item.likes += 1;
                    } else {
                        item.likes -= 1;
                    }
                }
                return item;
            });
            return [...newData];
        }
        case GET_PRODUCT_DETAIL_BY_ID: {
            const productId = action.payload;
            return find(state, (item) => item.id === productId);
        }
        default: {
            return state;
        }
    }
};

const currentSublevel = (state = initiallProducts.currentSublevel, action) => {
    switch (action.type) {
        case SET_CURRENT_SUBLEVEL: {
            return { ...state, currentSublevel: action.payload };
        }
        case GET_CURRENT_SUBLEVEL: {
            return { state };
        }
        default: {
            return state;
        }
    }
};

const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case MODIFY_CART: {
            const { item: { id }, quantity } = action.payload;
            if (quantity > 0) {
                return {
                    ...state,
                    [id]: quantity,
                };
            }
            const result = filter(state, (value, key) => {
                if (key !== id) {
                    return { key: value };
                }
            });
            return { ...result };
        }
        default: {
            return state;
        }
    }
};

const currentProductIdReducer = (state = initialCurrentProduct, action) => {
    switch (action.type) {
        case SET_CURRENT_PRODUCT_ID: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    products: productsReducer,
    currentSublevel,
    cart: cartReducer,
    currentProductId: currentProductIdReducer,
});

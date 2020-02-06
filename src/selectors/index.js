import { createSelector } from 'reselect';
import has from 'lodash/has';
import compact from 'lodash/compact';

const getProducts = (state) => state.products;
const getCartProducts = (state) => state.cart;
const getCurrentSublevel = (state) => state.currentSublevel.currentSublevel;
const getCurrentProductId = (state) => state.currentProductId;

const getProductsSelector = createSelector(
    getProducts,
    (data) => data,
);

const getCartProductsSelector = createSelector(
    getCartProducts,
    getProducts,
    (cartProducts, products) => {
        const cartProductsWithQuantity = products.map((item) => {
            if (has(cartProducts, item.id)) {
                return {
                    ...item,
                    cartQuantity: cartProducts[item.id].quantity,
                    check: cartProducts[item.id].check,
                };
            }
        });
        return compact(cartProductsWithQuantity);
    },
);

const getProductsBySublevel = createSelector(
    getProducts,
    getCurrentSublevel,
    (products, sublevel) => {
        const data = products.filter((item) => item.sublevel_id === sublevel);
        return data;
    },
);

const getCurrentProductLikes = createSelector(
    getCurrentProductId,
    getProducts,
    (currentId, products) => products.filter((item) => item.id === currentId)[0].likes,
);

const getCurrentFavorite = createSelector(
    getCurrentProductId,
    getProducts,
    (currentId, products) => products.filter((item) => item.id === currentId)[0].favorite,
);

export {
    getProductsSelector,
    getProductsBySublevel,
    getCurrentProductLikes,
    getCurrentFavorite,
    getCartProductsSelector,
};

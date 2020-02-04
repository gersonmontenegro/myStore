import { createSelector } from 'reselect';

const getProducts = (state) => state.products;
const getCurrentSublevel = (state) => state.currentSublevel.currentSublevel;
const getCurrentProductId = (state) => state.currentProductId;

const getProductsSelector = createSelector(
    getProducts,
    (data) => data,
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
};

import { createSelector } from 'reselect';

const getData = (state) => state.dataReducer.data;

const getDataSelector = createSelector(
    getData,
    (data) => data,
);

export default getDataSelector;

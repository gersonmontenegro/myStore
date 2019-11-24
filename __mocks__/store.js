import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
    dataReducer: {
        data: 99,
    },
};

const store = mockStore(initialState);

export default store;

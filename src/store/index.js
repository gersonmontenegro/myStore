/* eslint-disable import/no-unresolved */
import { createStore, compose } from 'redux';
import reactotron from 'initStack/ReactotronConfig';
import reducers from 'reducers';

export default createStore(
    reducers,
    compose(reactotron.createEnhancer()),
);

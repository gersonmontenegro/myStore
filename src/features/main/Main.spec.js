/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from 'mocks/store';
import Main from './index';

describe('Test Main feature', () => {
    let wrapper;
    const props = {
        navigation: {
            navigate: jest.fn(),
        },
    };

    beforeEach(() => {
        wrapper = shallow(
            <Provider store={store}>
                <Main {...props} />
            </Provider>,
        );
    });

    test('Render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

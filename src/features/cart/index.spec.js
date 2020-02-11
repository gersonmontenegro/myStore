/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { cleanup, render } from 'react-native-testing-library';
import Format from 'helpers/format';
import { useSelector } from 'react-redux';
import { getCartProductsSelector, getTotalFromCart } from 'selectors';
import Cart from './index';

const props = {
    navigation: {
        navigate: jest.fn(),
    },
};

describe('Test cart interface', () => {
    afterEach(() => cleanup);
    let wrapper;
    beforeEach(() => {
        wrapper = render(<Cart {...props} />);
    });

    test('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show subtotal', () => {
        const { queryByText } = wrapper;
        const totalAmount = useSelector(getTotalFromCart);
        expect(queryByText(`Subtotal: ${Format.currencyFormat(totalAmount)}`));
    });

    test('should render # elements', () => {
        const { getAllByType } = wrapper;
        const totalItems = getAllByType('Image');
        expect(totalItems).toHaveLength(getCartProductsSelector.length * 3);// just because there are 3 images by item
    });
});

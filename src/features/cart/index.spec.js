/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { cleanup, render } from 'react-native-testing-library';
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
});

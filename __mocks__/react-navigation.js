/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
jest.mock('react-navigation', () => ({
    createAppContainer: jest.fn().mockReturnValue(props => null),
}));

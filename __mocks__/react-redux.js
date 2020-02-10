/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
jest.mock('react-redux', () => ({
    // useSelector: jest.fn().mockReturnValue(props => null),
    useSelector: (d) => d,
    useDispatch: jest.fn(),
}));

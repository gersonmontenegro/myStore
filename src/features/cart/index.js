import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Content,
    Header,
    Footer,
    Button,
    Text,
    FooterTab,
    Left,
    Icon,
    List,
    ListItem,
    Body,
} from 'native-base';
import { getCartProductsSelector } from 'selectors';
import { getProductDetailById } from 'actions';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        isFirstRouteInParent: PropTypes.func,
        pop: PropTypes.func,
        push: PropTypes.func,
    }).isRequired,
};

const Cart = (props) => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const cartProducts = useSelector(getCartProductsSelector);
    const renderCartProducts = (items) => {
        return map(items, async (quantity, id) => {
            console.log('>>');
            const itemDetail = await dispatch(getProductDetailById(id));
            console.log('>', itemDetail);
            return <Text>{id}</Text>;
        });
    };
    return (
        <Container style={{ top: 20 }}>
            <Content>
                <List>
                    {
                        renderCartProducts(cartProducts)
                    }
                    <ListItem>
                        <Body>
                            <Button full primary rounded small>
                                <Text style={{ color: 'white' }}>Checkout</Text>
                            </Button>
                        </Body>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
};

Cart.propTypes = propTypes;

export default Cart;

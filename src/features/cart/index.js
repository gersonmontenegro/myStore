import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
    Container,
    Content,
    Button,
    Text,
    List,
    ListItem,
    Body,
} from 'native-base';
import { getCartProductsSelector } from 'selectors';
import CartItem from 'components/CartItem';

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
    const cartProducts = useSelector(getCartProductsSelector);
    const renderCartProducts = (products) => {
        return products.map((item) => <CartItem key={item.id} item={item} />);
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

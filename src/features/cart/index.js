import React, { useState } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Content,
    Button,
    Text,
    Left,
    List,
    ListItem,
    Body,
    Thumbnail,
    CheckBox,
} from 'native-base';
import { getCartProductsSelector } from 'selectors';
import { checkProduct } from 'actions';
import Format from 'helpers/format';

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
    const [chk, setChk] = useState(true);
    const cartProducts = useSelector(getCartProductsSelector);
    const onCheck = ({ id }) => () => {
        dispatch(checkProduct({ id }));
    };
    const renderCartItem = (item) => {
        return (
            <List key={item.id} style={{ right: 5 }}>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={{ uri: item.thumbnail }} />
                    </Left>
                    <Body>
                        <Text>{item.name}</Text>
                        <Text note>{Format.currencyFormat(item.price)}</Text>
                    </Body>
                    <CheckBox
                        checked={item.check}
                        onPress={onCheck(item)}
                    />
                </ListItem>
            </List>
        );
    };
    const renderCartProducts = (products) => {
        return products.map((item) => renderCartItem(item));
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

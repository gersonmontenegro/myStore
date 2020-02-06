import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    View,
} from 'native-base';
import { getCartProductsSelector } from 'selectors';
import { checkProduct, modifyCart } from 'actions';
import Utils from 'helpers/utils';
import Format from 'helpers/format';

const plusIconImage = require('assets/icons/plus.png');
const minusIconImage = require('assets/icons/minus.png');

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
                <ListItem avatar style={{ borderBottomWidth: 1 }}>
                    <Left>
                        <Thumbnail source={{ uri: item.thumbnail }} />
                    </Left>
                    <Body style={{ borderBottomColor: 'red', borderBottomWidth: 0 }}>
                        <Text>{item.name}</Text>
                        <Text note>{Format.currencyFormat(item.price)}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button
                                transparent
                                onPress={() => {
                                    const currentValue = Utils.decreaseValue(item.cartQuantity);
                                    dispatch(modifyCart({ item, operation: '-', quantity: currentValue }));
                                }}
                            >
                                <Thumbnail source={minusIconImage} style={{ width: 25, height: 25 }} />
                            </Button>
                            <View style={{ justifyContent: 'center' }}>
                                <Text>{` ${item.cartQuantity} `}</Text>
                            </View>
                            <Button
                                transparent
                                onPress={() => {
                                    const currentValue = Utils.increaseValue(item.cartQuantity, item.quantity);
                                    dispatch(modifyCart({ item, operation: '+', quantity: currentValue }));
                                }}
                            >
                                <Thumbnail source={plusIconImage} style={{ width: 25, height: 25 }} />
                            </Button>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>
                                {
                                    `Subtotal: ${Format.currencyFormat(item.cartQuantity * item.price)}`
                                }
                            </Text>
                        </View>
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

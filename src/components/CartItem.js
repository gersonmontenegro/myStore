import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
    Button,
    Text,
    Left,
    List,
    ListItem,
    Body,
    Thumbnail,
    CheckBox,
    View,
    Right,
    Icon,
} from 'native-base';
import { modifyCart, checkProduct, removeProductFromCart } from 'actions';
import Utils from 'helpers/utils';
import Format from 'helpers/format';

const plusIconImage = require('assets/icons/plus.png');
const minusIconImage = require('assets/icons/minus.png');

const propTypes = {
    item: PropTypes.shape({
        quantity: PropTypes.number,
        id: PropTypes.string,
        name: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        cartQuantity: PropTypes.number,
        check: PropTypes.bool,
    }).isRequired,
};

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const onCheck = ({ id }) => () => {
        dispatch(checkProduct({ id }));
    };
    const onRemove = (id) => () => {
        dispatch(removeProductFromCart(id));
    };
    return (
        <List key={item.id} style={{ right: 5 }}>
            <ListItem avatar style={{ borderBottomWidth: 0 }}>
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
            <ListItem>
                <Left />
                <Right>
                    <Button small danger onPress={onRemove(item.id)}>
                        <Icon name="trash" />
                    </Button>
                </Right>
            </ListItem>
        </List>
    );
};

CartItem.propTypes = propTypes;

export default CartItem;

import React, { useState } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    Content,
    Button,
    Text,
    List,
    ListItem,
    Body,
    Header,
    Right,
    View,
} from 'native-base';
import { clearCart } from 'actions';
import { getCartProductsSelector, getTotalFromCart } from 'selectors';
import CartItem from 'components/CartItem';
import Format from 'helpers/format';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        pop: PropTypes.func,
        push: PropTypes.func,
    }).isRequired,
};

const Cart = (props) => {
    const { navigation } = props;
    const [visible, setVisible] = useState(false);
    const [modalMsg, setModalMsg] = useState('');
    const dispatch = useDispatch();
    const cartProducts = useSelector(getCartProductsSelector);
    const totalAmount = useSelector(getTotalFromCart);
    const renderCartProducts = (products) => {
        return products.map((item) => <CartItem key={item.id} item={item} />);
    };
    const onPressCheckout = () => {
        setVisible(!visible);
        if (totalAmount > 0) {
            setModalMsg('Thanks for your shopping!!');
            dispatch(clearCart());
            navigation.navigate('Main');
        } else {
            setModalMsg('There is nothing to checkout.');
            dispatch(clearCart());
        }
    };
    const renderModal = () => (
        <Modal isVisible={visible}>
            <View style={{
                justifyContent: 'center',
                backgroundColor: 'white',
                height: 200,
                borderRadius: 10,
                padding: 10,
            }}
            >
                <Text>{modalMsg}</Text>
                <Button title="Hide modal" onPress={onPressCheckout}>
                    <Text>OK!</Text>
                </Button>
            </View>
        </Modal>
    );
    return (
        <Container style={{ top: 20 }}>
            <Header>
                <Body />
                <Right>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {
                            `Total: ${Format.currencyFormat(totalAmount)}`
                        }
                    </Text>
                </Right>
            </Header>
            <Content>
                <List>
                    {
                        renderCartProducts(cartProducts)
                    }
                    <ListItem>
                        <Body>
                            <Button full primary rounded small onPress={onPressCheckout}>
                                <Text style={{ color: 'white' }}>{`Checkout ${Format.currencyFormat(totalAmount)}`}</Text>
                            </Button>
                        </Body>
                    </ListItem>
                </List>
                {
                    renderModal()
                }
            </Content>
        </Container>
    );
};

Cart.propTypes = propTypes;

export default Cart;

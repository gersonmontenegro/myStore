import React from 'react';
import PropTypes from 'prop-types';
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
} from 'native-base';

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
    console.log(navigation);
    console.log(navigation.isFirstRouteInParent());
    return (
        <Container style={{ top: 20 }}>
            <Content>
                <Text>Cart!</Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full primary>
                        <Text style={{ color: 'white' }}>Checkout</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

Cart.propTypes = propTypes;

export default Cart;

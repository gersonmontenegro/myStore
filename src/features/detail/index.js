/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from 'react-native';
import {
    Container,
    Content,
    Button,
    Text,
    Card,
    CardItem,
    Icon,
    Thumbnail,
    Left,
    Right,
    Body,
    View,
    Footer,
    FooterTab,
    Header,
    Title,
} from 'native-base';
import PropTypes from 'prop-types';
import { modifyCart, setCurrentProductId, setFavorite } from 'actions';
import { getCurrentProductLikes, getCurrentFavorite } from 'selectors';
import Format from 'helpers/format';

const cartIconImage = require('assets/icons/cart_128.png');
const plusIconImage = require('assets/icons/plus.png');
const minusIconImage = require('assets/icons/minus.png');
const checkIconImage = require('assets/icons/check.png');
const uncheckIconImage = require('assets/icons/uncheck.png');

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        getParam: PropTypes.func,
    }).isRequired,
};

const Detail = (props) => {
    const { navigation } = props;
    const [quantity, setQuantity] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const dispatch = useDispatch();
    const currentLikes = useSelector(getCurrentProductLikes);
    const currentFavorite = useSelector(getCurrentFavorite);
    const item = navigation.getParam('item');
    const defineSubtotal = (currentValue) => {
        const subtotalValue = parseInt(item.price, 10) * currentValue;
        setSubtotal(subtotalValue);
    };
    const renderAddButtons = ({ available }) => {
        if (available) {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        width: 100,
                        alignItems: 'stretch',
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Button
                            transparent
                            onPress={() => {
                                const currentValue = quantity - 1;
                                setQuantity(currentValue);
                                dispatch(modifyCart({ item, operation: '-', quantity: currentValue }));
                                defineSubtotal(currentValue);
                            }}
                        >
                            <Image source={minusIconImage} style={{ width: 30, height: 30 }} />
                        </Button>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        flex: 1,
                        alignItems: 'center',
                    }}
                    >
                        <Text>{` ${quantity} `}</Text>
                    </View>
                    <View style={{
                        flex: 1,
                    }}
                    >
                        <Button
                            transparent
                            onPress={() => {
                                const currentValue = quantity + 1;
                                setQuantity(currentValue);
                                dispatch(modifyCart({ item, operation: '+', quantity: currentValue }));
                                defineSubtotal(currentValue);
                            }}
                        >
                            <Image source={plusIconImage} style={{ width: 30, height: 30 }} />
                        </Button>
                    </View>
                </View>
            );
        }
        return (
            <View style={{ flexDirection: 'row' }}>
                <Button light>
                    <Text>Not available</Text>
                </Button>
            </View>
        );
    };
    const renderHeart = () => {
        if (currentFavorite) {
            return 'heart';
        }
        return 'heart-empty';
    };
    const inCart = () => {

    };
    return (
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.pop()}
                    >
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
            </Header>
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={inCart()} />
                            <Body>
                                <Text>{item.name}</Text>
                                <Text note>{Format.currencyFormat(item.price)}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={{ uri: item.thumbnail }}
                            style={{ height: 200, width: null, flex: 1 }}
                        />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button
                                transparent
                                onPress={() => {
                                    dispatch(setFavorite(item.id));
                                }}
                            >
                                <Icon active name={renderHeart()} />
                                <Text>{`${currentLikes} likes`}</Text>
                            </Button>
                        </Left>
                        <Body />
                        <Right />
                    </CardItem>
                    <CardItem>
                        <Title>Add to cart</Title>
                    </CardItem>
                    <CardItem cardBody>
                        <Left>
                            <Text>Quantity</Text>
                        </Left>
                        <Right>
                            {
                                renderAddButtons(item)
                            }
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <Left>
                            <Text>Subtotal</Text>
                        </Left>
                        <Right>
                            <Text style={{ fontSize: 20 }}>{Format.currencyFormat(subtotal)}</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
            <Footer>
                <FooterTab>
                    <Button
                        full
                        primary
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Text style={{ color: 'white' }}>Checkout</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

Detail.propTypes = propTypes;

export default Detail;

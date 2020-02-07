import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
    ListItem,
    Left,
    Thumbnail,
    Body,
    Text,
    Right,
    Button,
} from 'native-base';
import { setCurrentProductId } from 'actions';
import Format from 'helpers/format';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        getParam: PropTypes.func,
        push: PropTypes.func,
        pop: PropTypes.func,
    }).isRequired,
    item: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
    }).isRequired,
};

const RenderProductItem = ({ item, navigation }) => {
    const dispatch = useDispatch();
    return (
        <ListItem thumbnail key={item.id.toString()}>
            <Left>
                <Thumbnail source={{ uri: 'https://placebeard.it/100x100' }} />
            </Left>
            <Body>
                <Text>{item.name}</Text>
                <Text note>{Format.currencyFormat(item.price)}</Text>
                <Text note>{`Curr. qty: ${item.quantity}`}</Text>
            </Body>
            <Right>
                <Button
                    transparent
                    onPress={() => {
                        dispatch(setCurrentProductId(item.id));
                        navigation.push('Detail', { item });
                    }}
                >
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
    );
};

RenderProductItem.propTypes = propTypes;

export default RenderProductItem;

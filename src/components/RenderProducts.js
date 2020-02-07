import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
    View,
    Item,
    Icon,
    Input,
    ListItem,
    Left,
    List,
    Thumbnail,
    Body,
    Text,
    Right,
    Button,
} from 'native-base';
import { setCurrentProductId } from 'actions';
import { getProductsSelector } from 'selectors';
import Format from 'helpers/format';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        getParam: PropTypes.func,
        push: PropTypes.func,
        pop: PropTypes.func,
    }).isRequired,
    id: PropTypes.number.isRequired,
};

const RenderProducts = ({ id, navigation }) => {
    const dispatch = useDispatch();
    const products = useSelector(getProductsSelector);
    const currentCategoryProducts = products.filter((item) => item.sublevel_id === id);
    return (
        <View>
            <View>
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        onChangeText={(txt) => console.log(txt)}
                        maxLengt={30}
                        placeholder="Search"
                    />
                </Item>
            </View>
            <List>
                {
                    currentCategoryProducts.map((item) => (
                        <ListItem thumbnail key={item.id.toString()}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://placebeard.it/100x100' }} />
                            </Left>
                            <Body>
                                <Text>{item.name}</Text>
                                <Text note>{Format.currencyFormat(item.price)}</Text>
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
                    ))
                }
            </List>
        </View>
    );
};

RenderProducts.propTypes = propTypes;

export default RenderProducts;

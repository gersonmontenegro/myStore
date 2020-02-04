/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';
import has from 'lodash/has';
import {
    Button,
    Text,
    View,
    List,
    ListItem,
    Left,
    Thumbnail,
    Body,
    Right,
    Input,
    Item,
    Icon,
    Container,
    Header,
} from 'native-base';
import { setCurrentSublevel, setCurrentProductId } from 'actions';
import { getProductsSelector, getProductsBySublevel } from 'selectors';
import { ScrollView } from 'react-native';
import Format from 'helpers/format';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        getParam: PropTypes.func,
        push: PropTypes.func,
        pop: PropTypes.func,
    }).isRequired,
};

const ListData = (props) => {
    const { navigation } = props;
    const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);
    const dispatch = useDispatch();
    const products = useSelector(getProductsSelector);
    let subData;
    const mainLevel = get(props, 'mainlevel', '');
    subData = navigation.getParam('sublevels');
    if (subData === undefined) {
        if (has(props, 'sublevels')) {
            subData = get(props, 'sublevels', []);
        }
    }
    // eslint-disable-next-line react/prop-types
    const renderProducts = ({ id }) => {
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
                            <ListItem thumbnail>
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
    const renderButton = (item) => {
        const hasSublevels = has(item, 'sublevels');
        if (hasSublevels) {
            return (
                <Button
                    transparent
                    key={item.id}
                    onPress={
                        () => {
                            console.log('>', navigation);
                            dispatch(setCurrentSublevel(item.id));
                            navigation.push('ListData', { sublevels: item.sublevels });
                        }
                    }
                >
                    <Text>
                        {item.name}
                    </Text>
                </Button>
            );
        }
        return (
            <View>
                <Text style={{ backgroundColor: 'aqua' }}>
                    {item.name}
                </Text>
                {
                    renderProducts(item)
                }
            </View>
        );
    };
    const renderList = (data) => {
        return data.map((item) => renderButton(item));
    };
    const renderHeader = () => {
        if (!mainLevel) {
            return (
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
            );
        }
        return null;
    };
    return (
        <ScrollView>
            {renderHeader()}
            <Container>
                {renderList(subData)}
            </Container>
        </ScrollView>
    );
};

ListData.propTypes = propTypes;

export default ListData;

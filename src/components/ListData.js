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
    Body,
    Right,
    Icon,
    Header,
} from 'native-base';
import { setCurrentSublevel, setCurrentProductId } from 'actions';
import { getProductsSelector, getProductsBySublevel } from 'selectors';
import { ScrollView } from 'react-native';
import Format from 'helpers/format';
import RenderProducts from 'components/RenderProducts';

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
    const renderButton = (item) => {
        const hasSublevels = has(item, 'sublevels');
        if (hasSublevels) {
            return (
                <ListItem key={item.id}>
                    <Body>
                        <Button
                            transparent
                            onPress={
                                () => {
                                    dispatch(setCurrentSublevel(item.id));
                                    navigation.push('ListData', { sublevels: item.sublevels });
                                }
                            }
                        >
                            <Text>
                                {item.name}
                            </Text>
                        </Button>
                    </Body>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            );
        }
        return (
            <View key={item.id}>
                <View style={{ backgroundColor: 'lightgray', height: 30, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', left: 5 }}>
                        {item.name}
                    </Text>
                </View>
                <RenderProducts id={item.id} navigation={navigation} />
            </View>
        );
    };
    const renderList = (data) => {
        const list = (
            <List>
                {data.map((item) => renderButton(item))}
            </List>
        );
        return list;
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
            {renderList(subData)}
        </ScrollView>
    );
};

ListData.propTypes = propTypes;

export default ListData;

import React, { useState } from 'react';
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
    Form,
    Picker,
} from 'native-base';
import { setCurrentProductId } from 'actions';
import { getProductsSelector } from 'selectors';
import Format from 'helpers/format';
import Slider from '@react-native-community/slider';
import RenderProductItem from './RenderProductItem';

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
    const [searchText, setSearchText] = useState('');
    const [sortType, setSortType] = useState(0);
    const currentCategoryProducts = products.filter((item) => {
        if (setSearchText) {
            return item.sublevel_id === id && item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        }
        return item.sublevel_id === id;
    });
    const onChangeText = (txt) => setSearchText(txt);
    const onChangeSortBy = (value) => {
        setSortType(value);
    };
    return (
        <View>
            <View>
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        onChangeText={onChangeText}
                        maxLengt={30}
                        value={searchText}
                        placeholder="Search"
                    />
                </Item>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text>Sort by: </Text>
                </View>
                <Form>
                    <Picker
                        mode="dropdown"
                        iosHeader="Sort by"
                        selectedValue={sortType}
                        onValueChange={onChangeSortBy}
                        iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: 'blue', fontSize: 25 }} />}
                        style={{ width: 100 }}
                    >
                        <Picker.Item label="Quantity" value={0} />
                        <Picker.Item label="Aviability" value={1} />
                    </Picker>
                </Form>
                <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
            </View>
            <List>
                {
                    currentCategoryProducts.map((item) => <RenderProductItem key={item.id} item={item} navigation={navigation} />)
                }
            </List>
        </View>
    );
};

RenderProducts.propTypes = propTypes;

export default RenderProducts;

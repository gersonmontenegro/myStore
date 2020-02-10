import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Item,
    Icon,
    Input,
} from 'native-base';

const propTypes = {
    onChangeText: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired,
};

const SearchByName = ({ onChangeText, searchText }) => {
    return (
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
    );
};

SearchByName.propTypes = propTypes;

export default SearchByName;

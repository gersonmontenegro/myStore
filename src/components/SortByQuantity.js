import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Icon,
    Text,
    Picker,
} from 'native-base';
import { ListDataStyles } from 'styles';

const propTypes = {
    sortType: PropTypes.number.isRequired,
    onChangeSortBy: PropTypes.func.isRequired,
};

const SortByQuantity = ({ sortType, onChangeSortBy }) => {
    return (
        <View style={ListDataStyles.renderProducts.rowContainer}>
            <View style={ListDataStyles.renderProducts.centerContainer}>
                <Text>Sort by: </Text>
            </View>
            <View>
                <Picker
                    mode="dropdown"
                    iosHeader="Sort by"
                    selectedValue={sortType}
                    onValueChange={onChangeSortBy}
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: 'blue', fontSize: 25 }} />}
                    style={ListDataStyles.renderProducts.pickerWidth}
                >
                    <Picker.Item label="Quantity - Highest to lower" value={0} />
                    <Picker.Item label="Quantity - Lower to highest" value={1} />
                </Picker>
            </View>
        </View>
    );
};

SortByQuantity.propTypes = propTypes;

export default SortByQuantity;

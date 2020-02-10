import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@react-native-community/slider';
import Format from 'helpers/format';
import {
    View,
    Text,
} from 'native-base';
import { ListDataStyles, generalStyles } from 'styles';

const propTypes = {
    maxPrice: PropTypes.number.isRequired,
    sliderValue: PropTypes.number.isRequired,
    onSlidingComplete: PropTypes.func.isRequired,
};

const FilterByPriceSlider = ({ maxPrice, sliderValue, onSlidingComplete }) => {
    return (
        <>
            <View style={ListDataStyles.renderProducts.rowContainer}>
                <Text style={ListDataStyles.renderProducts.sliderParts.left}>0</Text>
                <Slider
                    style={ListDataStyles.renderProducts.sliderParts.body}
                    minimumValue={0}
                    maximumValue={maxPrice}
                    minimumTrackTintColor="#0000FF"
                    maximumTrackTintColor="#000000"
                    value={sliderValue}
                    step={1000}
                    onSlidingComplete={onSlidingComplete}
                />
                <Text style={ListDataStyles.renderProducts.sliderParts.right}>{Format.currencyFormat(maxPrice)}</Text>
            </View>
            <View style={generalStyles.simpleContainer}>
                <Text style={ListDataStyles.renderProducts.sliderParts.sliderValue}>{Format.currencyFormat(sliderValue)}</Text>
            </View>
        </>
    );
};

FilterByPriceSlider.propTypes = propTypes;

export default FilterByPriceSlider;

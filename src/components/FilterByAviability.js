import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Radio,
    Button,
} from 'native-base';
import { generalStyles } from 'styles';

const propTypes = {
    showAll: PropTypes.bool.isRequired,
    showAvailable: PropTypes.bool.isRequired,
    onPressRadio: PropTypes.func.isRequired,
};

const FilterByAviability = ({ onPressRadio, showAll, showAvailable }) => {
    return (
        <View style={generalStyles.simpleRowContainer}>
            <View style={generalStyles.simpleContainer}>
                <Button
                    transparent
                    onPress={onPressRadio(0)}
                >
                    <View style={generalStyles.simpleRowContainer}>
                        <View style={generalStyles.simpleJustifyCenterContainer}>
                            <Text>Show all</Text>
                        </View>
                        <View style={generalStyles.simpleJustifyCenterContainer}>
                            <Radio onPress={onPressRadio(0)} selected={showAll} />
                        </View>
                    </View>
                </Button>
            </View>
            <View style={generalStyles.simpleContainer}>
                <Button
                    transparent
                    onPress={onPressRadio(1)}
                >
                    <View style={generalStyles.simpleRowContainer}>
                        <View style={generalStyles.simpleJustifyCenterContainer}>
                            <Text>Only available</Text>
                        </View>
                        <View style={generalStyles.simpleJustifyCenterContainer}>
                            <Radio onPress={onPressRadio(1)} selected={showAvailable} />
                        </View>
                    </View>
                </Button>
            </View>
        </View>
    );
};

FilterByAviability.propTypes = propTypes;

export default FilterByAviability;

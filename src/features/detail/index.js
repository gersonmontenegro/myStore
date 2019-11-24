import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

const Detail = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Detail!</Text>
            </View>
        </SafeAreaView>
    );
};

Detail.propTypes = propTypes;

export default Detail;

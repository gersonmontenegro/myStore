import React from 'react';
import PropTypes from 'prop-types';
import {

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

const Main = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>Main!</Text>
            </View>
        </SafeAreaView>
    );
};

Main.propTypes = propTypes;

export default Main;

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';

const propTypes = {
    name: PropTypes.string.isRequired,
};

const CustomIcon = (props) => {
    const { name } = props;
    return (
        <Icon
            name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
            {...props}
        />
    );
};

CustomIcon.propTypes = propTypes;

export default CustomIcon;

import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Icon,
    Left,
    Body,
    Header,
} from 'native-base';

const propTypes = {
    navigation: PropTypes.shape({
        pop: PropTypes.func,
    }).isRequired,
};

const HeaderDetail = ({ navigation }) => {
    const onPressBackButton = () => navigation.pop();
    return (
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={onPressBackButton}
                >
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body />
        </Header>
    );
};

HeaderDetail.propTypes = propTypes;

export default HeaderDetail;

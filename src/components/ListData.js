/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import has from 'lodash/has';
import {
    Button,
    List,
    Left,
    Body,
    Right,
    Header,
} from 'native-base';
import Icon from 'components/CustomIcon';
import { ScrollView } from 'react-native';
import RenderCategoryItem from 'components/RenderCategoryItem';

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
    let subData;
    const mainLevel = get(props, 'mainlevel', '');
    subData = navigation.getParam('sublevels');
    if (subData === undefined) {
        if (has(props, 'sublevels')) {
            subData = get(props, 'sublevels', []);
        }
    }
    const renderList = (data) => {
        const list = (
            <List>
                {data.map((item) => <RenderCategoryItem key={item.id} item={item} navigation={navigation} />)}
            </List>
        );
        return list;
    };
    const onPressBackButton = () => {
        navigation.pop();
    };
    const renderHeader = () => {
        if (!mainLevel) {
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
                    <Right />
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

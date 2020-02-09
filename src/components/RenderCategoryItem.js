import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentSublevel } from 'actions';
import has from 'lodash/has';
import {
    Button,
    Text,
    View,
    ListItem,
    Body,
    Right,
} from 'native-base';
import Icon from 'components/CustomIcon';
import RenderProducts from 'components/RenderProducts';

const propTypes = {
    item: PropTypes.shape(
        {
            id: PropTypes.number,
            name: PropTypes.string,
            sublevels: PropTypes.array,
        },
    ).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        push: PropTypes.func,
    }).isRequired,
};

const RenderCategoryItem = ({ item, navigation }) => {
    const hasSublevels = has(item, 'sublevels');
    const dispatch = useDispatch();
    const onPressCategory = (item) => () => {
        dispatch(setCurrentSublevel(item.id));
        navigation.push('ListData', { sublevels: item.sublevels });
    };
    if (hasSublevels) {
        return (
            <ListItem key={item.id}>
                <Body>
                    <Button
                        transparent
                        onPress={onPressCategory(item)}
                    >
                        <Text>
                            {item.name}
                        </Text>
                    </Button>
                </Body>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        );
    }
    return (
        <View key={item.id}>
            <View style={{ backgroundColor: 'lightgray', height: 30, justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', left: 5 }}>
                    {item.name}
                </Text>
            </View>
            <RenderProducts id={item.id} navigation={navigation} />
        </View>
    );
};

RenderCategoryItem.propTypes = propTypes;

export default RenderCategoryItem;

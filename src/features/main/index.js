import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Header,
    Content,
    Button,
    Text,
    Item,
    Input,
} from 'native-base';
import data from 'data/list_categories.json';
import Icon from 'components/CustomIcon';
import ListData from 'components/ListData';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

const Main = (props) => {
    const { navigation } = props;
    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <Content>
                <ListData mainlevel sublevels={data.categories} navigation={navigation} />
            </Content>
        </Container>
    );
};

Main.propTypes = propTypes;

export default Main;

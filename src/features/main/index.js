import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Container,
    Header,
    Left,
    Body,
    Content,
    Button,
    Text,
    Title,
    Right,
    Card,
    CardItem,
    Icon,
    Item,
    Input,
} from 'native-base';
import getDataSelector from 'selectors';
import data from 'data/list_categories.json';
import ListData from '../../components/ListData';

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

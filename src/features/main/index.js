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
} from 'native-base';
import getDataSelector from 'selectors';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

const Main = (props) => {
    const { navigation } = props;
    const data = useSelector(getDataSelector);
    const onClickOpenDetail = () => {
        navigation.navigate('Detail');
    };
    const renderData = () => {
        return (
            <Text>
                Current data:
                {data}
            </Text>
        );
    };
    return (
        <Container>
            <Header>
                <Left />
                <Body>
                    <Title>Main</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Card>
                    <CardItem>
                        <Button small onPress={onClickOpenDetail}>
                            <Icon name="arrow-dropright" />
                            <Text>Go to detail!</Text>
                        </Button>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        {
                            renderData()
                        }
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

Main.propTypes = propTypes;

export default Main;

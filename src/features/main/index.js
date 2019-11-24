import React from 'react';
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

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

const Main = ({ navigation }) => {
    const onClickOpenDetail = () => {
        navigation.navigate('Detail');
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
            </Content>
        </Container>
    );
};

Main.propTypes = propTypes;

export default Main;

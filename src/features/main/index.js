import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
    data: PropTypes.number.isRequired,
};

const Main = (props) => {
    const { navigation, data } = props;
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
    useEffect(() => {
        console.log('props:', props);
    }, []);
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

const mapStateToProps = (state) => ({
    data: state.dataReducer.data,
});

Main.propTypes = propTypes;

export default connect(mapStateToProps)(Main);

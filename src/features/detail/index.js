import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    Content,
    Button,
    Text,
    Card,
    CardItem,
    Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { setData } from 'actions';
import getDataSelector from 'selectors';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

const Detail = () => {
    const dispatch = useDispatch();
    const data = useSelector(getDataSelector);
    const onClickChangeData = () => {
        dispatch(setData({ data: data + 1 }));
    };
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem>
                        <Button small onPress={onClickChangeData}>
                            <Icon name="add-circle" />
                            <Text>Change data!</Text>
                        </Button>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Current :
                            {data}
                        </Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

Detail.propTypes = propTypes;

export default Detail;

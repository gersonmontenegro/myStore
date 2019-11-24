import React from 'react';
import { connect } from 'react-redux';
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

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
    data: PropTypes.number.isRequired,
    setData: PropTypes.func.isRequired,
};

const Detail = (props) => {
    const { data, setData } = props;
    const onClickChangeData = () => {
        setData({ data: data + 1 });
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

const mapStateToProps = (state) => ({
    data: state.dataReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
    setData: (newData) => dispatch(setData(newData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

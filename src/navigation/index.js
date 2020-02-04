import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from 'features/main';
import Detail from 'features/detail';

const AppNavigator = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null,
        },
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            headerTitle: 'Detail',
        },
    },
}, {
    initialRouteName: 'Main',
});

export default createAppContainer(AppNavigator);

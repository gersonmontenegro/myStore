import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Main from 'features/main';
import ListData from 'components/ListData';
import Detail from 'features/detail';
import Cart from 'features/cart';

const AppNavigator = createBottomTabNavigator({
    Main: {
        screen: Main,
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            headerTitle: 'Car7',
        },
    },
}, {
    initialRouteName: 'Main',
});

const InitStackNavigator = createStackNavigator(
    {
        AppNavigator,
        ListData: {
            screen: ListData,
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                headerTitle: 'Detail',
            },
        },
    },
    {
        initialRouteName: 'AppNavigator',
        headerMode: 'none',
    },
);

export default createAppContainer(InitStackNavigator);

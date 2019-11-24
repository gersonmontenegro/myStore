import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text>
                        initStack. Main screen.
                    </Text>
                </View>
            </SafeAreaView>
        </>
    );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    Text,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import Info from './Info'

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView style={backgroundStyle}>
                <Info text="Health rate:"></Info>
                <Info text='Oxygen in blood'></Info>
                <Info text='Is falling'></Info>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});

export default App;

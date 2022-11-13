/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store from './app/store';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

const RNRedux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => RNRedux);

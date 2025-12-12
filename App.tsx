import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';
import {Color} from './src/assets/styles/colors';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={Color.BLACK}
      />
      <AppNavigation />
    </Provider>
  );
};

export default App;

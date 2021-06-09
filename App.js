import React, { Component, useEffect } from 'react';
import Navigator from './src/navigator';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { Colors } from './src/constants';
import { persistor, store } from './src/redux/store';

const App = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </View>
  );
};

const Loading = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator color={Colors.ui_primary} size={'large'} />
  </View>
);


export default App;

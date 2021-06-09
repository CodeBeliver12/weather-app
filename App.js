import React, { Component, useEffect } from 'react';
import Navigator from './src/navigator';
import { View } from 'react-native';

const App = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Navigator />
    </View>
  );
};

export default App;

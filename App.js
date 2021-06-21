import React from 'react';
import AppNavigator from './app/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import myStore from './app/components/redux/store';


export default function App() {
  return (
    <Provider store={myStore}>
          <NavigationContainer>
              <AppNavigator />
          </NavigationContainer>
    </Provider>

  );
}


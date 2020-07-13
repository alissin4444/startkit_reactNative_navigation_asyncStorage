import React from 'react';

import { NavigationContainer } from '@react-navigation/native'

import { FruitProvider } from './src/hooks/fruit'

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <FruitProvider>
        <Routes />
      </FruitProvider>
    </NavigationContainer>
  );
}
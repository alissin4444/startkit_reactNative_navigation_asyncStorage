import React, { createContext, useContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

const FruitContext = createContext({});

export const FruitProvider = ({ children }) => {

  const [fruits, setFruits] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('@startkit_reactNative_navigation_asyncStorage/fruits').then(fruits => {
      if(fruits) {
        setFruits(JSON.parse(fruits)) 
      }
    })
  }, [])


  const addFruit = async () => {
    const fruitPosition = fruits.length + 1
    const fruit = `Fruit ${fruitPosition}`
    setFruits([...fruits, fruit])
    await AsyncStorage.setItem('@startkit_reactNative_navigation_asyncStorage/fruits', JSON.stringify([...fruits, fruit]))
  }

  return (
    <FruitContext.Provider
      value={{
        fruits,
        addFruit
      }}
    >
      {children}
    </FruitContext.Provider>
  );
};

export function useFruit() {
  const context = useContext(FruitContext);

  if (!context) {
    throw new Error('Fruit must be used within an FruitProvider');
  } else {
    return context;
  }
}
import React, { createContext, useContext, useState, useEffect } from 'react';

const FruitContext = createContext({});

export const FruitProvider = ({ children }) => {

  const [fruits, setFruits] = useState([])

  const addFruit = () => {
    const fruitPosition = fruits.length + 1
    const fruit = `Fruit ${fruitPosition}`
    setFruits([...fruits, fruit])
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
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

import { useFruit } from '../../hooks/fruit'

const Fruits = () => {
  const { fruits } = useFruit()

  return (
    <View justifyContent="center" alignItems="center" flex={1}>
      {fruits.map(fruit => (
        <Text key={fruit}>{fruit}</Text>
      ))}
    </View>
  );
}

export default Fruits;
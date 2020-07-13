import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

import { useFruit } from '../../hooks/fruit'

const Home = ({ navigation }) => {
  const { addFruit } = useFruit()

  return (
    <View justifyContent="center" alignItems="center" flex={1}>
      <TouchableOpacity onPress={() => navigation.push('Fruits')}>
        <Text>Visualize your fruits</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addFruit()} style={{ marginTop: 40 }}>
        <Text>Add a new fruit</Text>
      </TouchableOpacity>  
    </View>
  );
}

export default Home;
/* eslint-disable prettier/prettier */

/* eslint-disable react/prop-types */

import React from 'react';
import { View, Text } from 'react-native';

const home = ({ fname, lname }) => {
  return (
    <View>
      <Text>This is my functional component!!!</Text>
      <Text>Your FirstName is: {fname}</Text>
      <Text>Your LastName is: {lname}</Text>
    </View>
  );
};

export default home;
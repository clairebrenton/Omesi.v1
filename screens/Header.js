import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();

  if (route.name === 'LoginScreen') {
    return null;
  }

  return (
    <View>
      <Text>Header Component</Text>
    </View>
  );
};

export default Header;

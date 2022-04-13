import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/** PAGES */
import HomeScreen from '../../screens/HomeScreen';

/** STACK NAVIGATION COMPONENT */
const StackRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default StackRoutes;
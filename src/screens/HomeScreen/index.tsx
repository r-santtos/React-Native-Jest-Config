import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/** TYPES ROUTE */
type StackHomeScreen = {navigation: {navigate:Function}}

const HomeScreen: React.FC<StackHomeScreen> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  }
});

export default HomeScreen;
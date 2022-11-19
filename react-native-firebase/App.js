import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FormScreen } from './screens/form';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/firebase/Add';

//  const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>{
    //   <Stack.Navigator>
    //     <Stack.Screen name=" " component={FormScreen} />
    //   </Stack.Navigator>
    // }</NavigationContainer>

    <View style = {styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

export default App;
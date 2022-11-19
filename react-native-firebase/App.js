import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FormScreen } from './screens/form';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name=" " component={FormScreen} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

export default App;
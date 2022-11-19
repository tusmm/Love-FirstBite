import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/form';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

export default App;
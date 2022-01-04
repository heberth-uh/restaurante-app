import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
import MeniList from './screens/MenuList';
import FoodDetail from './screens/FoodDetail';
import NewOrder from './screens/NewOrder';

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='NewOrder' component={NewOrder}/>
      <Stack.Screen name='MenuList' component={MeniList}/>
      <Stack.Screen name='FoodDetail' component={FoodDetail}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

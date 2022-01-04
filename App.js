import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
import MenuList from './screens/MenuList';
import FoodDetail from './screens/FoodDetail';
import NewFood from './screens/NewFood';

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='NewFood' component={NewFood}/>
      <Stack.Screen name='MenuList' component={MenuList}/>
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

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./HomeScreen"
import SignUp from "./Signup";
import Login from "./Login";
import Cards from "./product";
import Welcome from "./welcome";
import Prod from "./products2";
import ThemeProvider from "./Context/Context"
const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <ThemeProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}/> 
        <Stack.Screen name="SignUp" component={SignUp}/> 
        <Stack.Screen name="Login" component={Login}/> 
        <Stack.Screen name="Welcome" component={Welcome}/> 
        <Stack.Screen name="Products" component={Cards}/> 
      </Stack.Navigator>
    </NavigationContainer>
   </ThemeProvider>
  )
}
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SignUp from "./Signup";
import Login from "./Login";
import Cards from "./product";
import Welcome from "./welcome";
import ThemeProvider from "./Context/Context";
import FavoriteProvider from "./Context/FavouriteContext";
import { CartContext,CartProvider } from "./Context/cartlogic";
import Cart from "./CartPage";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider>
      <ThemeProvider>
      <FavoriteProvider>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </FavoriteProvider>
    </ThemeProvider>
    </CartProvider>
  );
}

function Stacks() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Products" component={Cards} />
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
}

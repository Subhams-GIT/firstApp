import React from "react";
import {  StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { ThemeContext } from "./Context/Context";
import { useContext } from "react";
import Liked from "./Liked";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cards from "./product";
import Cart from "./CartPage";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Welcome({ navigation }) {
  const route = useRoute();


  return (
    <Drawer.Navigator initialRouteName="Welcome">
      <Drawer.Screen name="Welcome" component={Tabs} options={{ title: "Welcome", headerShown: false }} initialParams={{ route, navigation }} />
      <Drawer.Screen name="WishList" component={Liked} options={{ title: "WishList", headerShown: false }} />
      {/* <Drawer.Screen name="Cart" component={Cart} options={{ title: "Cart", headerShown: false }} /> */}
      <Drawer.Screen name="LogOut" component={LogOutScreen} options={{ title: "LogOut" }} />
    </Drawer.Navigator>
  );
}

function Tabs({ route, navigation }) {
  const { theme } = useContext(ThemeContext);
  const username = route.params?.username || "User";
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Home", headerShown: false }} initialParams={{ route, navigation }} />
      <Tab.Screen name="Products" component={Cards} options={{ title: "Products", headerShown: false }} />
      <Tab.Screen name="Cart" component={Cart} options={{ title: "cart", headerShown: false }} />
    </Tab.Navigator>
  );
}

function HomeScreen({ route, navigation }) {
  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: theme }}>
      <Text style={styles.greeting}>Hello {username}!</Text>
      <Pressable style={styles.view}>
        <Text style={styles.item} onPress={() => navigation.navigate('Products')}>
          Laptops
        </Text>
        <Text style={styles.item} onPress={() => navigation.navigate('Products')}>
          HeadPhones
        </Text>
        <Text style={styles.item} onPress={() => navigation.navigate('Products')}>
          Watches
        </Text>
        <Text style={styles.item} onPress={() => navigation.navigate('Products')}>
          Soundbars
        </Text>
        <Text style={styles.item} onPress={() => navigation.navigate('Products')}>
          BackPacks
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

function LogOutScreen({ navigation }) {
  React.useEffect(() => {
    navigation.navigate('HomeScreen');
  }, [navigation]);

  return null; 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 30,
    marginBottom: 20,
  },
  view: {
    width: '80%',
  },
  item: {
    height: 100,
    width: '100%',
    fontSize: 22,
    marginBottom: 20,
    borderColor: 'black',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    textAlign: 'center',
  },
});

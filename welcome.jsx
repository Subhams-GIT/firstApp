import React from "react";
import {  StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { ThemeContext } from "./Context/Context";
import { useContext } from "react";
import Liked from "./Liked";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
export default function Welcome({navigation}) {
  const route = useRoute();
 
  return (
    <Tab.Navigator initialRouteName="Welcome">
      <Tab.Screen name="Welcome" component={Tabs} options={{ title: "Welcome",headerShown:false }} initialParams={{route,navigation}}/>
      <Tab.Screen name="WishList" component={Liked} options={{ title: "WishList",headerShown:false  }} />
      <Tab.Screen 
        name="LogOut" 
        component={LogOutScreen} 
        options={{ title: "LogOut" }} 
      />
    </Tab.Navigator>
  )
  
}

function Tabs({route,navigation}){
  const { theme } = useContext(ThemeContext);
  const username = route.params?.username || "User";
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

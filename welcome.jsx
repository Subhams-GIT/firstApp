import {View, StyleSheet, Text,Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { ThemeContext } from "./Context/Context";
import { useContext } from "react";
export default function Welcome({navigation}) {
  const { theme, updateTheme } = useContext(ThemeContext);
  const route=useRoute();
  const username=route.params.username;

  return (

         <SafeAreaView style={{height:"100%",backgroundColor:`${theme}`}}>
          <Text style={{fontSize:30,marginLeft:"40%",marginHorizontal:"40%",}}>Hello {username}!</Text>
          <Pressable style={style1.view}>
            <Text style={style1.imag} onPress={()=>navigation.navigate("Products")}>
              Laptops 
            </Text>
            <Text style={style1.imag} onPress={()=>navigation.navigate('Products')}>
              HeadPhones
            </Text>
            <Text style={style1.imag} onPress={()=>navigation.navigate('Products')}>
              Watches
            </Text>
            <Text style={style1.imag} onPress={()=>navigation.navigate('Products')}>
              Soundbars
            </Text>
            <Text style={style1.imag} onPress={()=>navigation.navigate('Products')}>
              BackPacks
            </Text>
          </Pressable>
          </SafeAreaView>
  );
}

const style1 = StyleSheet.create({
  view: {
    display:"flex",
    justifyContent:"center",
    marginLeft: 80,
    width:"70%",
    marginTop:20
  },
  imag: {
    height:100,
    width:"100%",
    fontSize: 22,
    marginBottom:50,
    borderColor: "black",
    paddingLeft:"30%",
    paddingTop:"10%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth:2,
  },
});

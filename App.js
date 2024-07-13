import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,Pressable } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import SignUp from './Signup';

export default function App() {
  const [signup,setsignup]=useState(false);

  return (
  <View>
    {signup?(<SignUp/>):(
      <View>
        <Text style={{fontSize:40,margin:100,marginHorizontal:20}}>Join Now  By Clicking Below</Text> 
      <Pressable style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',marginTop:400}}>
        <Text style={style1.button} onPress={()=>setsignup(true)}>Get Started With The App</Text>
      </Pressable>
      </View>
    )
    }
    
  </View>)
}

const style1=StyleSheet.create({
  button:{
    paddingHorizontal:30,
    paddingVertical:10,
    fontSize:30,
    marginBottom:10,
    marginHorizontal:30,
    backgroundColor:'rgb(247,175,20)',
    borderRadius:10
  }
})
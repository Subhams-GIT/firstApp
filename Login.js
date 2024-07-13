import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,Pressable, TextInput, Alert } from 'react-native';
import Welcome from './welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
 function Login(){
	const [welcome,setwelcome]=useState(false);
	const [loginemail, setEmail] = useState('');
	const [loginpassword, setPassword] = useState('');
	const email='';
	const password='';
	const handleChange=()=>{
		// async function handle(){
		// 	const email=await AsyncStorage.getItem('email')
		// 	const password=await AsyncStorage.getItem('password')
			if(email===loginpassword && password===loginemail){
				setwelcome(true);
			}
			
			else {
				console.log(loginemail);
				console.log(loginpassword);
				console.log(email);
				console.log(password);
			// AsyncStorage.removeItem(email);
			// AsyncStorage.removeItem(password);
			}
			setwelcome(true);
		}

	return (
	<View>
		{welcome?(<Welcome/>):(
		<View style={style1.view}>
			<TextInput placeholder='enter email' value={loginemail} onChangeText={(value)=>setEmail(value)} style={style1.email}/>
			<TextInput placeholder='enter password' value={loginpassword} onChangeText={(value)=>setPassword(value)} style={style1.email}/>
			<Pressable>
				<Text style={[style1.btn,style1.email]} onPress={handleChange}>Sign In</Text>
			</Pressable>
		</View>
 	)}
	</View>
		
	)
 }

const style1=StyleSheet.create({
	view: {
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height:'100%',
		width:'100%',
		gap:19,
	  },
	email:{
		fontSize:15,
		borderColor:"black",
		borderWidth:1,
		height:50,
		width:"80%",
		padding:10,
		borderRadius:12
	},
	btn:{
		backgroundColor:"rgb(247,175,20)",
		borderRadius:10
	}
});

export default Login
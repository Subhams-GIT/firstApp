import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,Pressable, TextInput,Alert } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function SignUp(){
	const [login,setlogin]=useState(false);
	const [userdata,setuserdata]=useState({email:'',username:'',password:''});
  	 const [repeatPassword, setRepeatPassword] = useState('');


	const handleChange = (name, value) => {
		setuserdata((prevData) => ({ ...prevData, [name]: value }));
	  };

	function loginAndSetFunc(){
		if(userdata.email==='' || userdata.username==='' || userdata.password==='') {
			Alert.alert("no info provided!");
			return ;
		}
		if(userdata.password === repeatPassword){
			setuserdata(userdata.email,userdata.username,userdata.password);
			// AsyncStorage.setItem('email',userdata.email);
			// AsyncStorage.setItem('password',userdata.password);
		}
		else{
			Alert.alert('wrong info ')
		return ;
		}
		// Login({userdata});
		setlogin(true);
	}
	return (
		<View>
	{login?(
		<Login/>
	)
	:(
		<View style={style1.view}>
			<TextInput style={style1.email} placeholder="Enter email" value={userdata.email} onChangeText={(value)=>handleChange('email',value)} />
      		<TextInput style={style1.email} placeholder="Enter username" value={userdata.username} onChangeText={(value)=>handleChange('username',value)} />
      		<TextInput style={style1.email} placeholder="Enter password" value={userdata.password} onChangeText={(value)=>handleChange('password',value)} secureTextEntry />
      		<TextInput style={style1.email} placeholder="Repeat password" value={repeatPassword} onChangeText={(value)=>setRepeatPassword(value)} secureTextEntry />
			<Pressable >
				<Text style={[style1.btn,style1.email]} onPress={loginAndSetFunc}>Sign Up</Text>
			</Pressable>
		</View>
		
	)}
	</View>
)}
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


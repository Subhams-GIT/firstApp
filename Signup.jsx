import { useContext, useState } from 'react';
import { StyleSheet, Text, SafeAreaView,Button,Pressable, TextInput,Alert,Image,Switch } from 'react-native';
import { ThemeContext} from './Context/Context';

let textcolor="";

export default function SignUp({navigation}) {
	const { theme, updateTheme } = useContext(ThemeContext);
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const specialChars = /^[a-zA-Z0-9]+[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	const [userdata, setuserdata] = useState({ email: '', username: '', password: '' });
	const [repeatPassword, setRepeatPassword] = useState('');
	

	const handleChange = (name, value) => {
	  setuserdata((prevData) => ({ ...prevData, [name]: value }));
	};
  
	function loginAndSetFunc() {
	  if (userdata.email === '' || userdata.username === '' || userdata.password === '') {
		Alert.alert("no info provided!");
		return ;
	  }
	  else if(!emailRegex.test(userdata.email) && !specialChars.test(userdata.password)) return ;
	  if (userdata.password === repeatPassword) {
		setuserdata(userdata.email, userdata.username, userdata.password);
		email=userdata.email
		password=userdata.password;
		username=userdata.username;
		navigation.navigate("Login",{
			email:userdata.email,
			password:userdata.password,
			username:userdata.username,
		})
	  } else {
		Alert.alert('wrong info ');
		return;
	  }
	// navigation.navigate("Login",{
	// 	email:userdata.email,
	// 	password:userdata.password,
	// 	username:userdata.username,
	// })
	}
  
	return (
			<SafeAreaView>
		  <SafeAreaView style={[style1.View,{backgroundColor:`${theme}`}]}>
			<Image source={require('./assets/man.png')} style={style1.image}/>
			<Text style={{color:`${textcolor}`}}>Sign Up Now!</Text>
			<TextInput style={[style1.email,{textcolor:`${theme}`}]} placeholder="Enter email" value={userdata.email}  onChangeText={(value) => handleChange('email', value)} />
			<TextInput style={[style1.email]} placeholder="Enter username" value={userdata.username} onChangeText={(value) => handleChange('username', value)} />
			<TextInput style={[style1.email]} placeholder="Enter password" value={userdata.password} onChangeText={(value) => handleChange('password', value)} secureTextEntry />
			<TextInput style={[style1.email]} placeholder="Repeat password" value={repeatPassword} onChangeText={(value) => setRepeatPassword(value)} secureTextEntry />
			<Pressable>
			  <Text style={[style1.btn, style1.email,{backgroundColor:`${theme}`}]} onPress={loginAndSetFunc}>Sign Up</Text>
			</Pressable>
		  </SafeAreaView>
	  </SafeAreaView>
	);
  }
const style1=StyleSheet.create({
	View: {
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height:'100%',
		width:'100%',
		gap:19,
	  },
	email:{
		fontSize:20,
		borderColor:"white",
		borderWidth:1,
		height:60,
		width:"80%",
		padding:10,
		borderRadius:12,
		
	},
	btn:{
		color:`${textcolor}`,
		backgroundColor:"white",
		borderRadius:10
	},
	image:{
		height:200,
		width:200,
		position:'static'
	  }
});


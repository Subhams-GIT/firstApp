import { ThemeContext} from './Context/Context';
import { useContext, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable, TextInput, View } from 'react-native';
import { useRoute } from '@react-navigation/native';


function Login({ navigation }) {
	const { theme, updateTheme } = useContext(ThemeContext);
	const [loginemail, setEmail] = useState('');
	const [loginpassword, setPassword] = useState('');
	const route = useRoute();
	const username = route.params.username;
	const password = route.params.password;
	const email = route.params.email;
	const handleChange = () => {
		if (email == loginemail && password == loginpassword) {
			navigation.navigate("Welcome", {
				username: username,
			})
		}

		else {
			console.log(loginemail);
			console.log(loginpassword);
			console.log(email);
			console.log(password);
		}
		// navigation.navigate("Welcome", {
		// 	username: username,
		// })}
	}
	return (
		<SafeAreaView>
			<SafeAreaView style={[style1.total, { backgroundColor: `${theme}` }]}>
				<View style={{ height: 100, width: 200 }}>
					<Text style={{ fontWeight: 1000, fontSize: 50 }}>Login!</Text>
				</View>
				<TextInput placeholder='enter email' value={loginemail} onChangeText={(value) => setEmail(value)} style={[style1.email, { color:"black" }]} />
				<TextInput placeholder='enter password' value={loginpassword} onChangeText={(value) => setPassword(value)} style={style1.email} />
				<Pressable>
					<Text style={[style1.btn, style1.email]} onPress={handleChange}>Sign In</Text>
				</Pressable>
			</SafeAreaView>
		</SafeAreaView>

	)
}

const style1 = StyleSheet.create({
	total: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		gap: 19,
	},
	email: {
		fontSize: 20,
		borderColor: "black",
		borderWidth: 1,
		height: 60,
		width: "80%",
		padding: 10,
		borderRadius: 12
	},
	btn: {
		backgroundColor: "white",
		borderRadius: 10
	}
});

export default Login
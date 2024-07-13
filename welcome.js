import { View ,StyleSheet,Text,Image,Button,Pressable} from "react-native";
import App from "./App";
import { useState } from "react";

export default function Welcome(){

	const [app,setapp]=useState(false);
	
	return (
		<View>
		{app?(<App/>):
		<View style={style1.view}>
			
			<Image source={require('./welcome.png')} style={style1.imag} />
			<Pressable>
				<Text onPress={()=>setapp(true)}>logout</Text>
			</Pressable>
		</View>
		}
		</View>
	)
}

const style1=StyleSheet.create({
	view:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
	},
	imag:{
		marginTop:100,
		height:300,
		width:300,
		textAlign:'center'
	}
})

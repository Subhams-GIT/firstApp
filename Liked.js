import { View ,SafeAreaView,Text,Image,FlatList} from "react-native";

import { useContext ,useState} from "react";
import { style } from "./product";
import App from "./HomeScreen";

const Item = ({name,image,price,key}) => (

	<View style={style.container}>
	<Text style={{ fontSize: 20,width:"80%" }}>Product: {name}</Text>
	<Text style={{ fontSize: 20,width:"100%" }}>Price: ${price} only</Text>
	<Image style={{ height: "60%", width: "60%",marginLeft:50,resizeMode:"contain" }} source={image} />
	
  </View>

);

 export default function Liked(){
	const [app, setapp] = useState(false);
	const products=useContext(Likedproducts);

	if(app) return <App/>
	return (
		<SafeAreaView style={{height:"100%"}} >
		<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
		<Text style={{fontSize:50,fontFamily:'sans-serif',backgroundColor:"#1e90ff"}}>My WishList!</Text>
		<Text style={style.imag} onPress={() => setapp(true)}>
		  logout
		</Text>
		</View>
		
	  <FlatList
		data={products}
		renderItem={({item}) => <Item name={item.name} key={item.key}  price={item.price} image={item.image} />}
		style={{backgroundColor:"#1e90ff"}}
		keyExtractor={(item)=>item.key}
	  />
	   
	</SafeAreaView>
	)
}


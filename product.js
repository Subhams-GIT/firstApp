import { View,FlatList,SafeAreaView,Text,Image ,StyleSheet} from "react-native";
import links from "./assets/products";

const Item = ({name,image,price}) => (
	
	<View style={{height:"auto",width:200,marginTop:40,marginHorizontal:40,borderColor:"black"}}>
	  <Text style={{fontSize:20}} >Product:{name}</Text>
	  <Text style={{fontSize:20}}>Price:{price}$ only</Text>
	  <Image style={{height:120,width:120}} source={image}/>
	</View>
);
  
export default function Cards(){
	return (
		<SafeAreaView>
			<Text style={{fontSize:50,fontFamily:'sans-serif',marginTop:20}}>Products</Text>
		  <FlatList
			data={links}
			renderItem={({item}) => <Item name={item.name}  price={item.price} image={item.image} />}
		  />
		</SafeAreaView>
	  );
}

const style=StyleSheet.create({
	main:{
		height:500,
		margin:20
	}
})
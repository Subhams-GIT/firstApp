import { View, FlatList, SafeAreaView, Text, Image, StyleSheet, Pressable } from "react-native";
import links from "./assets/products";
import { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Item = ({ name, image, price,id}) => (
  <View style={style.container}>
    <LikeButton name={name} image={image} price={price} id={id} />
    <Text style={{ fontSize: 20, width: "80%" ,paddingLeft:10}}>Product: {name}</Text>
    <Text style={{ fontSize: 20, width: "100%" ,paddingLeft:10}}>Price: ${price} only</Text>
    <Image style={{ height: "60%", width: "60%", marginLeft: 50, resizeMode: "contain" }} source={image} />
  </View>
);

export default function Cards({navigation}) {
 
  return (

      <SafeAreaView style={{ height: "100%" ,width:"100%"}}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",backgroundColor:"#1e90ff",paddingVertical:20 }}>
          <Text style={{ fontSize:40,backgroundColor: "#1e90ff" }}> Products</Text>
          <Text style={style.imag} onPress={()=>navigation.navigate('HomeScreen')}>
            logout
          </Text>
          <Text style={style.imag}>
            Wishlist
          </Text>
        </View>

        <FlatList
          data={links}
          renderItem={({ item }) => <Item name={item.name} id={item.key} price={item.price} image={item.image} />}
          style={{ backgroundColor: "#1e90ff" }}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
  );
}

const LikeButton = ({ name, image, price, id }) => {
  
  const [liked, setliked] = useState(false);

  const toggleLike = () => {
    setliked(!liked);
  };

  return (
    <Pressable>
      <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        size={32}
        color={liked ? "red" : "green"}
        onPress={toggleLike}
      />
    </Pressable>
  );
};

export const style = StyleSheet.create({
  main: {
    height: 500,
    margin: 20,
  },
  imag: {
    fontSize: 30,
    borderColor: "black",
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
  },
  container: {
    height: 300,
    width: "80%",
    backgroundColor: "white",
    gap:5,
    marginLeft: "10%",
    marginBottom: "10%",
    borderRadius: 20,
    borderWidth:1
   }
}) // Add padding for content
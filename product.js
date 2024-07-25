import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import links from "./assets/products";
import {useState, useContext} from "react";
import FavoriteProvider, {FavoriteContext} from "./Context/FavouriteContext";
const Item = ({name}) => (
  <View style={style.container}>
    <View style={{display: "flex"}}>
      <LikeButton product={name} />
      <Text style={{fontSize: 20, width: "80%", paddingLeft: 10}}>
        Product: {name.name}
      </Text>
      <Text style={{fontSize: 20, width: "100%", paddingLeft: 10}}>
        Price: ${name.price} only
      </Text>
    </View>

    <Image
      style={{
        height: "60%",
        width: "60%",
        marginLeft: 50,
        resizeMode: "contain",
      }}
      source={name.image}
    />
  </View>
);

export default function Cards() {
  return (
    <FavoriteProvider>
      <SafeAreaView style={{height: "100%", width: "100%"}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-even",
            backgroundColor: "#1e90ff",
            paddingHorizontal: "25%",
            paddingVertical: 20,
          }}
        ></View>

        <FlatList
          data={links}
          renderItem={({item}) => <Item name={item} />}
          style={{backgroundColor: "#1e90ff"}}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
    </FavoriteProvider>
  );
}

const LikeButton = ({product}) => {
  const {favorites, addFavorite, removeFavorite} = useContext(FavoriteContext);

  let isFavorite = favorites.some(fav => fav.key === product.key);

  const toggleLike = () => {
    console.log(isFavorite);
    isFavorite=isFavorite?false:true
    console.log(isFavorite);
    if (isFavorite) {
      addFavorite(product);
      
    } else {
      removeFavorite(product.key);
    }
    console.log(isFavorite);
    console.log(favorites);
  };

  return (
    <Pressable onPress={()=>toggleLike}>
      <Text style={style.button} onPress={()=>toggleLike()}>
        {isFavorite ? "Remove from WishList" : "Add to WishList"}
      </Text>
    </Pressable>
  );
};

export const style = StyleSheet.create({
  main: {
    height: 600,
    margin: 20,
  },
  imag: {
    fontSize: 30,
    borderColor: "black",
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
    marginRight: "25%",
    padding: 5,
  },
  container: {
    height: 350,
    width: "85%",
    backgroundColor: "white",
    gap: 5,
    marginLeft: "8%",
    marginBottom: "10%",
    borderRadius: 20,
    borderWidth: 1,
  },
  button: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 20,
    width: 150,
    padding: 5,
    textAlign: "center",
  },
}); // Add padding for content

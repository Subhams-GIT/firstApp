import React, { useContext } from "react";
import { View, SafeAreaView, Text, Image, FlatList, StyleSheet } from "react-native";
import { FavoriteContext } from "./Context/FavouriteContext";

const Item = ({ name, image, price }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 20, width: "80%" }}>Product: {name}</Text>
    <Text style={{ fontSize: 20, width: "100%" }}>Price: ${price} only</Text>
    <Image style={{ height: "60%", width: "60%", marginLeft: 50, resizeMode: "contain" }} source={image} />
  </View>
);

export default function Liked() {
  const { favorites } = useContext(FavoriteContext);

  if (!favorites || favorites.length === 0) return <Text>No favorites found!</Text>;

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 50, fontFamily: 'sans-serif', backgroundColor: "#1e90ff", width: "100%" }}>
          My WishList!
        </Text>
      </View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Item name={item.name} price={item.price} image={item.image} />}
        style={{ backgroundColor: "#1e90ff" }}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: "85%",
    backgroundColor: "white",
    gap: 5,
    marginLeft: "8%",
    marginBottom: "10%",
    borderRadius: 20,
    borderWidth: 1
  }
});

import React, {useContext} from "react";
import {View, Text, FlatList, Pressable, StyleSheet} from "react-native";
import {CartContext} from "./Context/cartlogic";

const CartItem = ({item}) => {
  const {removeFromCart, updateQuantity} = useContext(CartContext);

  const increaseQuantity = () => {
    updateQuantity(item.key, item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.key, item.quantity - 1);
    } else {
      removeFromCart(item.key);
    }
  };

  return (
    <View style={styles.cartItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <View style={styles.quantityContainer}>
        <Pressable onPress={decreaseQuantity}>
          <Text style={styles.button}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <Pressable onPress={increaseQuantity}>
          <Text style={styles.button}>+</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => removeFromCart(item.key)}>
        <Text style={styles.removeButton}>Remove</Text>
      </Pressable>
    </View>
  );
};

export default function Cart() {
  const {cart} = useContext(CartContext);

  return (
    <FlatList
      data={cart}
      renderItem={({item}) => <CartItem item={item} />}
      keyExtractor={item => item.key}
      style={styles.cartList}
    />
  );
}

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  name: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  removeButton: {
    color: "red",
  },
  cartList: {
    backgroundColor: "#fff",
    padding: 10,
  },
});

import {View, StyleSheet, Text, Image, Button, Pressable,ActivityIndicator} from "react-native";
import App from "./App";
import {useState,lazy,Suspense} from "react";
const Cards = lazy(() => import("./product"));


export default function Welcome() {
  const [app, setapp] = useState(false);
  const [product, setproduct] = useState(false);

  if(app) return <App/>;
  if(product)
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Cards />
    </Suspense>
  )
  else
  return (
    <View>
        <View>
          <Pressable style={style1.view}>
            <Text style={style1.imag} onPress={() => setapp(true)}>
              logout
            </Text>
            <Text style={style1.imag} onPress={() => setproduct(true)}>
              Products
            </Text>
          </Pressable>
        </View>

    </View>
  );
}

const style1 = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    marginTop: 600,
    marginHorizontal: 100,
    gap: 120,
  },
  imag: {
    fontSize: 30,
    borderColor: "black",
    backgroundColor: "rgb(247,175,20)",
    height: 50,
    borderRadius: 10,
  },
});

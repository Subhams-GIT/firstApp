import {ThemeContext} from "./Context/Context";
import {useState, useContext} from "react";
import {StyleSheet, Text, View, Pressable, Switch, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import ThemeProvider from "./Context/Context";
export default function HomeScreen({navigation}) {
  const {theme, updateTheme} = useContext(ThemeContext);
  const [isEnabled, setEnabled] = useState(false);
  const [background, setbackground] = useState("#1e90ff");
  const [color, setcolor] = useState("white");

  const toggleSwitch = () => {
    setEnabled((previousState) => !previousState);
    setbackground(isEnabled ? "white" : "#1e90ff");
    setcolor(isEnabled ? "white" : "black");
    const newTheme = `${background}`;
    updateTheme(newTheme);
  };

  return (
    <SafeAreaView style={{height: "100%", backgroundColor: `${theme}`}}>
      <View style={{backgroundColor: `${theme}`}}>
        <Switch
          trackColor={{false: "#767577", true: "#81b0ff"}}
          thumbColor={isEnabled ? "white" : "black"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{fontSize: 40, margin: 40, marginLeft: 80}}>
          Find Your Latest Gadgets
        </Text>
        <Image source={require("./assets/image.png")} style={style2.image} />
        <Pressable
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={[
              style2.button,
              {color: "#7c42da", backgroundColor: `${color}`},
            ]}
            onPress={() => navigation.navigate("SignUp")}
          >
            Get Started With The App
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const style2 = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    fontSize: 30,
    marginHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },
  image: {
    height: 200,
    width: 200,
    marginLeft: 50,
    marginBottom: 150,
  },
});

import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";  

export default function AboutScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>About Screen</Text>
       <Link href={"/"} style={styles.button}>Home</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    color: "white",
    backgroundColor: "blue",
    textDecorationLine: "underline",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
});
// This is a simple React Native component that displays an "About" screen.
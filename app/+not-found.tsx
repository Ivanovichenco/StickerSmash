import {View, StyleSheet, Text} from "react-native";
import {Link, Stack} from "expo-router";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "404 - Not Found",
        }}
      />
      <Text style={styles.text}>This screen doesn't exist.</Text>
      <Link href="/" style={styles.button}>
        Go to home screen!
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {    
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
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
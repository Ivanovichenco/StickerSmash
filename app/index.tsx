import { Link } from "expo-router";
import { Text, View, StyleSheet, StatusBar } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content" // Puedes usar 'default', 'light-content' o 'dark-content'
        backgroundColor="#ffffff" // Opcional: color de fondo (Android)
        hidden={false} // Asegúrate de que no esté oculto
        translucent={false} // Ponlo en false si no quieres que el contenido se dibuje debajo
      />
      <Text style={styles.text}>Hello Expo</Text>
      <Link href={"/about"} style={styles.button}>About</Link>
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

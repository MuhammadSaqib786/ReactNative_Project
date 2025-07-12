import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


function Home({ navigation } : any) {


  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")}
      style={styles.logo}
      />
      <Text style={styles.text}>PixedlPro Digital</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUp}>SignUp</Text>
      </TouchableOpacity>
      <Text style={styles.bottomText}>Continue as a guest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: '#B9A4FF',
  },
  logo: {
    marginTop: 50,
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center"
  },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        width: "90%",
        alignSelf: "center",
        color: "#000000",
        textAlign: "center",
        padding: 12,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        marginTop: 50,
    },
    signUp: {
        fontSize: 18,
        fontWeight: "bold",
        width: "90%",
        alignSelf: "center",
        color: "#ffffff",
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ffffff",
        padding: 12,
        backgroundColor: "transparent",
        borderRadius: 8,
        marginTop: 20,
    }, 
    bottomText: {
        fontSize: 16,
        color: "lightgrey",
        textAlign: "center",
        marginTop: "auto",
        marginBottom: 30,
        fontWeight: "bold"
    }
});

export default Home;

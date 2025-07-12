import {
    Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome,</Text>
      <Text style={styles.gladText}>Glad to see you!</Text>
      <TextInput
        placeholder="Email Address"
        placeholderTextColor="#ffffff"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#ffffff"
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.forgotPasswordText}>Forget Password?</Text>

      <TouchableOpacity onPress={()=> navigation.replace('Dashboard')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orLoginWithText}>
        ........................... Or Login with ...........................
      </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', alignSelf: 'center', marginTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 8, width: '45%', alignItems: 'center', padding: 12 }}>
                <Image
                    source={require('../assets/google.png')}
                    style={{ width: 24, height: 24 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 8, width: '45%', alignItems: 'center', padding: 12 }}>
                <Image
                    source={require('../assets/facebook.png')}
                    style={{ width: 24, height: 24 }}
                />
            </TouchableOpacity>
        </View>

        <Text style={styles.dontHaveAccount}>Don't have an account? 
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Sign Up Now</Text>
            </TouchableOpacity>
             </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#B9A4FF',
    paddingTop: 100
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  gladText: {
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'light',
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    padding: 12,
    backgroundColor: '#B9A4FF',
    borderRadius: 8,
    marginTop: 20,
    color: '#ffffff',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#ffffff',
    marginRight: 10,
    marginLeft: 'auto',
    marginTop: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '90%',
    alignSelf: 'center',
    color: '#000000',
    textAlign: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginTop: 20,
  },
  orLoginWithText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
  },
  dontHaveAccount: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginTop: "auto",
    marginBottom: 40,

  },
});

export default Login;

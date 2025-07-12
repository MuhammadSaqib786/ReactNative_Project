import {
    Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

function SignUp({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Creat Account</Text>
      <Text style={styles.gladText}>to get started now!</Text>
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
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#ffffff"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orLoginWithText}>
        ........................... Or SignUp with ...........................
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

        <Text style={styles.dontHaveAccount}>Already have an account?
            <TouchableOpacity onPress={() => navigation.navigate('Login') } >
                 <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Login Now</Text>
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
    paddingTop: 100,
    backgroundColor: '#B9A4FF',
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

export default SignUp;

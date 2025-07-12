
import { NewAppScreen } from '@react-native/new-app-screen';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Components/Dashboard';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();

  function RootStack() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? '#000' : '#B9A4FF'}
        />
        
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9A4FF"
  },
});

export default App;


import { NewAppScreen } from '@react-native/new-app-screen';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Home from './Components/Home';
import Login from './Components/Login';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9A4FF"
  },
});

export default App;

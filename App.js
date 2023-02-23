import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './component/Login';
import SplashScreen from './component/SplashScreen';


export default function App() {
  return (
  <SafeAreaProvider>
    <SplashScreen>
    
    </SplashScreen>
    <Login></Login>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000033',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

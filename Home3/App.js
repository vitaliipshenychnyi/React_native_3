import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Keyboard } from 'react-native';
import { Registration } from './Screens/RegistrationScreen';
import { Login } from './Screens/LoginScreen';
import { useFonts } from 'expo-font';
import { TouchableWithoutFeedback } from 'react-native';

export default function App() {
  // підключення шрифтів
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  // умова по якій завантажується додаток (тільки при завантаженні шрифтів)
  if (!fontsLoaded) {
    return null;
  }

  return (
    // обгортка для обробки натискань
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View style={styles.container}>
        {/* фонове зображення */}
        <ImageBackground
          source={require('./assets/images/Photo-BG.jpg')}
          resizeMode="cover"
          style={styles.image}
        >
          {/* <Registration /> */}
          <Login/>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

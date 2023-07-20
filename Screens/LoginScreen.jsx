import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const togglePassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSubmit = evt => {
    console.log({ email, password });

    // очищення форми
    setPassword('');
    setEmail('');
  };

  return (
    // автоматично коригує макет при появі клавіатури
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        {/* обгортка вікна входу */}
        <View
          style={{
            ...styles.formWrapper,
            paddingBottom: isOpenKeyboard ? 10 : 111,
            height: isOpenKeyboard ? 250 : 'auto',
          }}
        >
          <Text style={styles.title}>Увійти</Text>

          <TextInput
            style={[styles.commonTextParams, styles.input]}
            placeholder="Адреса електронної пошти"
            onFocus={() => setIsOpenKeyboard(true)}
            onChangeText={setEmail}
            value={email}
          ></TextInput>

          <View>
            <TextInput
              style={[styles.commonTextParams, styles.input]}
              placeholder="Пароль"
              textContentType="password"
              secureTextEntry={secureTextEntry}
              onFocus={() => setIsOpenKeyboard(true)}
              onBlur={() => setIsOpenKeyboard(false)}
              onChangeText={setPassword}
              value={password}
            />

            {/* клікабельний текст в input */}
            <TouchableOpacity
              style={{ position: 'absolute', top: 16, right: 16 }}
              onPress={togglePassword}
            >
              <Text>{secureTextEntry ? 'Показати' : 'Сховати'}</Text>
            </TouchableOpacity>
          </View>

          {/* кнопка Увійти */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={[styles.commonTextParams, styles.buttonText]}>
              Увійти
            </Text>
          </TouchableOpacity>

          {/* посилання на Зареєструватися */}
          <TouchableOpacity>
            <Text
              style={[
                styles.commonTextParams,
                { color: '#1B4371', textAlign: 'center' },
              ]}
            >
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35.16,
    textAlign: 'center',
    marginBottom: 33,
  },
  formWrapper: {
    paddingTop: 32,
    paddingBottom: 111,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    width: '100%',
    height: 50,
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    borderStyle: 'solid',
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  commonTextParams: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 18.75,
  },
  photoWrapper: {
    width: 120,
    height: 120,
    position: 'absolute',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    top: -60,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  addPhotoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderColor: '#FF6C00',
    borderRadius: 12.5,
    borderWidth: 1,
    position: 'absolute',
    top: 81,
    right: -12.5,
  },
});

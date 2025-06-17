import React, {useState} from 'react';
import {View, Text, TextInput, Alert, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import {validateEmail, validateRequiredFields} from '@utils/helpers';
import {useAuthStore} from '@store/useAuthStore';
import CustomButton from '@components/CustomButton';
import {styles} from './styles';
import {LoginFormData} from './types';

const LoginScreen = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');

  const login = useAuthStore(state => state.login);

  const handleEmailValidation = (emailText: string) => {
    const validation = validateEmail(emailText);
    setEmailError(validation.error);
    return !validation.error;
  };

  const handleEmailChange = (text: string) => {
    setFormData({...formData, email: text});
    if (emailError) {
      handleEmailValidation(text);
    }
  };

  const handleLogin = () => {
    const {email, password} = formData;

    if (!validateRequiredFields([email, password])) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const isEmailValid = handleEmailValidation(email);
    if (!isEmailValid) {
      return;
    }

    login(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, emailError ? styles.inputError : null]}
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={handleEmailChange}
              onBlur={() => handleEmailValidation(formData.email)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={formData.password}
              onChangeText={text => setFormData({...formData, password: text})}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <CustomButton title="Login" onPress={handleLogin} disabled={!formData.email || !formData.password} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

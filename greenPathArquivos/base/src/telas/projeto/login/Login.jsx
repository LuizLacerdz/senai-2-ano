import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

export default function Login({navigation}) {
  const [email, setemail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      //Verificar  se os campos foram preenchidos
      if (!email || !senha) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      }

      //Objeto para enviar para a API
      const data = {
        email: email,
        senha: senha,
      };

      // Enviar os dados para a API
      const response = await axios.post(
        'http://10.0.2.2:8085/api/loginprojeto',
        data,
      );

      //Verificar se o Login afetuado com Sucesso
      if (response.status === 201) {
        setemail('');
        setSenha('');

        navigation.navigate('Home');
      } else {
        Alert.alert(
          'Erro',
          'email ou Senha incorretos, Por favor, tente novamente',
        );
      }
    } catch {
      if (error.response && error.response.status === 401) {
        Alert.alert(
          'Erro',
          'email ou senha incorretos, por favor, tente novamente',
        );
      } else {
        Alert.alert(
          'Erro',
          'Ocorreu um erro ao fazer o Login, Por favor, tente novamente',
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        {/* Back button icon */}
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
      <Text style={styles.loginPrompt}>Faça seu login</Text>

      <TextInput
        style={styles.input}
        placeholder="email"
        placeholderTextColor="#000"
        onChangeText={setemail}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#000"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('ResetSenha')}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.signupPrompt}>
          Ainda não tem uma conta?{' '}
          <Text style={styles.signupText}>Faça seu cadastro</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#faffe4',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#018A23',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  loginPrompt: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F9F9F9',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#018A23',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#018A23',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#999999',
    marginVertical: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 60,
    marginBottom: 40,
  },
  icon: {
    width: 40,
    height: 40,
  },
  signupPrompt: {
    textAlign: 'center',
    color: '#999999',
  },
  signupText: {
    color: '#018A23',
    fontWeight: 'bold',
  },
});

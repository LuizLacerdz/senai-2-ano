import React, {useState} from 'react';
import {
  View,
  Button,
  TextInput,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const ResetSenha = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [mostrarFormulario, setMostrarFormula] = useState('');

  const handleResetSenha = async () => {
    try {
      //verificar se o email está preenchido
      if (!email) {
        Alert.alert('Por favor, insira seu email');
      }

      const data = {
        email: email,
      };

      //verificar se o email existe no banco de dados
      const response = await axios.post(
        'http://10.0.2.2:8085/api/resetprojetoGreen',
        data,
      );

      if (response.status === 200) {
        //Exibir o formulario para trocar a senha
        setMostrarFormula(true);
      } else if (response.status === 404) {
        Alert.alert('Email não encontrado. Verifique o email digitado');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Email não encontrado. Verifique o email digitado');
      } else {
        Alert.alert('Erro ao resetar a senha:', error);
      }
    }
  };

  const handleTrocarSenha = async () => {
    try {
      //Verificar se as senhas coincidem
      if (novaSenha !== confirmaSenha) {
        Alert.alert('As senhas não coincidem');
        return;
      }

      const data = {
        email: email,
        senha: novaSenha,
      };

      //fazer a solicidação paea trocar a senha
      const response = await axios.post(
        'http://10.0.2.2:8085/api/resetsenhaprojetoGreen',
        data,
      );

      if (response.status === 200) {
        navigation.navigate('Login');
        Alert.alert('Senha trocada com sucesso');
      } else {
        Alert.alert('Erro ao trocar a senha');
      }
    } catch (error) {
      Alert.alert('Erro ao trocar a senha', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Esqueceu a senha?</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        placeholderTextColor={'#018A23'}
        value={email}
        onChangeText={setEmail}
      />
      {!mostrarFormulario && (
        <Button
          title="Resetar senha"
          color={'#018A23'}
          onPress={handleResetSenha}
        />
      )}
      {mostrarFormulario && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nova Senha"
            value={novaSenha}
            placeholderTextColor={'#018A23'}
            onChangeText={setNovaSenha}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confimar Senha"
            value={confirmaSenha}
            placeholderTextColor={'#018A23'}
            onChangeText={setConfirmaSenha}
            secureTextEntry
          />
          <Button
            title="Trocar Senha"
            onPress={handleTrocarSenha}
            color={'#018A23'}
          />
        </>
      )}
      <Text style={styles.rememberText}>Lembrou da senha? </Text>
      <TouchableOpacity
        style={styles.footerText}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Faça seu login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#faffe4',
  },
  backButton: {
    fontSize: 24,
    color: '#018A23',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    height: 50,
    backgroundColor: '#018A23',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
  },
  loginText: {
    color: '#018A23',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rememberText: {
    padding: 10,
    textAlign: 'center',
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
});

export default ResetSenha;

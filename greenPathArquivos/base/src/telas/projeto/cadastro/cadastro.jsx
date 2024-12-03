import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';
export default function Cadastro({navigation}) {
  const [mensagem, setMensagem] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    nome: '',
    senha: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  //validar se campos estão vazios

  const handleCadastrar = async () => {
    if (!formData.nome || !formData.email || !formData.senha) {
      setMensagem('Todos os campos são obrigatórios');
      return;
    }
    //envio de informações para a API cadastrar no banco de dados
    try {
      await axios.post(
        'http://10.0.2.2:8085/api/cadastroprojetoGreen',
        formData,
      );
      Alert.alert('Cadastro realizado com sucesso');

      setFormData('');

      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        setMensagem(
          'O email ' + formData.email + ' já existe no banco de dados',
        );
      } else {
        console.log(error);
      }
    }

    // console.log(handleCadastrar);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Olá!</Text>
      <Text style={styles.subHeader}>Vamos começar?</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor={'black'}
        onChangeText={text => handleInputChange('nome', text)}
        value={formData.nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'black'}
        onChangeText={text => handleInputChange('email', text.toLowerCase())}
        value={formData.email}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={'black'}
        onChangeText={text => handleInputChange('senha', text)}
        leftIcon={{type: 'font-awesome', name: 'lock', color: 'white'}}
        secureTextEntry
        value={formData.senha}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

      <Text style={styles.orText}>Ou cadastra-se com</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../../../res/img/facebook.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../../../res/img/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../../../res/img/apple.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginPrompt}>
          Já tem uma conta? <Text style={styles.loginLink}>Faça seu Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#faffe4',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#018A23',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#018A23',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  footerText: {
    textAlign: 'center',
    color: '#999',
  },
  loginLink: {
    color: '#018A23',
    fontWeight: 'bold',
    marginLeft: 136,
    fontSize: 16,
  },
  loginPrompt: {
    textAlign: 'center',
    color: '#999999',
  },
});

import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function PaginaIncial({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../res/img/jogandoLixo.png')}
        style={styles.topImage}
      />
      <Text style={styles.title}>Green Path</Text>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonTextPrimary}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonTextSecondary}>Quero me cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faffe4',
  },
  topImage: {
    width: 200, // Ajuste width
    height: 100, // Ajuste height
    resizeMode: 'contain',
    marginBottom: 20,
    marginLeft: 15,
  },
  logo: {
    width: 300, // Ajuste width
    height: 300, // Ajuste height
    resizeMode: 'contain', // Ajuste resizeMode
    marginBottom: 20, //  Ajuste marginBottom
  },
  title: {
    fontSize: 24, // Ajuste fontSize
    fontWeight: 'bold', // Ajuste fontWeight
    color: '#333333', // Ajuste color
    marginBottom: 40, // Ajuste marginBottom
  },
  buttonPrimary: {
    backgroundColor: '#018A23', // Ajuste a cor do botão
    paddingVertical: 15, // Ajuste a altura do botão
    paddingHorizontal: 40, // Ajuste a largura do botão
    borderRadius: 10, // Ajuste o raio do botão
    marginBottom: 10, // Ajuste a margem inferior
  },
  buttonTextPrimary: {
    color: '#FFFFFF', // Ajuste a cor do texto
    fontSize: 16, // Ajuste o tamanho do texto
    fontWeight: 'bold', // Ajuste o peso do texto
  },
  buttonSecondary: {
    borderColor: '#648016', // Ajuste a cor do botão
    borderWidth: 2, // Ajuste a largura da borda
    paddingVertical: 15, // Ajuste a altura do botão
    paddingHorizontal: 40, // Ajuste a largura do botão
    borderRadius: 10, // Ajuste o raio do botão
    fontWeight: 'bold', // Ajuste o peso do texto
  },
  buttonTextSecondary: {
    color: '#648016', // Ajuste a cor do texto
    fontSize: 16, // Ajuste o tamanho do texto
    fontWeight: 'bold', // Ajuste o peso do texto
  },
});

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Catadores({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        {/* Back button icon */}
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Encontre e converse com um catador perto de você
      </Text>
      <View style={styles.searchContainer}>
        <Image
          source={require('../../../../res/img/pesquisa.png')}
          style={styles.pesquisa}
        />
        <TextInput style={styles.input} placeholder="Digite seu CEP" />
        <Image
          source={require('../../../../res/img/mic.png')}
          style={styles.mic}
        />
      </View>
      <ScrollView style={styles.list}>
        {[
          {
            name: 'Alessandro Caetano',
            type: 'Carroça',
            materials: 'Papel/Papelão, Latas e Plásticos',
          },
          {
            name: 'Pedro Amaral',
            type: 'Bicicleta',
            materials: 'Latas e Garrafas de Vidro',
          },
          {
            name: 'Moacir Pereira',
            type: 'Carro',
            materials: 'Latas e Plásticos',
          },
          {
            name: 'Rodolfo Alves',
            type: 'Bicicleta',
            materials: 'Garrafas de Vidro e Plásticos',
          },
        ].map((person, index) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Perfil')}>
            <View key={index} style={styles.card}>
              <Image
                source={require('../../../../res/img/perfilMasc.png')}
                style={styles.veraLucia}
              />
              <View>
                <Text style={styles.name}>{person.name}</Text>
                <Text style={styles.type}>
                  Catador Autônomo - {person.type}
                </Text>
                <Text style={styles.materials}>{person.materials}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#faffe4',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#018A23',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 70,
    height: 70,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
  },
  list: {
    flex: 1,
    marginTop: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    color: 'gray',
  },
  materials: {
    color: '#0A9D3C',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
  pesquisa: {
    width: 20,
    height: 20,
  },
  veraLucia: {
    marginRight: 16,
    width: 70,
    height: 70,
  },
});

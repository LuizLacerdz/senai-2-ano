import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Terrario = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        {/* Back button icon */}
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.header}>Terrário</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Image
            source={require('../../../../../res/img/terrario.png')}
            style={styles.image}
          />
          <Text style={styles.text} numberOfLines={30}>
            {'\t'} Criar um terrário pode ser uma maneira divertida e criativa
            de trazer um pedaço da natureza para dentro de casa. Usar um pote de
            vidro é uma excelente escolha para este projeto, pois permite uma
            visão clara das camadas e das plantas. Aqui está um guia passo a
            passo para ajudá-lo a fazer o seu próprio terrário. Você pode usar
            diversas coisas da natureza para criar o ambiente, use grama,
            pedras, gravetos dentre outros itens para formar o Terrário.
          </Text>

          <Text style={styles.subHeader}>Cuidados com o Terrário</Text>
          <Text style={styles.text} numberOfLines={30}>
            Regue levemente as plantas, garantindo que a terra esteja umedecida,
            mas não encharcada. Coloque o terrário em um local com luz indireta.
            Se for um terrário fechado, abra ocasionalmente para permitir a
            circulação de ar e evitar o acúmulo de umidade excessiva.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faffe4',
  },
  backButton: {
    top: 10,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#018A23',
  },
  header: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    padding: 5,
  },

  image: {
    width: '55%',
    height: '50%',
    marginLeft: 83,
    aspectRatio: 1,
    margin: 10,
    marginBottom: 20,
    borderRadius: 10,
  },

  subHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 8,
    padding: 5,
  },

  text: {
    fontSize: 20,
    marginLeft: 8,
    marginRight: 5,
  },

  scrollView: {
    marginHorizontal: 10,
  },
});

export default Terrario;

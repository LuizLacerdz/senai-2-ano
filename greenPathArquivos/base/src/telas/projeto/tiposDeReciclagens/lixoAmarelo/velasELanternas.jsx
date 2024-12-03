import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ReciclarMetal = ({navigation}) => {
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
          <Text style={styles.header}>Velas feitas com latas</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Image
            source={require('../../../../../res/img/vela.png')}
            style={styles.image}
          />
          <Text style={styles.text} numberOfLines={30}>
            {'\t'} Você pode produzir velas com a latas, coloque a cera ou
            parafina, pavio e você terá uma linda vela feita por você! As
            lanternas são mais trabalhosas, pois você terá que furar a lata com
            a ajuda de uma micro retífica ou prego e martelo. Faça o desenho
            desejado, cole na lata e fure.
          </Text>
          <Text style={styles.subHeader}>
            Veja outros exemplos de design ou materiais
          </Text>
          <Image
            source={require('../../../../../res/img/vela_latinha.webp')}
            style={styles.image}
          />

          <Image
            source={require('../../../../../res/img/vela_branca.jpg')}
            style={styles.image}
          />
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
    padding: 15,
  },

  scrollView: {
    marginHorizontal: 10,
  },
});

export default ReciclarMetal;

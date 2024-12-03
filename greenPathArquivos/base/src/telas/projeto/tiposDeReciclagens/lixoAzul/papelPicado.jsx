import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SectionList,
  TouchableOpacity,
} from 'react-native';

const papelPicado = ({navigation}) => {
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
          <Text style={styles.header}>Decoração Papel Picado</Text>
        </View>
        <Image
          source={require('../../../../../res/img/papelPicadDiaDosMortos.jpg')}
          style={styles.image}
        />

        <Text style={styles.subHeader}>Modo de Preparo:</Text>
        <Text style={styles.text}>
          {'\t'}O papel picado para o Dia dos Mortos é feito empilhando várias
          camadas de papel de seda colorido e perfurando-as com cinzel e
          martelo. {'\n'}
          {'\t'} O papel picado é uma arte artesanal mexicana que é usada em
          todo o ano, mas especialmente no Dia dos Mortos. É uma das principais
          decorações do altar, representando o ar, um dos quatro elementos, e
          dando cor à mesa. Além disso, o papel picado também é usado nas ruas,
          simbolizando o vento e a fragilidade da vida.
        </Text>
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
    width: '95%',
    height: undefined,
    alignSelf: 'center',
    aspectRatio: 2,
    margin: 10,
    marginBottom: 5,
    borderRadius: 10,
  },

  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  text: {
    fontSize: 20,
    marginLeft: 8,
    marginRight: 5,
  },
  box: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  box2: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  box3: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  scrollView: {
    marginHorizontal: 2,
  },

  //! Lista

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default papelPicado;

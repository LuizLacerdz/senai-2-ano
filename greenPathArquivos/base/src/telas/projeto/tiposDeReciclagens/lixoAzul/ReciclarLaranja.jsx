import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ReciclarLaranja = ({navigation}) => {
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
          <Text style={styles.header}>Como reciclar pilhas e baterias </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Image
            source={require('../../../../../res/img/placa_pilhas.png')}
            style={styles.image}
          />
          <Text style={styles.text} numberOfLines={30}>
            {'\t'} Diferente dos outros tipos comuns, pilhas e baterias são
            extremamente perigosos, portanto, é necessário uma atenção maior com
            eles.{'\n'}
            {'\n'} Separa-las do lixo comum é necessário.Para fazer o descarte
            corretamente é necessário, antes de tudo, armazenar as pilhas e/ou
            baterias sem misturá-las com outros tipo de materiais, apenas
            embalá-las em plástico,ou algum objeto fechado já é o suficiente,
            assim você acaba evitando o contato com a umidade, vazamentos e
            contaminação.{'\n'}
            {'\n'}
            No Brasil, a lei Art.33 da (Política Nacional de Resíduos Sólidos)
            obrigue as empresas fabricantes a estruturar e implementar sistemas
            de logística reversa, onde as pilhas e baterias coletadas serão
            recicladas.
          </Text>

          <Text style={styles.text} numberOfLines={30}>
            {'\t'}
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

export default ReciclarLaranja;

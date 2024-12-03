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

const cascaDeBatata = ({navigation}) => {
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
          <Text style={styles.header}>Receita Doce com Casca de Banana</Text>
        </View>
        <View>
          <Image
            source={require('../../../../../res/img/cascadelaranja.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>
            {'\n'}6 Laranja
            {'\n'}Açúcar (o mesmo peso das cascas)
            {'\n'}Cravo e canela em pau a gosto
            {'\n'}
          </Text>

          <Text style={styles.text}>
            Raspar (passar a faca) o sumo das laranjas.
            {'\n'}Retire a casca.
            {'\n'}Para retirar a casca, corte as laranjas em quatro e retire os
            gomos.
            {'\n'}Use só a casca com a parte em branco.
            {'\n'}Trocar a água várias vezes.
            {'\n'}Cortar as cascas pelo meio, depois em fatias finas.
            {'\n'}Põe em panela, cobre com água e ferve por mais ou menos 15
            minutos.
            {'\n'}Escorrer a água.
            {'\n'}Pesar.
            {'\n'}Colocar o mesmo peso das cascas em quantidade de açúcar, o
            cravo e a canela.
            {'\n'}Levar ao fogo para apurar.
            {'\n'}Simples de fazer, quando você começa comer não quer mais
            parar.
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
    fontSize: 15,
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
});

export default cascaDeBatata;

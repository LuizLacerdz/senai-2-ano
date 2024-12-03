import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const reciclarAzul = ({navigation}) => {
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
          <Text style={styles.header}>Como reciclar Papel </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Image
            source={require('../../../../../res/img/placa_papel.png')}
            style={styles.image}
          />
          <Text style={styles.text} numberOfLines={30}>
            {'\t'} As lixeiras de coleta seletiva tem a função de armazenar os
            resíduos até serem enviados para a reciclagem. A lixeira de cor
            azul, por sua vez, serve para armazenar o papel e suas variações
            (papelão, jornal, revista, cartolinas e entre outros).
            {'\n'}
            MAS, ATENÇÃO!!!!!!
            {'\n'}
            Nada de descartar na lixeira azul, papel higiênico, extratos
            bancários, guardanapos e lenços sujos, fotografias, etiquetas e
            fitas adesivas, papéis com parafina, revestido com cera e silicone,
            papel vegetal, celofane e carbono.
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

export default reciclarAzul;

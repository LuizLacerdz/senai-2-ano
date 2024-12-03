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
          <Text style={styles.header}>Como reciclar Lixos Orgânicos </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Image
            source={require('../../../../../res/img/placa_orgânico.png')}
            style={styles.image}
          />
          <Text style={styles.text} numberOfLines={30}>
            {'\t'} Compostagem Doméstica: Uma das melhores formas de lidar com
            lixo marrom é compostá-lo em casa. Você pode criar uma composteira
            ou usar um recipiente específico para compostagem no seu jardim.
            Resíduos como cascas de frutas, vegetais, café usado e folhas secas
            podem ser compostados para gerar adubo rico em nutrientes.{'\n'}
            {'\n'} Coleta Seletiva: Em muitas cidades, há serviços de coleta de
            resíduos orgânicos. Verifique se sua prefeitura oferece esse serviço
            e siga as diretrizes locais para separar e destinar o lixo marrom
            corretamente.{'\n'}
            {'\n'}
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

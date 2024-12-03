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
          <Text style={styles.header}>Receita Chips de casca de Batata</Text>
        </View>
        <View>
          <Image
            source={require('../../../../../res/img/cascadebatata.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>
            {'\n'}
            Cascas de 5 batatas grandes, tiradas no sentido de comprimento da
            batata (1,5 kg)
            {'\n'}1 sachê de Tempero SAZÓN® Amarelo
            {'\n'}meia colher (sopa) de Azeite de Oliva Extra Virgem TERRANO®
            {'\n'}
          </Text>

          <Text style={styles.text}>
            Disponha as cascas em uma superfície lisa e limpa, e seque-as com a
            ajuda de papel-toalha, para retirar o excesso de umidade.
            {'\n'}Transfira para uma tigela média e misture com o Tempero SAZÓN®
            e o Azeite TERRANO®.
            {'\n'}Disponha as cascas, aos poucos, em uma assadeira antiaderente
            e leve ao forno médio (200 graus), preaquecido, por 20 minutos,
            virando na metade do tempo, ou até as cascas dourarem.
            {'\n'}Retire do forno e sirva logo em seguida, ou deixe esfriar e
            armazene em um pote com tampa, para preservar a crocância.
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

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

const papelMache = ({navigation}) => {
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
          <Text style={styles.header}>Máscara de papel Mache</Text>
        </View>

        <Image
          source={require('../../../../../res/img/mascara.jpg')}
          style={styles.image}
        />
        <Text style={styles.subHeader}>Ingredientes:</Text>
        <SectionList
          sections={[
            {
              title: 'Máscara de Papel Mache',
              data: [
                'Papel',
                'Cola Branca',
                'Água',
                'Uma base para Moldar, como arame ou estrutura de papelão',
              ],
            },
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={item => `basicListEntry-${item}`}
        />
        <Text style={styles.subHeader}>Modo de Preparo:</Text>
        <Text style={styles.text}>
          {'\t'} Prepare a Pasta: Em um recipiente, misture a cola branca com
          água em uma proporção de aproximadamente 50/50. {'\n'} Adicione
          pedaços de papel rasgado ou picado à mistura e mexa até obter uma
          pasta uniforme e maleável. {'\n'} Molde a Peça: Usando a base para
          moldar, comece a moldar a pasta de acordo com o design desejado. Se
          estiver usando arame, você pode dar forma e estrutura à peça antes de
          adicionar a pasta. {'\n'} Construa em Camadas: Aplique a pasta em
          camadas sobre a base, alisando cada camada antes de adicionar a
          próxima. {'\n'} Isso ajudará a criar uma peça resistente e durável.
          Lembre-se de deixar a peça secar entre as camadas. {'\n'} Detalhes e
          Acabamentos: Após a secagem completa, você pode lixar as arestas,
          adicionar detalhes e texturas extras conforme desejado. {'\n'} Em
          seguida, pinte e verniz a peça para dar vida às suas criações.
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

export default papelMache;

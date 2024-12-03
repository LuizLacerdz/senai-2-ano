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

const cascaDeBanana = ({navigation}) => {
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
          <Text style={styles.header}>IoIô de Garrafa PET</Text>
        </View>

        <Image
          source={require('../../../../../res/img/ioio.png')}
          style={styles.image}
        />
        <Text style={styles.subHeader}>Ingredientes:</Text>
        <SectionList
          sections={[
            {
              title: 'IoIô de Garrafa PET',
              data: [
                '2 garrafa PET (250 ou 600 ML)',
                'Lástex',
                'Anel de Garrafa PET',
                'Grãos ou contas ou pedaço de EVA picados para enfeitar',
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
          {'\t'} Convide seu filho participar da atividade. Juntos separem os
          materiais a serem utilizados. Faça um furo de 2cm acima do fundo da
          garrafa. Faça isso com as 2 garrafas. Então peça para que seu filho
          coloque os grãos ou contas dentro e encaixe um no outro. Corte cerca
          de 2metros de lástex dobre ao meio e de um nó nas pontas. Amarre o
          lástex na junção das duas garrafas e de duas voltas, deixando sobrar a
          mesma a quantidade de lástex dos dois lados. junte as pontas e amarre
          no anel dando vários nós para ficar bem preso. Agora deixe que ele
          decore como quiser. Boa diversão.
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

export default cascaDeBanana;

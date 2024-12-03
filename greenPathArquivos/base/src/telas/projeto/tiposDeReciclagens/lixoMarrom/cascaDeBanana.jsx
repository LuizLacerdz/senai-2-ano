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
          <Text style={styles.header}>Receita Docinho com casca de banana</Text>
        </View>
        <View>
          <Image
            source={require('../../../../../res/img/doce.jpg')}
            style={styles.image}
          />
          <Text style={styles.subHeader}>Ingredientes:</Text>
          <SectionList
            sections={[
              {
                data: [
                  '6 cascas de bananas maduras, lavadas e cortadas',
                  '1/4 xícara água',
                  '1 xícara açúcar mascavo',
                  '1 colher de sopa farinha de trigo',
                  '2 cravo da Índia',
                  '1/2 colher de sopa margarina',
                ],
              },
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={item => `basicListEntry-${item}`}
          />
          <Text style={styles.text}>
            {'\t'} 1-Numa panela coloque as cascas com a água, cozinhe até
            ficarem macias. Retire do fogo e reserve. Transfira as cascas para o
            liquidificador e bata até virar uma pasta, se necessário use um
            pouco da água do cozimento.
            {'\n'}
            2-Retire do liquidificador e passe por uma peneira grossa. Coloque
            em uma panela, junto com o açúcar, a farinha e os cravos, leve ao
            fogo baixo, mexendo até desgrudar da panela. Retire do fogo e
            acrescente a margarina. Mexa e deixe esfriar.
            {'\n'}
            3-Enrole os docinhos, passe em açúcar cristal ou cacau em pó. Leve
            pra gelar.
            {'\n'}
            4-Dica: pra fazer mais docinhos, dobre a receita, e pra ter tantas
            cascas, vai consumindo suas bananas e guardando as cascas num
            potinho ou saquinho na geladeira, quando fechar a quantidade
            desejada, faça essa receita.
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

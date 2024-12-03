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

const vasoDePlanta = ({navigation}) => {
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
          <Text style={styles.header}>Vaso de Planta</Text>
        </View>
        <Image
          source={require('../../../../../res/img/vaso.png')}
          style={styles.image}
        />
        <Text style={styles.subHeader}>Ingredientes:</Text>
        <SectionList
          sections={[
            {
              data: [
                'Garrafa PET (transparente ou colorida)',
                'Tesoura ou estilete',
                'Fita métrica ou régua',
                'Marcador permanente',
                'Terra para plantas',
                'Pedrinhas para drenagem (opcional, mas recomendado)',
                'Plântula ou sementes (planta de sua escolha)',
                'Tinta ou material para decorar (opcional)',
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
          {'\t'} Preparar a Garrafa: Lave bem a garrafa PET para remover
          qualquer resíduo. Seque a garrafa completamente. Medir e Marcar:
          Decida a altura do vaso que deseja. Geralmente, a parte inferior da
          garrafa será a base do vaso. Com a fita métrica, meça a altura
          desejada e marque com o marcador permanente ao redor da garrafa. Este
          será o ponto onde você cortará. Cortar a Garrafa: Usando a tesoura ou
          o estilete, corte a garrafa na linha que você marcou. Faça o corte com
          cuidado para evitar rachaduras. Se quiser um vaso mais decorativo,
          você pode criar uma borda mais estilizada ou cortar a garrafa em
          formatos diferentes. Fazer Furos de Drenagem: Na parte inferior da
          garrafa (agora o fundo do vaso), faça alguns pequenos furos com o
          estilete ou uma chave de fenda. Isso é importante para a drenagem da
          água e para evitar o apodrecimento das raízes. Adicionar Drenagem e
          Terra: Coloque uma camada de pedrinhas no fundo da garrafa para
          melhorar a drenagem. Adicione terra para plantas em cima das
          pedrinhas, preenchendo a garrafa até a altura desejada, deixando
          espaço suficiente para a planta. Plantar: Plante a plântula ou
          sementes na terra. Se estiver usando sementes, siga as instruções do
          pacote para a profundidade e espaçamento corretos. Regue bem a planta,
          mas tome cuidado para não encharcar. Decoração (Opcional): Se desejar,
          decore a parte externa da garrafa com tinta, adesivos, cordas ou
          outros materiais decorativos. Manutenção: Coloque o vaso em um local
          apropriado para a planta, com a quantidade certa de luz. Regue
          conforme necessário, de acordo com as necessidades da planta.
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

export default vasoDePlanta;

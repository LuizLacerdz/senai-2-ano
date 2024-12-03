import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function Reciclagem({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>
            Resíduos que você pode separar para coleta:
          </Text>

          {/* Categories */}
          <View style={styles.categories}>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Lixo Azul')}>
              <Image
                source={require('../../../../res/img/placa_papel.png')}
                style={styles.icones}
              />
              <Text style={styles.categoryTitle}>Papel</Text>
              <Text style={styles.categoryDescription}>
                Caixas ou pedaços de Papelão, Jornais, Revistas, Folhas, etc
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Lixo Vermelho')}>
              <Image
                source={require('../../../../res/img/placa_plástico.png')}
                style={styles.icones}
              />
              <Text style={styles.categoryTitle}>Plástico</Text>
              <Text style={styles.categoryDescription}>
                Embalagens, garrafas PET, potes, canudos, tampinhas, etc
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Lixo Verde')}>
              <Image
                source={require('../../../../res/img/placa_vidro.png')}
                style={styles.icones}
              />
              <Text style={styles.categoryTitle}>Vidro</Text>
              <Text style={styles.categoryDescription}>
                Garrafas, frascos e recipientes no geral
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Lixo Marrom')}>
              <Image
                source={require('../../../../res/img/placa_orgânico.png')}
                style={styles.icones}
              />
              <Text style={styles.categoryTitle}>Orgânico</Text>
              <Text style={styles.categoryDescription}>
                Sobras de Alimentos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Lixo Laranja')}>
              <Image
                source={require('../../../../res/img/placa_pilhas.png')}
                style={styles.icones}
              />
              <Text style={styles.categoryTitle}>Pilhas</Text>
              <Text style={styles.categoryDescription}>Pilhas, Baterias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Lixo Amarelo')}>
              <Image
                source={require('../../../../res/img/placa_metal.png')}
                style={styles.icones}
              />
              <Text style={styles.categoryTitle}>Metal</Text>
              <Text style={styles.categoryDescription}>
                Latas, arames, ferramentas e utensílios de cozinha
              </Text>
            </TouchableOpacity>
          </View>

          {/* Back Button */}
          <TouchableOpacity
            style={styles.ReturnButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.ReturnButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#faffe4',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#018A23',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  categoryDescription: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#8CC63F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#8CC63F',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  icones: {
    padding: 10,
    alignItems: 'center',
    width: 70,
    height: 70,
  },
  ReturnButton: {
    borderWidth: 1,
    backgroundColor: '#0A9D3C',
    padding: 10,
    borderRadius: 5,
  },
  ReciclagemButton: {
    padding: 10,
    borderRadius: 5,
    height: 100,
  },
  ReturnButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

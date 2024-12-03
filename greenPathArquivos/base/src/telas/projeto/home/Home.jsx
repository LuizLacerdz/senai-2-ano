import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  Linking,
} from 'react-native';
import axios from 'axios';

export default function HomeScreen({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:8085/api/listaragenda')
      .then(response => {
        //ordenar os dados pelo id em ordem crescente
        const sortData = response.data.sort((a, b) => a.id - b.id);
        setData(sortData);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  }, []);

  // const handleAtualizar = (id) => {
  //     navigation.navigate('Atualizar', { id });
  // };

  const renderItem = ({item}) => (
    <View>
      <Text style={styles.collectionText}>
        <Text style={styles.itemText}>{item.calendario}</Text>
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require('../../../../res/img/logo.png')}
              style={styles.logo}
            />
          </View>

          <Text style={styles.welcomeText}>Bem vindo ao Green Path!</Text>

          <View style={styles.collectionInfo}>
            <Text style={styles.collectionText}>
              A próxima coleta municipal será em{' '}
              <Text style={styles.boldText}></Text>
            </Text>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              style={styles.collectionText}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Coletas Agendadas')}>
              <Text style={styles.buttonText}>Ver coletas</Text>
            </TouchableOpacity>
          </View>

          {/* Options */}
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() =>
                Linking.openURL('https://maps.app.goo.gl/W8iq8JxfPijLZn2v8')
              }>
              <Image
                source={require('../../../../res/img/local.png')}
                style={styles.icones}
              />
              <Text style={{fontWeight: 'bold', fontSize: 16, padding: 7}}>
                Veja pontos de coleta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => navigation.navigate('Catadores')}>
              <Image
                source={require('../../../../res/img/pesquisa.png')}
                style={styles.icones}
              />
              <Text style={{fontWeight: 'bold', fontSize: 16, padding: 7}}>
                Encontrar catadores
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => navigation.navigate('Reciclagem')}>
              <Image
                source={require('../../../../res/img/reciclagem.png')}
                style={styles.icones}
              />
              <Text style={{fontWeight: 'bold', fontSize: 16, padding: 7}}>
                O que posso reciclar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => navigation.navigate('Agendamento')}>
              <Image
                source={require('../../../../res/img/calendario.png')}
                style={styles.icones}
              />
              <Text style={{fontWeight: 'bold', fontSize: 16, padding: 10}}>
                Agendar Coleta
              </Text>
            </TouchableOpacity>
          </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icones: {
    padding: 10,
    marginRight: 100,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  collectionInfo: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  collectionText: {
    fontSize: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0A9D3C',
    padding: 10,
    borderRadius: 10,
    marginTop: 16,
    width: 100,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  optionButton: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  scheduleText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#492623',
  },

  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    width: 115,
    height: 200,
    borderWidth: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  profilePic: {
    width: 45,
    height: 45,
  },
});

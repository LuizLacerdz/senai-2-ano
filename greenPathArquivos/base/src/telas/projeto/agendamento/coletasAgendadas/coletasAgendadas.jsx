import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import axios from 'axios';

export default function ColetasAgendadas({navigation}) {
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

  const handleDeletar = id => {
    axios.delete(`http://10.0.2.2:8085/api/deletarcalendario/${id}`);
    console.log(id);
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.itemText}>{item.id}</Text>
      <Text style={styles.itemText}>{item.calendario}</Text>
      <Text style={styles.itemText}>{item.materiais}</Text>
      <Text style={styles.itemText}>{item.peso}</Text>
      <TouchableOpacity style={styles.updateButton} onPress={handleDeletar}>
        <Text style={styles.updateButtonText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Você possui coleta agendada</Text>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.list}
          />

          <Text style={styles.note}>
            *Deixe seus resíduos recicláveis prontos para retirada e fique
            atento ao seu telefone.
          </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
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
  list: {
    width: '100%',
    padding: 10,
  },
  itemText: {
    color: 'balck',
    flex: 1,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  note: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText2: {
    color: '#B1CC33',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  updateButton: {
    flex: 1,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    width: '30%',
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  rescheduleButton: {
    flex: 1,
    borderColor: '#B1CC33',
    width: '30%',
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
});

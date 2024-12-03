import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import axios from 'axios';

export default function cancelarColeta({navigation}) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  //função que recebe o ID para roealizar a exclusã
  const handleDelete = id => {
    Alert.alert(
      'Confirmar Exclusão',
      'Você tem certeza que deseja deletar este Aegdamento?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Exclusão cancelada'),
          style: 'cancel',
        },

        {
          text: 'Sim',
          onPress: async () => {
            try {
              const res = await axios.delete(
                `http://10.0.2.2:8085/api/deletarcalendario/${id}`,
              );

              if (res.status === 200) {
                setData(currentData =>
                  currentData.filter(item => item.id !== id),
                );

                setFilteredData(currentData =>
                  currentData.filter(item => item.id !== id),
                );

                Alert.alert('Agendamento deletada com sucesso!');

                navigation.navigate('Coleta Cancelada');
              }
            } catch (err) {
              Alert.alert('Erro ao deletar Agendamento', err.message);
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Tem certeza que deseja cancelar este agendamento?
      </Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.cancelButton} onPress={handleDelete}>
        <Text style={styles.cancelButtonText}>Cancelar coleta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '90%',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  infoBox: {
    width: '80%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
  dateText: {
    fontSize: 16,
    textAlign: 'center',
  },
  materialText: {
    color: 'orange',
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rescheduleButton: {
    borderColor: 'limegreen',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  rescheduleButtonText: {
    color: 'limegreen',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 20,
  },
});

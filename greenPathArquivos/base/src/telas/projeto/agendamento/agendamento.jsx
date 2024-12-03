import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {ptBR} from './localeCalendarConfig';
import axios from 'axios';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function Agendamento({navigation}) {
  const [mensagem, setMensagem] = useState('');
  const [data, setData] = useState({
    id: '',
    calendario: '',
    materiais: '',
    peso: '',
    observacao: '',
  });

  const handleInputChange = (name, value) => {
    setData({...data, [name]: value});
  };

  const handleCadastrar = async () => {
    //envio de informações para a API cadastrar no banco de dados
    try {
      //   if (!data.calendario || !data.materiais || !data.peso || !data.observacao) {
      //     return;
      // }

      console.log(data);

      await axios.post('http://10.0.2.2:8085/api/cadastrarcalendario', data);
      Alert.alert('Agendado com sucesso!!!');

      setData('');

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        setMensagem(
          'A data ' + data.calendario + ' já existe no banco de dados',
        );
      } else {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>

          <View style={styles.content}>
            <Text style={styles.title}>Associação de Reciclagem</Text>
            {/* CALENDARIO */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quando será sua coleta?</Text>
              <Calendar
                style={styles.Calendar}
                headerStyle={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'white',
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
                theme={{
                  textMonthFontSize: 18, // Tamanho da fonte do mês
                  monthTextColor: '#0A9D3C', // Cor do mês atual
                  todayTextColor: '#0A9D3C', // Cor do dia atual
                  selectedDayBackgroundColor: '#0A9D3C', // Cor de fundo do dia selecionado
                  selectedDayTextColor: 'white', // Cor do dia selecionado
                  arrowColor: '#0A9D3C', // Cor das setas
                  textDayStyle: {color: 'black'}, // Cor das datas
                  textDisabledColor: '#ADADAD', // Cor das datas desabilitadas
                }}
                //DATA MINIMA
                minDate={new Date().toDateString()} // DATA MINIMA
                //SUMIR COM AS DATAS ANTERIORES
                hideExtraDays={true} // SUMIR COM AS DATAS ANTERIORES
                onDayPress={setData} // DATA SELECIONADA
                //MARCAR AS DATAS SELECIONADAS
                markedDates={
                  data && {
                    [data.toString]: {selected: true},
                  }
                }
                value={data.calendario}
              />
            </View>

            {/* MATERIAIS */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Quais materiais serão coletados?
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Materiais"
                placeholderTextColor={'black'}
                onChangeText={text => handleInputChange('materiais', text)}
                value={data.materiais}
              />

              <TextInput
                style={styles.input}
                placeholder="Peso"
                placeholderTextColor={'black'}
                onChangeText={text => handleInputChange('peso', text)}
                value={data.peso}
              />

              <TextInput
                style={styles.input}
                placeholder="Comente sobre seus itens, horários para recebimento, etc."
                placeholderTextColor={'black'}
                onChangeText={text => handleInputChange('observacao', text)}
                value={data.observacao}
              />
              <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
                <Text style={styles.buttonText}>Agendar coleta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faffe4',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
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
  logo: {
    width: 40,
    height: 40,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    textAlign: 'center',
    padding: 10,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 19,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0A9D3C',
    color: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
});

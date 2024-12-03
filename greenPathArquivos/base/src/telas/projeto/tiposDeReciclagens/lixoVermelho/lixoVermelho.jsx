import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'galio-framework';
import {Text} from '@rneui/themed';

export default function lixoVermelho({navigation}) {
  const Sidebar = ({isOpen, onClose}) => {
    const navigation = useNavigation();
    const navigateToScreen = screenName => {
      navigation.navigate(screenName);
      onClose();
    };

    return (
      <View
        style={[
          styles.sidebarContainer,
          {transform: [{translateX: isOpen ? 0 : -300}]},
        ]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>

        <View style={styles.sidebarContent}>
          <Text style={styles.sidebarTitle}>Login</Text>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.sidebarItemText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.sidebarItemText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <SafeAreaView style={styles.scrollview}>
      <ScrollView>
        {/*  IoIo */}

        <View style={styles.containerLearn}>
          <View style={styles.textocontainer}>
            <Text style={styles.texto}>
              IoIô{'\n'} de Tampa {'\n'} de Garrafa
            </Text>
            <View style={styles.buttoncontainer}>
              <Button
                onPress={() => navigation.navigate('Ioio')}
                style={styles.botao}>
                Saber Mais..
              </Button>
            </View>
          </View>
          <Image
            source={require('../../../../../res/img/ioio.png')}
            style={styles.imagem}
          />
        </View>

        {/* Vaso de Planta */}

        <View style={styles.containerLearn}>
          <View style={styles.textocontainer}>
            <Text style={styles.texto}>
              Vaso de {'\n'} planta {'\n'} Improvisado
            </Text>
            <View style={styles.buttoncontainer}>
              <Button
                onPress={() => navigation.navigate('Vaso de Planta')}
                style={styles.botao}>
                Saber Mais..
              </Button>
            </View>
          </View>
          <Image
            source={require('../../../../../res/img/vaso.png')}
            style={styles.imagem}
          />
        </View>

        {/* Bilboque */}

        <View style={styles.containerLearn}>
          <View style={styles.textocontainer}>
            <Text style={styles.texto}>Bilboquê {'\n'} de garrafa</Text>
            <View style={styles.buttoncontainer}>
              <Button
                onPress={() => navigation.navigate('Bilboque')}
                style={styles.botao}>
                Saber Mais..
              </Button>
            </View>
          </View>
          <Image
            source={require('../../../../../res/img/bilboque.png')}
            style={styles.imagem}
          />
        </View>

        <Button
          onPress={() => navigation.navigate('Reciclar Vermelho')}
          style={styles.botaoReciclar}>
          <Text color="#fff">Como Reciclar</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
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
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    height: '100%',
    width: 250,
    zIndex: 100,
    elevation: 5,
    paddingTop: 50,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  notificationIcon: {
    marginLeft: 10,
  },
  searchBar: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 50,
    height: 60,
  },
  icon: {
    width: '8%',
    maxHeight: 110,
    resizeMode: 'contain',
    marginLeft: 90, // Ajustado a margem esquerda para a imagem
  },
  containerLearn: {
    flex: 1,
    flexDirection: 'row', // Alinha os elementos na horizontal
    alignItems: 'center',
    justifyContent: 'space-around', // Distribui o espaço entre os elementos
    padding: 20, // Adiciona padding ao container
    backgroundColor: '#E4F6F2',
    borderRadius: 20,
    margin: 10,
  },
  imagem: {
    width: '40%',
    height: 130,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
    margin: 10,
  },
  botao: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ce1446',
    color: 'white',
    borderRadius: 30,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleCard: {
    fontSize: 17,
    fontWeight: 'bold',
    borderTopWidth: 1,
    marginTop: 1,
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  containerCards: {
    alignItems: 'center',
    marginBottom: 20,
  },

  mainCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  subtitulo: {
    marginLeft: 220,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#199A8E',
    marginTop: 12,
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
  image: {
    backgroundColor: '#5D2828',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image2: {
    backgroundColor: '#FF0000',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image3: {
    backgroundColor: '#0047B1',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image4: {
    backgroundColor: '#EBFF00',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image5: {
    backgroundColor: '#05FF00',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image6: {
    backgroundColor: '#FF8A00',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  content: {
    margin: 16,
    borderTopWidth: 1,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  titleS: {
    flexDirection: 'row',
  },
  botaoReciclar: {
    marginTop: 20,
    marginLeft: 120,
    padding: 10,
    backgroundColor: '#ce1446',
    color: '#fff',
    borderRadius: 30,
  },
});

import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'galio-framework';
import {Text} from '@rneui/themed';

export default function LixoLaranja({navigation}) {
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
          {/* Back button icon */}
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
        <View>
          <Text style={styles.header}>ATENÇÃO !!!</Text>
        </View>
        <Text style={styles.texto}>
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          Pilhas e Baterias são materiais muito perigosos e prejudiciais a saúde
          para serem reutilizados como outros objetos listados aqui no
          aplicativo, portanto, clique no botão abaixo para se informar de como
          fazer o descarte correto desses objetos.
        </Text>
        <Button
          onPress={() => navigation.navigate('Reciclar Laranja')}
          style={styles.botao}>
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
  header: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    padding: 5,
    marginLeft: 85,
    color: '#ff0000',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  notificationIcon: {
    marginLeft: 10,
  },
  texto: {
    fontSize: 20,
    marginLeft: 8,
    marginRight: 5,
  },
  botao: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff7c02',
    color: 'white',
    borderRadius: 30,
    marginLeft: 110,
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
});

import React from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

export default function PontosDeReciclagem({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        {/* Back button icon */}
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: -23.55052, longitude: -46.633308}} />
      </MapView>
      <View style={styles.searchContainer}>
        <Text style={styles.headerText}>
          Encontre pontos de coleta e organizações perto de você
        </Text>
        <TextInput style={styles.input} placeholder="Digite seu CEP" />
        <FlatList
          data={[
            {
              key: 'Associação dos Catadores de Material Reciclável . ASCAS',
              address:
                'Av. Santos Dumont, 764 - Vila Santa Terezinha, São João del Rei - MG',
              hours: 'Aberto de seg. a sex. das 7h30 às 17h',
              phone: '(32) 98467-8637',
            },
            {
              key: 'Coleta Municipal',
              address: 'Trajeto pelo bairro Vila Santa Terezinha',
              hours: 'Quinta-feira a partir das 18h',
              phone: '',
            },
            {
              key: 'Reciminas Comércio De Metais Recicláveis',
              address:
                'Av. Trinta e Um de Março, 689 - Colônia do Marçal, São João del Rei - MG',
              hours: 'Aberto de seg. a sex. das 8h às 18h',
              phone: '(32) 3373-7642',
            },
          ]}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.key}</Text>
              <Text>{item.address}</Text>
              <Text style={styles.hours}>{item.hours}</Text>
              <Text>{item.phone}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mapa" component={MapScreen} />
        {/* Add other screens here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {width: '100%', height: '40%'},
  searchContainer: {padding: 16, backgroundColor: '#faffe4'},
  headerText: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  listItem: {marginBottom: 20},
  listItemText: {fontWeight: 'bold', fontSize: 16},
  hours: {color: 'orange', marginBottom: 5},
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

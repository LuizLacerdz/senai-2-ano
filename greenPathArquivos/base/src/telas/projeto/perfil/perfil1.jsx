import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Link,
} from 'react-native';

export default function Perfil1({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        {/* Back button icon */}
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../../res/img/perfilMasc.png')}
          style={styles.veraLucia}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Alessandro Caetano</Text>
          <View style={styles.coletasContainer}>
            <Text style={styles.coletasText}>47 coletas realizadas</Text>
          </View>
          <Text style={styles.type}>Catador Autônomo - Carroça</Text>
          <Text style={styles.materials}>Papel/Papelão, Latas e Plásticos</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Image
            source={require('../../../../res/img/iconPapel.png')}
            style={styles.icons}
          />
          <Image
            source={require('../../../../res/img/icon.png')}
            style={styles.icons}
          />
          <Image
            source={require('../../../../res/img/iconGarrafa.png')}
            style={styles.icons}
          />
        </View>
      </View>
      <Text style={styles.contactTitle}>Entre em contato com Alessandro:</Text>
      <View style={styles.contactButtons}>
        <TouchableOpacity style={styles.whatsappButton}>
          <Image
            source={require('../../../../res/img/whatsappIcon.png')}
            style={styles.whatsappIcon}
          />
          <Text style={styles.whatsappText}>Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callText}>Ligar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
    paddingHorizontal: 16,
  },
  logo: {
    width: 100,
    height: 100,
  },
  profilePic: {
    width: 50,
    height: 50,
  },
  backButtonContainer: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  coletasContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
  },
  coletasText: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#E2F3E8',
  },
  type: {
    fontWeight: 'bold',
  },
  materials: {
    color: '#0A9D3C',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25D366',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  whatsappText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  callButton: {
    borderColor: '#0A9D3C',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  callText: {
    color: '#0A9D3C',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
  veraLucia: {
    marginRight: 16,
    width: 70,
    height: 70,
  },
  whatsappIcon: {
    width: 30,
    height: 30,
  },
  icons: {
    margin: 15,
  },
});

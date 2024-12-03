import { Text, Box, SafeAreaView, Image, VStack, HStack, Button } from '@gluestack-ui/themed';
import cardimage from '../../../../src/img/design/cardimage.jpg';
import miniLogo from '../../../../src/img/design/card2.jpg'; // Import da mini logo

export default function CiclismoScreen() {
  return (
    <SafeAreaView bg={'#FFF'} h={'100%'}>
      <Box style={styles.container}>
        {/* Card */}
        <Box style={styles.card}>
          {/* Logo e textos */}
          <HStack alignItems="center" mb={3}>
            <Image
              source={miniLogo}
              alt="Mini Logo"
              style={styles.logo}
            />
            <VStack>
              <Text style={styles.ciclismoText}>Ciclismo</Text>
              <Text style={styles.descriptionText}>
                Os atletas de ciclismo praticam o esporte pelo menos 5 vezes por semana.
              </Text>
            </VStack>
          </HStack>

         
          <Image
            source={cardimage}
            alt="Card Image"
            style={styles.cardImage}
          />

          {/* espaçamento */}
          <HStack justifyContent="space-between" mt={4} width="100%">
            <Button style={styles.button}>
              <Text style={styles.buttonText}>Favoritar</Text>
            </Button>
            <Button style={styles.button}>
              <Text style={styles.buttonText}>Adicionar Info</Text>
            </Button>
          </HStack>
        </Box>
      </Box>
    </SafeAreaView>
  );
}

export const styles = {
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: '50%',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    marginRight: 8,
  },
  ciclismoText: {
    fontSize: 14,
    color: 'red', 
  },
  descriptionText: {
    fontSize: 12,
    color: 'black', 
  },
  cardImage: {
    width: 900,
    height: 390,
  },
  button: {
    backgroundColor: '#474d4f',
    flex: 1,
    marginHorizontal: 2, 
  },
  buttonText: {
    color: 'white', 
  },
};

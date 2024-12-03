// Gabriel / Test
import { Text, Box, SafeAreaView, Image, View, StyleSheet, ImageBackground, ScrollView, FlatList } from '@gluestack-ui/themed';
import styles from './Style';
import LogoSesiBranca from '../../../../src/img/sesi-senai-logo-branca.png';
import imagemFundo from '../../../../src/img/iconeadvogado.png'
import iconeFundo from '../../../../src/img/direito/graficodireito.png'
import tabelaFundo2 from '../../../../src/img/tabela2advogado.png'
import balanca2 from '../../../../../app/src/img/direito/balanca2.png'
import podcast from '../../../../../app/src/img/direito/favourite.png'
import book from '../../../../app/../src/img/direito/book.png'



export default function DireitoScreen({ }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Box style={styles.boxTitulo}>
            <Text style={styles.TextTitulo}>DIREITO</Text>
          </Box>
          <Box style={styles.boxList}>
            <Image ml={24} source={imagemFundo} />
            <FlatList w={'60%'}
              data={[
                { key: 'Sobre o curso' },
                { key: 'Matérias Relacionadas' },
                { key: 'Vocabulário Técnico' },
                { key: 'Gráficos' },
              ]}
              renderItem={({ item }) => {
                return (
                  <Box style={{ marginBottom: 10 }}>
                    <Text color='white'>{`\u2022 ${item.key}`}</Text>
                  </Box>
                );
              }}
            />
          </Box>
          <Box style={styles.boxSubTitulo}>
            <Text style={styles.TextSub}>Sobre o Curso</Text>
          </Box>
          <Text style={styles.TextTexto}> O objetivo do curso de Direito é formar profissionais capacitados para atuar na área jurídica, proporcionando uma base teórica sólida e desenvolvendo habilidades práticas essenciais para a resolução de conflitos e aplicação de normas. Além de promover a ética profissional e o pensamento crítico, o curso visa preparar os alunos para defender direitos e garantias fundamentais, incentivando uma atuação cidadã e o engajamento social. </Text>

          <Image alignSelf='center' w={150} h={150} source={balanca2} />

          <Box style={styles.boxSubTitulo}>
            <Text style={styles.TextSub}>Matérias Relacionadas</Text>
          </Box>

          <Text style={styles.TextTexto} > História: Ajuda a entender a evolução das leis e sistemas jurídicos ao longo do tempo.</Text>
          <Text style={styles.TextTexto}> Geografia: Relaciona-se com a análise de territórios, legislação ambiental e direitos humanos.</Text>
          <Text style={styles.TextTexto}> Filosofia: Aborda questões éticas e morais que são fundamentais para o Direito.</Text>
          <Text style={styles.TextTexto}> Sociologia: Estuda as relações sociais e como as leis impactam a sociedade.</Text>
          <Text style={styles.TextTexto}> Língua Portuguesa: Essencial para a interpretação de textos legais e a redação de documentos.</Text>
          <Image alignSelf='center' w={150} h={150} source={book} />

          <Box style={styles.boxSubTitulo}>
            <Text style={styles.TextSub}>Vocabulario Técnico</Text>
          </Box>
          <Text style={styles.TextTextoList}> 1. Ação: Pedido judicial para a resolução de um litígio. </Text>
          <Text style={styles.TextTextoList}> 2 Advogado: Profissional habilitado para representar clientes em questões legais.</Text>
          <Text style={styles.TextTextoList}> 3. Apelação: Recurso para revisar uma decisão judicial em instâncias superiores.</Text>
          <Text style={styles.TextTextoList}> 4. Citação: Ato de notificar alguém sobre um processo judicial em que está envolvido.</Text>
          <Text style={styles.TextTextoList}> 5. Código: Conjunto de normas jurídicas organizadas sobre um tema específico (ex: Código Civil).</Text>
          <Text style={styles.TextTextoList}> 6. Contratos: Acordos entre partes que geram obrigações e direitos.</Text>
          <Text style={styles.TextTextoList}> 7. Demanda: Pedido formal de abertura de um processo judicial.</Text>
          <Text style={styles.TextTextoList}> 8. Direitos Humanos: Direitos universais garantidos a todos os indivíduos.</Text>
          <Text style={styles.TextTextoList}> 9. Jurídico: Relativo ao Direito e à prática legal.</Text>
          <Text style={styles.TextTextoList}>10. Litígios: Conflitos ou disputas levadas ao Judiciário.</Text>

    
          <Box style={styles.boxSubTitulo}>
            <Text style={styles.TextSub}>Gráfico</Text>
          </Box>
          <Image marginBottom={20} alignSelf='center' w={400} h={300} source={iconeFundo} />
          <Image alignSelf='center' w={300} h={300} source={tabelaFundo2} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
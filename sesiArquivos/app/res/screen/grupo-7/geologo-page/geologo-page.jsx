
import { Text, Box, SafeAreaView, Image, View, StyleSheet, ImageBackground, ScrollView, FlatList, Button } from '@gluestack-ui/themed';
// import {HashLink as link} from "react-router-hash-link" PROBLEMA NO LINK
import styles from './Style';

import Logo1 from '../../../../src/img/geologia/logo1.png'
import Logo2 from '../../../../src/img/geologia/logo2.png'
import Logo3 from '../../../../src/img/geologia/logo3.png'
import Logo4 from '../../../../src/img/geologia/logo4.png'
import grafico1 from '../../../../src/img/geologia/tabela1.jpg'
import grafico2 from '../../../../src/img/geologia/tabela2.jpg'

export default function GeologoScreen({}) {
    return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView ref={ref => this.scrollViewRef = ref}>
          <Box style={styles.boxTitulo}>
            <Text style={styles.TextTitulo}>GEOLOGIA</Text>
          </Box>
          <Box style={styles.boxList}>
            <Image ml={24} source={Logo1} />

            <FlatList w={'60%'}
              data={[
                <a href="#sobre">ABOUT</a>,
                // { key: <Link smooth to="#sobre">Sobre o Curso</Link>}, PROBLEMA NO LINK
                { key: 'O que um geólogo faz?' },
                { key: 'Áreas de atuação' },
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
            <Box>
                <Box style={styles.boxSubTitulo}>
                    <Text id='sobre' style={styles.TextSub}>Sobre o Curso</Text>
                </Box>
                <Text style={styles.TextTexto}> A Geologia é a ciência que estuda a história do nosso planeta, desde sua formação até os dias atuais. Os geólogos são como detetives, investigando rochas, minerais, fósseis e fenômenos naturais para entender como a Terra funciona e como ela se transformou ao longo do tempo.</Text>

                <Image alignSelf='center' w={120} h={120} source={Logo2} />
            </Box>
            <Box>
                <Box style={styles.boxSubTitulo}>
                    <Text id='geologo' style={styles.TextSub}>O que um geólogo faz?</Text>
                </Box>

                <Text style={styles.TextTexto} > Mapeamento geológico: Criar mapas que mostram a distribuição de diferentes tipos de rochas e minerais. </Text>
                <Text style={styles.TextTexto}> Análise de amostras: Examinar rochas, minerais e fósseis em laboratório para determinar sua composição e idade. </Text>
                <Text style={styles.TextTexto}> Exploração de recursos minerais: Prospecção e exploração de depósitos minerais.</Text>
                <Text style={styles.TextTexto}> Estudos ambientais: Avaliar o impacto de atividades humanas no meio ambiente. </Text>
                <Text style={styles.TextTexto}> Consultoria: Oferecer consultoria em projetos de engenharia, construção e meio ambiente.</Text>
                <Image alignSelf='center' w={100} h={100} source={Logo3} />
            </Box>
            <Box>
                <Box style={styles.boxSubTitulo}>
                    <Text style={styles.TextSub}>Áreas de atuação</Text>
                </Box>
                <Text style={styles.TextTextoList}> Petróleo e gás: Exploração e produção de petróleo e gás natural. </Text>
                <Text style={styles.TextTextoList}> Mineração: Prospecção e exploração de minérios.</Text>
                <Text style={styles.TextTextoList}> Hidrogeologia: Estudo da água subterrânea.</Text>
                <Text style={styles.TextTextoList}> Geologia ambiental: Avaliação de impactos ambientais e recuperação de áreas degradadas.</Text>
                <Text style={styles.TextTextoList}> Geologia marinha: Estudo dos processos geológicos nos oceanos.</Text>
                <Text style={styles.TextTextoList}> Geologia urbana: Estudo dos processos geológicos em áreas urbanas.</Text>
                <Text style={styles.TextTextoList}> Ensino e pesquisa: Trabalho em universidades e institutos de pesquisa. </Text>
                <Image alignSelf='center' w={120} h={120} source={Logo4} />
            </Box>
            <Box>
                <Box style={styles.boxSubTitulo}>
                    <Text id='graph' style={styles.TextSub}>Gráfico</Text>
                </Box>
                <Image marginBottom={20} alignSelf='center' w={350} h={200} source={grafico1} />
                <Image alignSelf='center' w={350} h={200} source={grafico2} />
            </Box>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
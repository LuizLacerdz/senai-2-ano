// Gabriel / Test
import React from 'react';
import { Text, Box, SafeAreaView, Image, View, ScrollView, Card } from '@gluestack-ui/themed';
// import LogoSesiBranca from '../../../../src/img/sesi-senai-logo-branca.png';
import { StyleSheet } from 'react-native';

export default function AdministracaoScreen({ }) {
  return (

    <SafeAreaView bg={'#EE3135'} h={'100%'}>
      <Box w={'100%'} h={'13%'} justifyContent='center' alignItems='center'>

        <Image
          style={styles.logoADM}
          source={require('../../../../src/img/imgAdm/logoADM1.png')}
        />
        {/* <Image w={'80%'} resizeMode='contain' alt='Logo do SESI/SENAI' source={LogoSesiBranca} /> */}

      </Box>

      <View style={styles.container}>


        <ScrollView style={styles.content}>
          <Image
            style={styles.admImagem}
            source={require('../../../../src/img/imgAdm/admImagem.jpg')}
          />
          <View style={styles.box}>
            <Text style={styles.title}>Sobre o curso de Administração</Text>
            <Text>O curso tem como objetivo geral formar o cidadão e o profissional apto a atuar
              em todas as áreas das Ciências Gerenciais
              e a liderar e organizar novos empreendimentos e negócios,
              contribuindo para a melhoria e o desenvolvimento das organizações existentes.</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Importância</Text>
            <Text>A administração é crucial para o funcionamento eficaz e eficiente de qualquer organização.
              Ela envolve planejar, organizar,dirigir e controlar os recursos para alcançar objetivos organizacionais.
              A administração garante que uma organização use
              seus recursos da melhor forma possível, maximize a produtividade, otimize custos e promova a inovação.
              Em uma economia global, a administração também ajuda as empresas a se adaptarem a mudanças rápidas e a se manterem competitivas.</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Matérias relacionadas com a área de administração</Text>
            <Text>1.Matemática: Para análise de dados e finanças.</Text>
            <Text>2. Geografia: Logística e mercado global.</Text>
            <Text>3.Sociologia: Entendimento de comportamento humano e cultura organizacional.</Text>
            <Text>4.História: Contexto sobre evolução dos negócios.</Text>
            <Text>5.Português: Comunicação eficaz e escrita de relatórios.</Text>
          </View>
          {/* <View style={styles.box2}>
            <Text style={styles.text}>Veja agora um Podcast de uma pessoa que trabalha na área de Administração</Text>
            
          </View> */}
          <View style={styles.box2}>
            <Text style={styles.text2}>Salário médio de um Administrador</Text>
          </View>
          {/* <View style={styles.box}>
            <Image
              style={styles.tabelaSalario}
              source={require('../../../../src/img/imgAdm/ADMM.png')}
            />
          </View> */}
          <Image
            style={styles.tabelaSalario}
            source={require('../../../../src/img/imgAdm/ADMM.png')}
          />
          <View style={styles.box}>
            <Text style={styles.title}>Vocabulario técnico da Administração</Text>
            <Text>Análise SWOT: Fundamental para entender a posição da organização e definir estratégias.

              Planejamento Estratégico: Essencial para direcionar os esforços da empresa a longo prazo.

              Gestão de Projetos: Crucial para garantir a entrega eficiente de iniciativas dentro de prazos e orçamentos.

              KPIs: Importantes para medir o progresso e ajustar estratégias conforme necessário.

              Análise PESTEL: Útil para entender o ambiente externo e adaptar-se a mudanças no mercado.

              TQM: Importante para garantir a qualidade e a satisfação do cliente.</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Áreas da Administração</Text>
            <Text>Administração Geral, Recursos Humanos, Marketing, Finanças, Operações,
              Logística, Empreendedorismo, Gestão Estratégica,
              Gestão de Projetos e Tecnologia da Informação.</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Perspectiva da Administração no futuro</Text>
            <Text>O futuro da administração está sendo moldado por tendências como a transformação digital,
              que utiliza tecnologias como inteligência artificial, automação e big data para otimizar operações e decisões.
              Além disso, a agilidade e a inovação são essenciais, permitindo que as empresas se adaptem rapidamente
              às mudanças e integrem metodologias ágeis nas práticas de gestão.</Text>
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  header: {
    backgroundColor: '#d00000',
    padding: 15,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  box: {
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  box2: {
    backgroundColor: 'red',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 10,
  },
  footerText: {
    color: 'white',
  },
  logoADM: {
    height: 100,
    width: 200,
  },
  admImagem: {
    height: 300,
    width: 800,
  },
  card: {
    color: 'red',
  },
  text: {
    color: 'white',
  },
  text2: {
    textAlign: 'center',
    color: 'white',
  },
  tabelaSalario: {
    width: '110%',
    height: 420,
    marginTop: 10,
  }
});


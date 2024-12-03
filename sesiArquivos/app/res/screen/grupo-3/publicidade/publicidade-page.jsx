import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import audio from '../../../../src/img/audio-removebg-preview.png';
import ReprodutorAudio from '../publicidade/Sounds'
const PublicidadeScreen = () => {
  // const horizontalCards = [
  //   {
  //     title: "",
  //     image: 'https://img.freepik.com/vetores-gratis/ilustracao-de-sql-de-tecnologia-abstrata_23-2149238125.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
  //     description: ""
  //   },
  //   {
  //     title: "Habilidades",
  //     image: 'https://img.freepik.com/vetores-gratis/conceito-de-inovacao-de-design-plano_23-2149163765.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
  //     description: ""
  //   },
  //   {
  //     title: "Ferramentas usadas",
  //     image: 'https://img.freepik.com/vetores-gratis/conceito-de-configuracao-do-site-para-a-pagina-de-destino_23-2148310295.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
  //     description: ""
  //   },
  // ];

  const verticalCards = [
    {
      title: "O que é Publicidade e Propaganda?",
      image: 'https://img.freepik.com/vetores-premium/duas-pessoas-de-pe-uma-ao-lado-da-outra_961875-519737.jpg?ga=GA1.1.187520066.1729855074&semt=ais_hybrid',
      description: [
        "Publicidade e Propaganda é a área que se dedica a criar e disseminar mensagens persuasivas para promover produtos, serviços, ideias ou marcas. O profissional dessa área, o publicitário, utiliza diversas ferramentas e técnicas de comunicação para conectar marcas aos seus públicos-alvo, gerando interesse e desejo de consumo.",
      ]
    },
    {
      title: "O que um publicitário faz:",
      image: 'https://img.freepik.com/vetores-gratis/ilustracao-de-sql-de-design-plano-desenhado-a-mao_23-2149262964.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
      description: [
        "• Cria: Desenvolvem ideias originais para campanhas (slogans, visuais, etc.).",
        "• Planeja: Estratégias de comunicação, análise de mercado e escolha dos canais.",
        "• Atende: Clientes, compreendendo suas necessidades e apresentando soluções.",
        "• Gerencia mídia: Negocia espaços publicitários em diversos veículos.",
        "• Pesquisa: Entende o comportamento do consumidor e avalia a eficácia das campanhas.",
        "•Marketing digital: Cria e gerencia campanhas em mídias digitais (redes sociais, etc.).",
      ]
    },
    {
      title: "Habilidades essenciais:",
      image: 'https://img.freepik.com/vetores-gratis/pessoas-minusculas-gerente-de-marketing-com-megafone-e-publicidade-push-publicidade-push-estrategia-de-marketing-tradicional-ilustracao-do-conceito-de-marketing-de-interrupcao_335657-2571.jpg?ga=GA1.1.187520066.1729855074&semt=ais_hybrid',
      description: [
        "• Criatividade: Para gerar ideias inovadoras.",
        "• Comunicação: Para se expressar de forma clara e persuasiva.",
        "• Trabalho em equipe: Para trabalhar em conjunto com outros profissionais.",
        "• Adaptabilidade: Para se adaptar às constantes mudanças do mercado.",
        "•Curiosidade: Para conhecer as últimas tendências do mercado.",
      ]
    },
    {
      title: "Áreas de atuação::",
      image: 'https://img.freepik.com/vetores-premium/uma-ilustracao-colorida-mostrando-varios-simbolos-de-sucesso-e-realizacao-incluindo-um-bone-de-formatura-um-trofeu-livros-uma-lampada-um-globo-e-um-smartphone_520881-8071.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
      description: [
        "• Agências de publicidade: Desenvolvem campanhas completas.",
        "• Marketing: Trabalham em empresas, desenvolvendo estratégias de marketing.",
        "• Mídia: Gerenciam mídias sociais e criam conteúdo..",
        "• Produção audiovisual: Criam vídeos publicitários e filmes institucionais.",
        "• Design: Criam identidades visuais, logos, etc.",
      ]
    },
    {
      title: "Matériais relacionados com Publicidade e Propaganda",
      image: 'https://img.freepik.com/vetores-premium/ilustracao-de-marketing-digital-e-engajamento-em-midias-sociais_9975-87362.jpg?ga=GA1.1.187520066.1729855074&semt=ais_hybrid',
      description: [
        "• Ciências Humanas: Psicologia, Sociologia, Antropologia, Semiótica e Linguística",
        "• Ciências Exatas: Estatística e Matemática",
        "• Artes: Design, Direção de Arte, Fotografia e Audiovisual",
        "• Ciências da Comunicação: Jornalismo e Relações Públicas",
        "• Língua portuguesa: A língua portuguesa é a ferramenta central da publicidade e da propaganda.",
      ]
    },
  ];

  const verticalCardsButton = [
    {
      title: "O que é Publicidade e Propaganda?",
      image: 'https://img.freepik.com/vetores-premium/duas-pessoas-de-pe-uma-ao-lado-da-outra_961875-519737.jpg?ga=GA1.1.187520066.1729855074&semt=ais_hybrid',
      description: [
        "Publicidade e Propaganda é a área que se dedica a criar e disseminar mensagens persuasivas para promover produtos, serviços, ideias ou marcas. O profissional dessa área, o publicitário, utiliza diversas ferramentas e técnicas de comunicação para conectar marcas aos seus públicos-alvo, gerando interesse e desejo de consumo.",
      ]
    },


  ];

  return (
    <View style={styles.container}>
    
      <Text style={styles.header}>Publicidade e Propaganda</Text>

      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {horizontalCards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.image} />
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>
          </View>
        ))}
      </ScrollView> */}
      <View style={{ backgroundColor: '#ffff', borderRadius: 20 }}>
        <Text style={{ color: 'black', alignItems: "center", marginLeft: 110, fontSize: 18 }}>Ouça nosso PodCast</Text>
        <Image
          source={audio}
          style={{ alignItems: 'center', marginLeft: 20, width: 350, height: 50, marginTop: 10 }}
        />
        <ReprodutorAudio />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.verticalScroll}
      >
        {verticalCards.map((card, index) => (
          <View key={index} style={styles.verticalCard}>
            <Image source={{ uri: card.image }} style={styles.verticalImage} />
            <Text style={styles.verticalTitle}>{card.title}</Text>
            <View style={styles.verticalDescription}>
              {card.description.map((item, idx) => (
                <Text key={idx} style={styles.bulletPoint}>{item}</Text>
              ))}

            </View>

          </View>
        ))}
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e84646',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'white'
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  verticalScroll: {
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 160,
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: '#555',
  },
  verticalCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  verticalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  verticalTitle: {
    fontSize: 18,
    color: '#797878',
    fontWeight: 'bold',
    marginTop: 5,
  },
  verticalDescription: {
    marginTop: 10,
    gap: 8,

  },
  bulletPoint: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
    position: 'relative',
    paddingLeft: 15,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    paddingLeft: 15,
    textIndent: -10,
  },
  footer: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default PublicidadeScreen;
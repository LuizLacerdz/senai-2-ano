import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Button } from 'react-native';

const DatabaseScreen = () => {
  const horizontalCards = [
    {
      title: "",
      image: 'https://img.freepik.com/vetores-gratis/ilustracao-de-sql-de-tecnologia-abstrata_23-2149238125.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
      description: ""
    },
    {
      title: "Habilidades",
      image: 'https://img.freepik.com/vetores-gratis/conceito-de-inovacao-de-design-plano_23-2149163765.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
      description: ""
    },
    {
      title: "Ferramentas usadas",
      image: 'https://img.freepik.com/vetores-gratis/conceito-de-configuracao-do-site-para-a-pagina-de-destino_23-2148310295.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
      description: ""
    },
  ];

  const verticalCards = [
    {
      title: "O que é um DBA?",
      image: 'https://img.freepik.com/vetores-gratis/ilustracao-de-intranet-gradiente_23-2149368727.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
      description: [
        "O administrador de banco de dados é aquele que desenvolve, realiza as manutenções e monitora o banco de dados de uma organização. Além disso, esse profissional conduz a instalação, reparos e analisa a estrutura do sistema.",
      ]
    },
    {
      title: "Como é o mercado de trabalho?",
      image: 'https://img.freepik.com/vetores-gratis/ilustracao-de-sql-de-design-plano-desenhado-a-mao_23-2149262964.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
      description: [
        "Por conta do avanço da tecnologia e da necessidade de programas de sistemas de banco de dados, como o MySQL, o mercado está ampliado.",
        "A oferta é alta.",
      ]
    },
    {
      title: "Habilidades Necessárias:",
      image: 'https://img.freepik.com/vetores-premium/homens-com-o-conceito-de-organizacao-do-projeto-organizacao-do-processo-eficaz-no-escritorio-trabalho-em-equipe-e-parceria-colaboracao-e-cooperacao-pessoas-com-quebra-cabecas-ilustracao-vetorial-plana-dos-desenhos-animados_118813-15909.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
      description: [
        "• Conhecimento Técnico",
        "• Linguagens de Programação",
        "• Habilidades de Resolução de Problemas",
        "• Segurança e Backup",
        "• Comunicação",
      ]
    },
    {
      title: "Matérias relacionadas com dba:",
      image: 'https://img.freepik.com/vetores-premium/uma-ilustracao-colorida-mostrando-varios-simbolos-de-sucesso-e-realizacao-incluindo-um-bone-de-formatura-um-trofeu-livros-uma-lampada-um-globo-e-um-smartphone_520881-8071.jpg?ga=GA1.1.1860229980.1727432431&semt=ais_hybrid',
      description: [
        "• Matemática",
        "• Inglês",
      ]
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>DBA</Text>

      <ScrollView 
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
      </ScrollView>

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
    backgroundColor: '#f55252',
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
    color:'#797878',
    fontWeight: 'bold',
    marginTop: 5,
  },
  verticalDescription: {
    marginTop: 10,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
    position: 'relative',
    paddingLeft: 15,
  },
  bulletPoint: {
    fontSize: 14,
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

export default DatabaseScreen;
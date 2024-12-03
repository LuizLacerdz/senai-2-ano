import { Text, Box, SafeAreaView, HStack, Image, Pressable } from '@gluestack-ui/themed';
import Svg, { Path } from 'react-native-svg';
import { Dimensions, Linking, ScrollView, View, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit'; 

import colher from '../../../../src/img/pedreiro/colherdepedreiro.png';
import prumo from '../../../../src/img/pedreiro/prumo.png';
import nivel from '../../../../src/img/pedreiro/nivel.png';
import pa from '../../../../src/img/pedreiro/pa.png';

const tools = [
  { name: "Colher de Pedreiro", image: colher },
  { name: "Prumo", image: prumo },
  { name: "Nível", image: nivel },
  { name: "Pá", image: pa },
];

const safetyTips = [
  "Use sempre equipamentos de proteção individual (EPIs).",
  "Mantenha o local de trabalho limpo e organizado.",
  "Verifique as condições climáticas antes de iniciar o trabalho.",
  "Utilize ferramentas adequadas para cada tipo de tarefa."
];

const FAQ = [
  { question: "Qual é a importância de usar EPIs?", answer: "Os EPIs são essenciais para proteger o trabalhador de acidentes." },
  { question: "Quais são as principais habilidades de um pedreiro?", answer: "É importante ter habilidades em leitura de projetos, conhecimento de materiais e técnicas de construção." },
];

const courses = [
  {
    title: "Curso de Pedreiro",
    description: "Aprenda as técnicas de alvenaria, leitura de projetos e uso de ferramentas.",
    url: 'https://matricula.anhanguera.com/curso-tecnico/tecnico-em-edificacoes/?utm_source=google&utm_medium=search&utm_campaign=rv_midia&utm_camp=20987985502&utm_adset=158406336676&utm_ad=689403608556&sellerId=7a9f9437-5d37-4dee-ace7-f8df61714f7d&utm_term=tecnico%20de%20edifica%C3%A7%C3%B5es&utm_campaign=%5BS%5D+Institucional+-+Exata&utm_source=adwords&utm_medium=ppc&hsa_acc=9132551823&hsa_cam=20987985502&hsa_grp=158406336676&hsa_ad=689403608556&hsa_src=g&hsa_tgt=kwd-10678906919&hsa_kw=tecnico%20de%20edifica%C3%A7%C3%B5es&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwmt24BhDPARIsAJFYKk0qPaW68cY7tsJEGOt8sYMnpnE-YvbJ3L9OVA7DyGTJwJyHLiDm9y8aApnuEALw_wcB',
  },
  {
    title: "Curso de Eletricista",
    description: "Fundamentos de eletricidade, instalação de sistemas elétricos e segurança.",
    url: 'https://www.sp.senai.br/curso/eletricista-instalador/96362',
  },
  {
    title: "Curso de Aprendizagem em Construção Civil",
    description: "Abrange diversos tópicos relacionados à construção civil, incluindo segurança e técnicas de construção.",
    url: 'https://www.sp.senai.br/cursos/0/construcao-civil-e-design-de-mobiliario',
  },
  {
    title: "Curso de Reformas e acabamentos",
    description: "Ensina técnicas específicas para realizar reformas e acabamentos em edificações.",
    url: 'https://www.institutodaconstrucao.com.br/cursos/reparos-e-reformas/',
  },
  {
    title: "Construtor de Alvenaria",
    description: "Execução de alvenarias em edificações, com ou sem função estrutural, seguindo normas técnicas e de segurança.",
    url: 'https://www.sp.senai.br/curso/construtor-de-alvenaria/87552',
  },
  {
    title: "Desenho Técnico",
    description: "Aprendizado sobre leitura e interpretação de projetos e desenhos técnicos.",
    url: 'https://www.sp.senai.br/curso/leitura-e-interpretacao-de-desenho-tecnico-mecanico/91232',
  },
];

const CourseCard = ({ course }) => (
  <Pressable 
    bg='#f9f9f9' 
    p={10} 
    m={2} 
    borderRadius={15} 
    alignItems='center' 
    width='45%' 
    borderColor="#ddd" 
    borderWidth={1}
    style={styles.card}
    onPress={() => { Linking.openURL(course.url)}}
  >
    <Text textAlign='center' fontWeight='bold' color='#333' fontSize={20} mt={2}>{course.title}</Text>
    <Text textAlign='center' color='#666' style={styles.courseDescription}>{course.description}</Text>
  </Pressable>
);

export default function PedreiroScreen({ navigation: { goBack } }) {
  const carouselRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const carImages = [
    require('../../../../src/img/pedreiro/slider1.jpg'), 
    require('../../../../src/img/pedreiro/slider2.jpg'), 
    require('../../../../src/img/pedreiro/slider3.jpg'), 
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [carImages.length]);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); 
  };
  
  const pieData = [
    {
      name: 'Obras Viárias',
      population: 111,
      color: '#00ff00',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Instalações',
      population: 90,
      color: '#0000ff',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Construção',
      population: 80,
      color: '#ffff00',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Obras de Artes',
      population: 70,
      color: '#ff00ff',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Edificações',
      population: 60,
      color: '#00ffff',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Acabamentos',
      population: 40,
      color: '#ff8000',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
  ];

  return (
    <SafeAreaView flex={1} bg='#fff'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box bg='red' h={130} justifyContent='center' alignItems='center'> 
          <Text color='#fff' fontWeight='bold' fontSize={35}>Pedreiro</Text>
        </Box>

        <Svg height={89} width={Dimensions.get('screen').width} viewBox='0 0 1440 311.9'>
          <Path fill='red' d="M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,234.7C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </Svg>

        <Box bg='#fff' w='90%' h={150} p={10} borderRadius={10} shadow={2}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>O que faz?</Text>
          <Text color='#424242'>Realiza trabalhos de alvenaria, concreto e outros materiais guiando-se por desenhos, esquemas e especificações. Utiliza projetos e instrumentos para construir, reformar ou reparar as construções.</Text>
        </Box>

        <Box bg='#fff' w='100%' p={10} borderRadius={10} shadow={2} mb={10}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>Ferramentas Comuns</Text>
          <HStack flexWrap='wrap'>
            {tools.map(tool => (
              <Box key={tool.name} bg='#f0f0f0' p={5} m={2} borderRadius={10} alignItems='center' width='40%' shadow={1} borderColor="#ddd" borderWidth={1}>
                <Image source={tool.image} alt={tool.name} style={{ width: 60, height: 60 }} />
                <Text textAlign='center' color='black' fontWeight='bold'>{tool.name}</Text>
              </Box>
            ))}
          </HStack>
        </Box>

        <Box bg='#fff' w='100%' p={10} borderRadius={10} shadow={2}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>Dicas de Segurança</Text>
          {safetyTips.map((tip, index) => (
            <Text key={index} color='#424242'>• {tip}</Text>
          ))}
        </Box>

        <Box name="accordion" bg='#fff' w='100%' p={10} borderRadius={10} shadow={2} mb={20}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>FAQ</Text>
          {FAQ.map((item, index) => (
            <View key={index} mb={5}>
              <Pressable 
                onPress={() => toggleAccordion(index)} 
                style={({ pressed }) => [
                  styles.accordionButton, 
                  pressed ? styles.pressed : null
                ]}
              >
                <Text style={styles.questionText}>{item.question}</Text>
                <Text style={expandedIndex === index ? styles.arrowUp : styles.arrowDown}>▼</Text>
              </Pressable>
              {expandedIndex === index && (
                <Text style={styles.answerText}>{item.answer}</Text>
              )}
            </View>
          ))}
        </Box>
       
        <Box name="secondBlock" bg='red' w={'100%'}>
          <Box style={styles.carouselContainer}>
            <Carousel
              ref={carouselRef}
              data={carImages}
              renderItem={({ item }) => (
                <Image
                  w={'100%'}
                  h={200}
                  source={item} 
                  alt="Carrossel imagem"
                  resizeMode="cover"
                />
              )}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              layout={"default"}
              inactiveSlideScale={0.9} 
              inactiveSlideOpacity={0.7} 
              firstItem={activeIndex}
            />
          </Box>
          
          <Box justifyContent='center' alignItems='center' mt={10}>
            <Text color='white' fontWeight='bold' fontSize={30}>Na física</Text>
          </Box>

          <Box name='Mercado de trabalho' alignItems='left' justifyContent='center' >
          <Text p={15} color='#fff' >
             Mecânica: Ao usar alavancas para mover objetos pesados ou garantir o equilíbrio de uma parede, 
             o pedreiro está aplicando princípios da mecânica.
            </Text>
            <Text p={15} color='#fff'>
              Hidráulica: O uso de bombas d'água nas construções é um exemplo claro da aplicação da hidráulica.
            </Text>
            <Text p={15} color='#fff'>
              Termologia: A dilatação térmica dos materiais, como o concreto, é um fator importante a ser considerado para evitar rachaduras.
              </Text>
              <Text p={15} color='#fff'>
              Eletricidade: O uso de ferramentas elétricas é essencial na construção e exige conhecimento básico de eletricidade.
            </Text>
           
              


          </Box>
          
          <Box name='grafico' justifyContent='center' alignItems='center' mt={10} style={styles.chartContainer}>
            <Text color='white' fontWeight='bold' fontSize={25} m={10}>Áreas de Maior Crescimento na Construção Civil em 2023</Text>
            <View style={styles.pieChartContainer}>
              <PieChart
                data={pieData}
                width={Dimensions.get('window').width - 30} 
                height={230}
                chartConfig={{
                  backgroundColor: "#ffffff",
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#ffffff",
                  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                accessor="population" 
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>
          </Box>

          <Box justifyContent='center' alignItems='center' mt={10}>
            <Text color='white' fontWeight='bold' fontSize={30}>Cursos Relacionados</Text>
          </Box>

          <Box flexDirection="row" flexWrap="wrap" justifyContent="space-around" p={10}>
            {courses.map(course => (
              <CourseCard key={course.title} course={course}/>
            ))}
          </Box>
          
          <Box name='matérias relacionadas' justifyContent='center' alignItems='center' mt={10}>
            <Text color='white' fontWeight='bold' fontSize={30}>Relação na Química</Text>

            <Text color='white' fontSize={16} p={10}>
            A profissão de pedreiro envolve a aplicação de princípios químicos para garantir a qualidade e 
            durabilidade das estruturas. A interação química entre cimento, água e agregados é essencial para a 
            resistência. A escolha correta de materiais como argamassa, tintas e revestimentos é crucial, assim 
            como a adição de aditivos para melhorar as propriedades do concreto e argamassa.
            </Text>
            
            
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9', 
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  carouselContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.50,
    shadowRadius: 10,
    elevation: 10,
    overflow: 'hidden',
  },
  accordionButton: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 5,
    transition: 'background-color 0.3s ease',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressed: {
    backgroundColor: '#e8e8e8',
  },
  questionText: {
    padding: 10,
    width: 270,
    backgroundColor:'#e8e8e8',   
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    paddingRight: 10,
  },
  answerText: {
    marginBottom: 20,
    color: '#424242',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderLeftWidth: 2,
    borderLeftColor: 'red',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  arrowDown: {
    fontSize: 16,
    color: '#666',
  },
  arrowUp: {
    fontSize: 16,
    color: '#666',
  },
  courseDescription: {
    color: '#555', 
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  chartContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  
});
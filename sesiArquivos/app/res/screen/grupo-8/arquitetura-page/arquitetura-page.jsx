import { Text, Box, SafeAreaView, HStack, Image, Pressable } from '@gluestack-ui/themed';
import Svg, { Path } from 'react-native-svg';
import { Dimensions, ScrollView, View, image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import autocad from'../../../../src/img/pedreiro/autocaad.jpg';
import archicad from'../../../../src/img/pedreiro/archicad.jpg';
import revit from'../../../../src/img/pedreiro/revit.jpg';
import sketchUp from'../../../../src/img/pedreiro/sketchup.jpg';
import graduacao from'../../../../src/img/pedreiro/graduacao.jpg';
import cau from'../../../../src/img/pedreiro/cau.jpg';

const safetyTips = [
  "Projetos residenciais: Casas, apartamentos, condomínios.",
  "Projetos comerciais: Escritórios, lojas, shoppings, hotéis.",
  "Projetos institucionais: Escolas, hospitais, museus, bibliotecas.",
  "Urbanismo: Planejamento e desenvolvimento de cidades.",
  "Restauração: Preservação e recuperação de edificações históricas.",
  "Paisagismo: Projeto de áreas verdes e espaços exteriores.",
];

const softwareCard = [
  {
    title: "Autocad",
    description: "Permite criar desenhos e modelos precisos, como plantas baixas, fachadas, cortes e desenhos isométricos",
    image: autocad,
  },
  {
    title: "Archicad",
    description: "Software popular  que permite trabalhar com modelos 3D e criar desenhos com detalhes ",
    image: archicad,
  },
  {
    title: "Revit",
    description: "Software da Autodesk que permite desenvolver projetos e documentos relacionados à construção civil ",
    image: revit,
  },
  {
    title: "SketchUp",
    description: "SketchUp é ideal para modelagem 3D rápida e fácil, sendo amplamente utilizado por arquitetos",
    image: sketchUp,
  },
  
];

const courseCard = [
  {
    title: "Graduação em Arquitetura e Urbanismo",
    description: "Um curso superior de longa duração, que aborda todas as áreas da profissão.",
    image: graduacao,
  },
  {
    title: "Registro no Conselho de Arquitetura e Urbanismo (CAU)",
    description: "Após a graduação, é preciso obter o registro profissional para exercer a atividade.",
    image: cau,
  },
 
  
];

const CourseCard = ({ course }) => (
  <Box
    bg='#f9f9f9'
    p={10}
    m={2}
    borderRadius={15}
    alignItems='center'
    width='45%'
    borderColor="#ddd"
    borderWidth={1}
    style={styles.card}
  >
    <Image
      source={course.image} // A imagem é passada aqui
      alt={course.title}
      style={styles.cardImage} // Adicionando o estilo da imagem
    />
    <Text textAlign='center' fontWeight='bold' color='#333' fontSize={20} mt={2}>{course.title}</Text>
    <Text textAlign='center' color='#666' style={styles.courseDescription}>{course.description}</Text>
  </Box>
);

export default function ArquiteturaScreen() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
 
  const carImages = [
    require('../../../../src/img/pedreiro/arquitetura1.jpg'),
    require('../../../../src/img/pedreiro/arquitetura2.jpg'),
    require('../../../../src/img/pedreiro/arquitetura3.jpg'),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [carImages.length]);

  return (
    <SafeAreaView flex={1} bg='#fff'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box bg='red' h={130} justifyContent='center' alignItems='center'>
          <Text color='#fff' fontWeight='bold' fontSize={35}>Arquitetura</Text>
        </Box>

        <Svg height={89} width={Dimensions.get('screen').width} viewBox='0 0 1440 311.9'>
          <Path fill='red' d="M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,234.7C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </Svg>

        <Box bg='#fff' w='90%' h={150} p={10} borderRadius={10} shadow={2}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>O que faz?</Text>
          <Text color='#424242'>Arquitetura é a arte e técnica de projetar uma edificação ou um ambiente de uma construção. É o processo artístico e técnico que envolve a elaboração de espaços organizados e criativos para abrigar diferentes tipos de atividades humanas.</Text>
        </Box>

        <Box bg='#fff' w='100%' p={10} borderRadius={10} shadow={2} mb={10}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>Softwares de arquitetura</Text>
          <Box flexDirection="row" flexWrap="wrap" justifyContent="space-around" p={10}>
            {softwareCard.map(course => (
              <CourseCard key={course.title} course={course} />
            ))}
          </Box>
        </Box>

        <Box bg='#fff' w='100%' p={10} borderRadius={10} shadow={2}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>Áreas de atuação</Text>
          {safetyTips.map((tip, index) => (
            <Text key={index} color='#424242'>• {tip}</Text>
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
            <Text color='white' fontWeight='bold' fontSize={28}>Para se tornar um arquiteto, é necessário:</Text>
          </Box>

          <Box flexDirection="row" flexWrap="wrap" justifyContent="space-around" p={10}>
            {courseCard.map(course => (
              <CourseCard key={course.title} course={course} />
            ))}
          </Box>
        </Box>
        <Box name='materias relacionadas' justifyContent='center' alignItems='center' mt={10}>
            <Text color='black' fontWeight='bold' fontSize={29}>A Matemática na Prática da Arquitetura</Text>

            <Text color='black' fontSize={16} p={10}>
            • Cálculos estruturais: A resistência de materiais, a distribuição de cargas e o
            dimensionamento de elementos estruturais dependem de cálculos matemáticos
            complexos. A estática e a resistência dos materiais são áreas da física que
            utilizam conceitos matemáticos avançados.            
            </Text>
            <Text color='black' fontSize={16} textAlign='left' p={10}>
            • Geometria: A geometria é fundamental para a criação de formas e proporções
            harmoniosas. Desde os primórdios da arquitetura, os arquitetos utilizam a
            geometria para projetar edifícios simétricos e equilibrados.
            </Text>
            <Text color='black' fontSize={16} textAlign='left' p={10}>
            • Cálculo de áreas e volumes: A determinação das áreas de paredes, pisos e
            tetos, assim como o cálculo de volumes de espaços internos, são essenciais
            para a estimativa de materiais e custos.
            </Text>
          </Box>
          <Box name='materias relacionadas' justifyContent='center' alignItems='center' mt={10}>
            <Text color='black' fontWeight='bold' fontSize={29}>A Importância da Matemática para o Arquiteto</Text>
          </Box>
          <Text color='black' fontSize={16} textAlign='left' p={10}>
            Um bom arquiteto precisa ter uma sólida base em matemática para:
          </Text>
          <Text color='black' fontSize={16} textAlign='left' p={10}>
            • Projetar estruturas seguras e eficientes: A segurança das pessoas é a
            principal preocupação de um arquiteto.
          </Text>
          <Text color='black' fontSize={16} textAlign='left' p={10}>
            • Criar espaços funcionais e agradáveis: A matemática permite otimizar o uso
            do espaço e criar ambientes harmoniosos.
          </Text>
          <Text color='black' fontSize={16} textAlign='left' p={10}>
            • Inovar e desenvolver novas soluções: O conhecimento matemático é
            fundamental para a pesquisa e o desenvolvimento de novas tecnologias e
            materiais.
          </Text>
          <Image source={require('../../../../src/img/pedreiro/Piso-Salarial-Arquiteto.png')} w={'100%'} h={460}/>
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
  cardImage: {
    width: '100%', // Ajuste a largura conforme necessário
    height: 100, // Defina uma altura para a imagem
    borderRadius: 10, // Bordas arredondadas
    marginBottom: 10, // Espaço abaixo da imagem
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
  courseDescription: {
    color: '#555',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});

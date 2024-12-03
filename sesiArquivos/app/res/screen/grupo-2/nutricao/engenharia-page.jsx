// Gabriel / Test
import { Text, Box, SafeAreaView, Image, ImageBackground, HStack, FlatList } from '@gluestack-ui/themed';
import React, {useEffect, useState} from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import imagemFundo from '../../../../src/img/imagemFundo-nutricao-removebg-preview.png'
import imagem1 from '../../../../src/img/img-Engenharia/Imagem1.png'
import imagem2 from '../../../../src/img/img-Engenharia/Imagem2.png'
import imagem3 from '../../../../src/img/img-Engenharia/Imagem3.png'
import imagem4 from '../../../../src/img/img-Engenharia/Imagem4.png'
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
export default function EngenhariaScreen({ }) {

  const { width: screenWidth } = Dimensions.get('window');
    
    

  const cards = [
    {
        id: 1,
        image: require("../../../../src/img/img-Engenharia/Imagem5.png"),
        title: "Ponte Golden Gate",
        area: "A ponte Golden Gate, localizada na entrada da baía de São Francisco (EUA), é considerada um marco na construção de pontes pênseis. Concluída em 1937, com o maior vão até então atingido, 1.280 m, a ponte manteve o título de a mais longa do mundo até 1964, ano em que foi inaugurada a ponte Verrazano Narrows (NY), com  1.298 m de vão.",
        height: 310
        
    },
    {
        id: 2,
        image: require("../../../../src/img/img-Engenharia/Imagem6.png"),
        title: "Prédio Empire State",
        area: "O Empire State Building (ou Edifício Empire State) é um arranha-céu localizado na 5th Avenue (Quinta Avenida) de Nova Iorque, Estados Unidos da América 40° 44 53' N - 73° 59' 9 W. Este edifício foi concebido pelo arquiteto William Lamb. O prédio foi construído em apenas catorze meses e inaugurado no dia 1 de maio de 1931. Mede 381 metros de altura e tem 102 andares. E era na época da sua construção o maior edifício do mundo. Foi a estrutura mais alta do mundo até a construção do World Trade Center, em Nova Iorque, e da Sears Tower, em Chicago (ambas atingindo sua altura máxima em 1973).",
        height: 410
        
    },
    {
        id: 3,
        image: require("../../../../src/img/img-Engenharia/Imagem7.png"),
        title: "Torre de Canadian National",
        area: "O Canadian National Tower foi construído com o propósito de melhorar os sinais de canais de televisão, conseqüentemente, as imagens mostradas aos telespectadores. Hoje em dia ela representa muito mais que isso, é o símbolo de Toronto, a maior estrutura auto-portante do mundo e é visitada por mais de 2 milhões de pessoas por ano. A torre foi construída pela Companhia Canadense de estrada de ferro(Canadian National Raiways) e custou aproximadamente US$57 milhões.",
        height: 410
        
    },
    {
        id: 4,
        image: require("../../../../src/img/img-Engenharia/Imagem9.png"),
        title: "Burj Khalifa",
        area: "O edifício mais alto já construído no mundo faz parte do complexo comercial chamado de Downtown Burj Dubai e demorou cerca de seis anos para ser erguido ao custo de US$ 1,5 bilhão.",
        height: 250
        
    },
    
    
]

const MyCarousel = ({ data }) => {
const renderItem = ({ item, color }) => (
    <View style ={{width:500, height:140, borderRadius:25,alignSelf:"center", padding:30,alignItems:"center",gap:15, marginTop: 20}}>
        <View style={{ marginTop: 15, justifyContent:"center", alignItems:"center", borderRadius:10,}}>
                <Image alt='job-image' source={item.image} style={{width: 400, height:200, borderRadius:25,}}/>
        </View>
        <View style={{flexDirection:"column", backgroundColor: '#FF8989', width: 400, height: item.height, gap:5, marginTop: -40, zIndex:-1, borderRadius: 20,}}>
            <Text style={{color:"#EE2D32", fontWeight:"800",fontSize:34, marginTop: 70, alignSelf: 'center'}}>{item.title}</Text>
            <Text style={{color:"white", fontWeight:"600", width: '90%', alignSelf: 'center'}}>{item.area}</Text>
           
        </View>
    </View>
);

return (
    <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        layoutCardOffset={`300`}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={3000}
        loop={true}
    />
);
};


 
  return (
    <SafeAreaView flex={1}>
      <ScrollView>
        <Box>
     
     <ImageBackground alignItems='center' w={'100%'} h={430} source={imagemFundo}>
        <Text marginTop={80} color={'red'} fontWeight={'$extrabold'} fontSize={46}>ENGENHARIA</Text>
     </ImageBackground>

     <Box alignItems='center'  w={'100%'} h={3100} bg={'red'}>

     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
     Quais são os conceitos básicos da engenharia?
    </Animatable.Text>
    
    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 5 }}>
    A engenharia é o campo que aplica princípios científicos, sociais e práticos para planejar, projetar, construir e aprimorar estruturas e sistemas. Envolve desde a concepção de máquinas e dispositivos até a manutenção e otimização de processos industriais e infraestrutura.
     </Animatable.Text>

     <Box mt={10} w={'100%'} justifyContent='center' marginLeft={0} flexDirection='row'>
     <Image alt='imagemNutri'  alignSelf='flex-start' w={150} h={160}  source={imagem1}/>
      <Image alt='imagemNutri' alignSelf='flex-end' marginLeft={30} w={170} h={160}  source={imagem2}/>
     </Box>
  
     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
     Engenharia: Construindo o Futuro, Transformando o Mundo:
    </Animatable.Text>
    
    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 5 }}>
    A engenharia é a arte de transformar ideias em realidade, de solucionar problemas
    complexos e de construir um mundo melhor para todos. Se você busca uma profissão
    desafiadora, com um propósito maior e a oportunidade de fazer a diferença, a engenharia
    pode ser o caminho ideal.
     </Animatable.Text>


     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
     Onde podemos encontrar os serviços da engenharia?
    </Animatable.Text>
    
    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 5 }}>
    A engenharia tem um papel essencial em diversos aspectos da vida moderna, contribuindo para o desenvolvimento e transformação da sociedade. Engenheiros aplicam princípios científicos e tecnológicos para resolver problemas complexos e criar soluções inovadoras em diferentes setores e áreas. Conforme mencionado por Gisele Regina Hwang, especialista em engenharia na Vale, os engenheiros têm a capacidade de atuar em campos variados de acordo com sua especialização, interesses e habilidades. Desde a construção de infraestrutura essencial até o desenvolvimento de avanços tecnológicos, os engenheiros são fundamentais para impulsionar o progresso e o bem-estar da sociedade. Além disso, eles podem desempenhar funções de gestão, administração, logística, meio ambiente e outras áreas relacionadas, mostrando versatilidade e abrangência em suas atuações.
     </Animatable.Text>
   


     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
     Aplicação da física
    </Animatable.Text>
    
    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 5 }}>
    A física é o alicerce fundamental da engenharia, fornecendo os princípios e leis que governam o mundo natural. Para engenheiros, dominar os conceitos físicos é crucial para projetar, construir e otimizar sistemas e estruturas eficientes e inovadores.
     </Animatable.Text>

     <Box mt={10} w={'100%'} justifyContent='center' alignItems='center' marginLeft={0} flexDirection='row'>
     <Image alt='imagemNutri'  alignSelf='flex-start' w={210} h={210}  source={imagem3}/>
     </Box>

     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
     Por que escolher a Engenharia?
    </Animatable.Text>
    
    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 5 }}>
    A engenharia oferece uma série de benefícios que vão além de uma remuneração
    atrativa:
     </Animatable.Text>


     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 1 }}>
     Impacto:
    </Animatable.Text>
    
    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 0 }}>
    Engenheiros são agentes de transformação, construindo um mundo mais
    sustentável e tecnológico. Ao desenvolver soluções para problemas como a mudança
    climática, a escassez de recursos naturais e a desigualdade social, os engenheiros
    deixam um legado duradouro.

     </Animatable.Text>


     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 1 }}>
     Diversidade:
    </Animatable.Text>
    
    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 0 }}>
    A área oferece uma ampla gama de especializações, desde a
construção civil até a biotecnologia, permitindo que você encontre a área que mais se
alinha aos seus interesses e paixões. Seja construindo cidades inteligentes,
desenvolvendo novos materiais para a medicina ou explorando o espaço, as
possibilidades são infinitas.


     </Animatable.Text>

     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 1 }}>
     Desafios:
    </Animatable.Text>
    
    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 0 }}>
    A profissão exige criatividade, resolução de problemas, pensamento
    crítico e a capacidade de trabalhar em equipe, proporcionando um ambiente de trabalho
    dinâmico e estimulante. Você estará constantemente desafiado a encontrar soluções
    inovadoras para problemas complexos, o que contribui para o seu desenvolvimento
    pessoal e profissional.


     </Animatable.Text>

     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 1 }}>
     Mercado de trabalho:
    </Animatable.Text>
    
    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 0 }}>
    A demanda por engenheiros qualificados é constante e 
    crescente em diversos setores da economia, garantindo um futuro promissor e diversas
    oportunidades de carreira. As empresas buscam cada vez mais profissionais com
    habilidades técnicas e soft skills para impulsionar seus negócios e se manterem
    competitivas em um mercado globalizado.
     </Animatable.Text>

     <Box mt={5} w={'100%'} justifyContent='center' alignItems='center' marginLeft={0} flexDirection='row'>
     <Image alt='imagemNutri'  alignSelf='flex-start' w={300} h={300}  source={imagem4}/>
     </Box>
   
     <Animatable.Text animation='slideInLeft' style={{color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 1 }}>
     OBRAS DA ENGENHARIA:
    </Animatable.Text>

    <MyCarousel data={cards} />
     </Box>
     </Box>
    
      </ScrollView>
     
    </SafeAreaView>
  );
}

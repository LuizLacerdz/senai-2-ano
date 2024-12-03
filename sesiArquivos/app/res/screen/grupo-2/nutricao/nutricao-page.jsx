// Gabriel / Test
import { Text, Box, SafeAreaView, Image, ImageBackground, HStack, FlatList } from '@gluestack-ui/themed';
import React, {useEffect, useState} from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import imagemFundo from '../../../../src/img/imagemFundo-nutricao-removebg-preview.png' 
import imagem1 from '../../../../src/img/img-nutricao/image1.png'
import imagem2 from '../../../../src/img/img-nutricao/image2.png'
import imagem3 from '../../../../src/img/img-nutricao/Imagem3.png'
import imagem4 from '../../../../src/img/img-nutricao/Imagem4.png'
import imagem5 from '../../../../src/img/img-nutricao/Imagem5.png'
import imagem6 from '../../../../src/img/img-nutricao/Imagem6.png'
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
export default function NutricaoScreen({ }) {

  const { width: screenWidth } = Dimensions.get('window');
    const cards = [
        {
            id: 1,
            image: require("../../../../src/img/img-nutricao/pratoCarne.png"),
            title: "Carne",
            area: "A carne é uma fonte de proteína, ferro e zinco. A proteína é essencial para a construção e manutenção dos músculos. O ferro é importante para a produção de hemoglobina, que transporta oxigênio para as células do corpo. O zinco é importante para o sistema imunológico.",
            height: 310
            
        },
        {
            id: 2,
            image: require("../../../../src/img/img-nutricao/pratoMilho.png"),
            title: "Milho",
            area: " O milho, além de ser delicioso, é uma verdadeira potência nutricional. Rico em fibras, vitaminas e minerais, ele contribui para uma boa digestão, fornece energia e fortalece o sistema imunológico. Seus antioxidantes protegem as células e o milho é uma ótima opção para uma alimentação equilibrada e saudável.",
            height: 330
        },
        {
            id: 3,
            image: require("../../../../src/img/img-nutricao/pratoFeijao.png"),
            title: "Feijão",
            area: "O feijão é uma fonte de proteína, fibras e ferro. Ele também é rico em vitaminas e minerais, como vitamina B1, vitamina B6 e ácido fólico.",
            height: 250
        },
        {
            id: 4,
            image: require("../../../../src/img/img-nutricao/pratoBatata.png"),
            title: "Batata",
            area: "A batata é uma fonte de carboidratos complexos e gordura. Ela também é rica em potássio e vitamina C",
            height: 230
        },
        
        {
            id: 5,
            image: require("../../../../src/img/img-nutricao/pratoArroz.png"),
            title: "Arroz",
            area: "O arroz é uma fonte de carboidratos complexos, que são uma ótima fonte de energia para o nosso corpo. Ele também é rico em vitaminas e minerais, como vitamina B1, vitamina B6 e ferro.",
            height: 250
        },
        {
            id: 6,
            image: require("../../../../src/img/img-nutricao/pratoVinagrete.png"),
            title: "Vinagrete",
            area: "O vinagrete, além de realçar o sabor da salada, oferece diversos benefícios para a saúde. O azeite, base do vinagrete, é rico em gorduras saudáveis, que ajudam a reduzir o colesterol ruim e protegem o coração. O vinagre, por sua vez, possui propriedades anti-inflamatórias e pode auxiliar no controle dos níveis de açúcar no sangue. As ervas frescas e especiarias utilizadas no preparo do vinagrete adicionam um toque de sabor e são fontes de antioxidantes.",
            height: 380
            
        },
        {
            id: 7,
            image: require("../../../../src/img/img-nutricao/pratoSalada.png"),
            title: "Salada",
            area: "A salada é muito mais do que um acompanhamento saboroso. É um verdadeiro tesouro nutricional, repleto de vitaminas, minerais e fibras essenciais para o bom funcionamento do organismo. As folhas verdes, legumes e frutas que compõem as saladas são ricos em antioxidantes, que combatem os radicais livres e ajudam a prevenir doenças. Além disso, as fibras presentes nas saladas auxiliam na digestão, promovem a saciedade e contribuem para a saúde intestinal.",
            height: 400
            
        },
        
    ]

  const MyCarousel = ({ data }) => {
    const renderItem = ({ item, color }) => (
        <View style ={{width:280, height:140, borderRadius:25,alignSelf:"center", padding:30,alignItems:"center",gap:15, marginTop: 20}}>
            <View style={{ marginTop: 15, justifyContent:"center", alignItems:"center", borderRadius:10,}}>
                    <Image alt='job-image' source={item.image} style={{width:350, height:250,}}/>
            </View>
            <View style={{flexDirection:"column", backgroundColor: '#FF8989', width: 330, height: item.height, gap:5, marginTop: -40, zIndex:-1, borderRadius: 20,}}>
                <Text style={{color:"#EE2D32", fontWeight:"800",fontSize:40, marginTop: 70, alignSelf: 'center'}}>{item.title}</Text>
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
        <Text marginTop={80} color={'red'} fontWeight={'$extrabold'} fontSize={46}>NUTRIÇÃO</Text>
     </ImageBackground>

     <Box alignItems='center'  w={'100%'} h={3250} bg={'red'}>

  
     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
      Quais são as principais Atividades de um Nutricionista Hoje?
    </Animatable.Text>
    
     <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 17, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
     Desvenda os mistérios do seu corpo: 
     </Animatable.Text>
     <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 5 }}>
     Através de uma avaliação completa, o nutricionista entende suas necessidades nutricionais e cria um plano alimentar personalizado
     </Animatable.Text>
     

     <Box mt={10} w={'100%'} justifyContent='center' marginLeft={10} flexDirection='row'>
     <Image alt='imagemNutri'  alignSelf='flex-start' w={180} h={180}  source={imagem1}/>
      <Image alt='imagemNutri' alignSelf='flex-end' marginLeft={30} w={180} h={180}  source={imagem2}/>
     </Box>
     
    
    
     <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 17, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
     Cozinha a saúde:
     </Animatable.Text>
     <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 5 }}>
     Ele elabora cardápios deliciosos e nutritivos, te ensinando a preparar refeições que te fazem bem.
     </Animatable.Text>
     

     <Box w={'100%'} mt={10} justifyContent='center' flexDirection='row'>
     <Image alt='imagemNutri'  alignSelf='flex-start'  w={190} h={140} source={imagem3}/>
      <Image alt='imagemNutri' alignSelf='flex-end' marginleft={20} w={200} h={135} source={imagem4}/>
     </Box>
     
    
     <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 17, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
     É o seu personal trainer da alimentação
     </Animatable.Text>
     <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 5 }}>
     Te acompanha de perto, te motiva e te ajuda a alcançar seus objetivos, seja perder peso, ganhar massa muscular ou  simplesmente ter mais energia.
     </Animatable.Text>

     <Animatable.Text animation='slideInLeft' style={{width: 'auto', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop:20 }}>
      Mercado de trabalho
    </Animatable.Text>

    <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 5 }}>
    O mercado de trabalho para o profissional nutricionista nunca esteve tão aquecido quanto agora. A necessidade de um acompanhamento nutricional ou de uma consulta com um nutricionista, deixou de ser uma mera necessidade daqueles buscam emagrecimento, por exemplo, para se tornar uma necessidade de saúde fundamental a todos que buscam qualidade de vida e saúde. 
    Como nutricionista, você poderá ter o seu próprio consultório, ou, poderá trabalhar na indústria alimentícia, em clínicas ou hospitais, escolas,
    supermercados, restaurantes e muito mais!
    Hoje em dia, você encontra uma gama de produtos e serviços voltados à alimentação saudável e que proporcionam bem-estar. Com isso, a busca por um nutricionista se tornou essencial a maioria das pessoas.
     </Animatable.Text>


     <Animatable.Text animation='slideInLeft' style={{width: 'auto', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop:40 }}>
      Nutricionista
    </Animatable.Text>
     <Animatable.Text animation='slideInLeft' style={{width: 'auto', color: 'white', fontSize: 15, fontWeight: '600', justifyContent: 'center', alignItems: 'center', alignSelf: 'center',  }}>
      Risco da profissão desaparecer
    </Animatable.Text>

     
    <Box w={'100%'} mt={10} justifyContent='center'>
     <Image alt='graphic'   w={400} h={230} source={imagem5}/>

     <Box flexDirection='row'>
     <Text marginLeft={38} marginTop={-20} position='absolute' color={'white'} fontWeight='$bold'>Pouco risco</Text>
     <Text fontSize={22} marginLeft={192} marginTop={-8} position='absolute' color={'white'} fontWeight='$bold'>30%</Text>
     <Text marginLeft={300} marginTop={-20} position='absolute' color={'white'} fontWeight='$bold'>Alto risco</Text>
     </Box>
  
     </Box>

     <Animatable.Text animation='slideInLeft' style={{width: 'auto', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop:80 }}>
     Áreas de Atuação
    </Animatable.Text>

    <Animatable.Text animation='slideInRight' style={{width: '90%', flexWrap:'nowrap' ,color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 10 }}>
    Se você optar por essa profissão, saiba que poderá atuar em diversas áreas superinteressantes e importantes da Nutrição. 
    Para além de trabalhar em consultórios ou clínicas, você poderá trabalhar na área administrativa, com a elaboração cardápios que cuidarão do controle nutricional; poderá trabalhar em hospitais e suas especificidades; há, também, espaço para trabalho em empresas ou instituições cuidando do controle de qualidade dos alimentos, além do processo correto de armazenagem destes alimentos; além, é claro, do trabalho em clínicas, prescrevendo dietas, promovendo a saúde por meio da educação e da reeducação alimentar de pacientes.

     </Animatable.Text>

     <Box w={'100%'} mt={20} justifyContent='center'>
     <Image alt='graphic' w={370} h={310} source={imagem6}/>
      </Box>

      <Animatable.Text animation='slideInLeft' style={{width: 'auto', color: 'white', fontSize: 22, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop:80 }}>
      Duração da faculdade e grade curricular
    </Animatable.Text>

    <Animatable.Text animation='slideInRight' style={{width: '90%', flexWrap:'nowrap' ,color: 'white', fontSize: 16, fontWeight: '500', justifyContent: 'center', marginTop: 10 }}>
    Em média, a duração da graduação em Nutrição é de quatro anos, uma graduação tecnicamente rápida em comparação aos cursos de exatas, por exemplo, e o que pode ser uma boa razão para que você opte pela Nutrição. Dentro da grade curricular, você encontrará disciplinas básicas da área médica, como anatomia, bioquímica, fisiologia e outras; diversas disciplinas práticas e que englobam a qualidade nutricional de alimentos, avaliação nutricional, e muito mais!
     </Animatable.Text>


     <Animatable.Text animation='slideInLeft' style={{width: 'auto', color: 'white', fontSize: 22, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop:80 }}>
     Você sabe o que está comendo?
    </Animatable.Text>

    <MyCarousel data={cards} />

      </Box>
     </Box>
    
      </ScrollView>
     
    </SafeAreaView>
  );
}

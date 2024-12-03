import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Imagens
import image1 from "../../../../src/img/medicina/image1.png"
import image2 from '../../../../src/img/medicina/image2.png'
import image3 from '../../../../src/img/medicina/image3.png'
import biologia from '../../../../src/img/medicina/biologia.png'
import fisica from '../../../../src/img/medicina/fisica.png'
import quimica from '../../../../src/img/medicina/quimica.png'
import lp from '../../../../src/img/medicina/lp.png'
import ingles from '../../../../src/img/medicina/ingles.png'

const MedicinaScreen = () => {
  return (
    
    <ScrollView style={styles.container}>
    <SafeAreaView>

    <View style={styles.card}>
    <View style={styles.containerImg}>
        <Image source={image1} style={styles.image} />
    </View>
        <View style={styles.textContainer}>
          <Text style={styles.question}>O que é a profissão medicina?</Text>
          <Text style={styles.answer}>
            Ciência responsável por prevenir, diagnosticar e tratar doenças, a Medicina é
            considerada o campo de estudo da saúde. Com especialidades médicas em ampla expansão.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
      <View style={styles.containerImg}>
        <Image source={image2} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.question}>Qual é o papel da medicina?</Text>
          <Text style={styles.answer}>
            Os médicos são responsáveis por cuidar da saúde de todos nós. Eles atuam tanto de forma
            preventiva, antevendo a possíveis doenças e indicando caminhos para se preveni-las de
            forma ativa no diagnóstico.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
      <View style={styles.containerImg}>
        <Image source={image3} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.question}>O que medicina estuda?</Text>
          <Text style={styles.answer}>
            Medicina é a ciência e a prática de diagnosticar, tratar e prevenir doenças e lesões,
            além de promover a saúde e o bem-estar geral dos indivíduos.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
       <View style={styles.textContainer}>
          <Text style={styles.question}>A medicina está passando por uma grande transformação, impulsinada por novas tecnologias. Incluindo: </Text>
          <Text style={styles.contentText}>
           • Telemedicina: Amplia o acesso a cuidados de saúde, permitindo consultas médicas à distância.
          </Text>
          <Text style={styles.contentText}>
           • Inteligência Artificial e Big Data: Melhoram diagnósticos e tratamentos, permitindo uma medicina mais personalizada.
          </Text>
          <Text style={styles.contentText}>
           • Medicina Personalizada: Tratamentos adaptados às características genéticas de cada paciente. 
          </Text>
          <Text style={styles.contentText}>
           • Tecnologias Wearables: Permitem o monitoramento da saúde em tempo real.
          </Text>
          <Text style={styles.contentText}>
           • Saúde Mental: Há um maior foco em cuidados psicológicos, integrando-os à prática médica.
          </Text>
        </View>
        </View>

      {/* Matérias */}
      <View style={styles.newsContainer}>
        <Image source={biologia} style={styles.subjectImage} />
        <View style={styles.contentContainer}>
        <Text style={styles.title}>Por que a biologia é tão importante para a medicina?</Text>
        <Text style={styles.contentText}>
          • Compreensão do corpo humano: A biologia nos ensina como o corpo funciona em nível celular, de órgãos e de sistemas, permitindo diagnosticar e tratar doenças de forma mais precisa.
        </Text>
        <Text style={styles.contentText}>
          • Desenvolvimento de medicamentos: O conhecimento sobre os processos biológicos é fundamental para criar novas drogas e terapias.
        </Text>
        <Text style={styles.contentText}>
          • Prevenção de doenças: Ao entender os fatores que causam doenças, podemos desenvolver estratégias para preveni-las.
        </Text>
        <Text style={styles.contentText}>
          • Biotecnologia e engenharia genética: A biologia está na vanguarda de tecnologias como a terapia gênica e a engenharia de tecidos, que prometem revolucionar o tratamento de diversas doenças.
        </Text>
      </View>
      </View>

      <View style={styles.subjectContainer}>
        <Image source={fisica} style={styles.subjectImage} />
        <View style={styles.contentContainer}>
        <Text style={styles.title}>A Física é a de diversas tecnologias médicas:</Text>
        <Text style={styles.contentText}>
          • Imagem diagnóstica: Raio X, tomografias computadorizadas, ressonância magnética e ultrassonografia são exemplos de tecnologias médicas que se baseiam em príncipios físicos como a radiação eletromagnéticas e as ondas sonoras.  
        </Text>
        <Text style={styles.contentText}>
          • Terapias: A radioterapia, utilizada no tratamento do câncer, e a laserterapia são exemplos de terapias que utilizam príncipios da física para tratar doenças.
        </Text>
        <Text style={styles.contentText}>
          • Equipamentos Médicos: A física está presente em diversos equipamentos médicos, como  eletrocardiogramas, eletroencefalogramas e aparelhos de ventilação mecãnica.
        </Text>
        <Text style={styles.contentText}>
          • Biomecânica: A biomecânica, que estuda o movimento do corpo humano, utiliza principios da física para analisar o movimento de articulação, a força muscular e o equilíbrio, sendo fundamnetal para a reabilitação e o desenvolvimento de próteses e órteses.
        </Text>
      </View>
      </View>

      <View style={styles.subjectContainer}>
        <Image source={quimica} style={styles.subjectImage} />
        <View style={styles.contentContainer}>
        <Text style={styles.title}>A Química está presente em todos os aspectos da medicina: </Text>
        <Text style={styles.contentText}>
          • Desenvolvimento de Medicamentos: A Química medicinal busca sintetizar e modificar moléculas para criar fármacos eficazes contra diversas doenças.
        </Text>
        <Text style={styles.contentText}>
          • Diagnósticos: A Química clínica analisa amostras biológicas (sangie, urina, etc) para identificar alterações que possam indicar a presença de doenças.
        </Text>
        <Text style={styles.contentText}>
          • Materiais para equipamentos médicos: A Química desenvolve materiais biocompatíveis para implantes, prótese e outros dispositivos médicos.
        </Text>
        <Text style={styles.contentText}>
          • Análise de alimentos e medicamentos: A Química garante a qualidade e a seguramça dos alimentos e medicamentos.
        </Text>
        <Text style={styles.contentText}>
          • Compreensão de processos biológicos: A Bioquímica, uma subárea da química, estuda as reações químicas que ocorrem nos seres vivos, como o metabolismo e a síntese de proteínas.
        </Text>
      </View>
      </View>

      <View style={styles.subjectContainer}>
       <Image source={lp} style={styles.subjectImage} />
        <View style={styles.contentContainer}>
        <Text style={styles.title}>Vocabulário Técnico: </Text>
        <Text style={styles.contentText}>
          • Anatomia: Estuda a estrutura física do corpo humano, como órgãos. sistemas e suas relações.
        </Text>
        <Text style={styles.contentText}>
          • Fisiologia: Analisa as funções e processos vitais do corpo, como a respiração, digestão e circulação.
        </Text>
        <Text style={styles.contentText}>
          • Patologia: Estuda as doenças, suas causas, desenvolvimento e efeitos no organismo.
        </Text>
        <Text style={styles.contentText}>
          • Diagnóstico: É o processo de identificar uma doença ou condição de saúde através de exames e avaliação clínica.
        </Text>
        <Text style={styles.contentText}>
          • Prognóstico: É a previsão sobre o curso de uma doença, incluindo a possibilidade de cura e complicações.
        </Text>
        <Text style={styles.contentText}>
          • Terapia: Refere-se ao tratamento de doenças ou condições, podendo incluir medicamentos, cirurgia ou outras técnicas.
        </Text>
        <Text style={styles.contentText}>
          • Farmacologia: Estuda os medicamentos, suas ações no organismo e suas interações.
        </Text>
        <Text style={styles.contentText}>
          • Sintoma: É uma manifestação da doença percebida pelo paciente, como dor, febre ou tosse.
        </Text>
        <Text style={styles.contentText}>
          • Síndrome: É um conjunto de sinais e sintomas que ocorrem juntos e caracterizam uma determinada doença ou condição.
        </Text>
        <Text style={styles.contentText}>
          • Procedimento: É uma ação médica realizada para diagnosticar ou tratar uma condição, como uma biópsia ou cirurgia.
        </Text>
      </View>
      </View>

      <View style={styles.subjectContainer}>
        <Image source={ingles} style={styles.subjectImage} />
        <View style={styles.contentContainer}>
        <Text style={styles.title}>Importância do Ingês para a medicina: </Text>
        <Text style={styles.contentText}>
          • Acesso à informação: A maior parte das pesquisas e publicações médicas está em ingês, o que facilita o acesso a informação atuaizadas e relevantes. 
        </Text>
        <Text style={styles.contentText}>
          • Comunicação Internacional: O inglês é a língua universal em eventos e colaborações médicas, permitindo a troca de conhecimentos entre profissionais de diferentes países.
        </Text>
        <Text style={styles.contentText}>
          • Educação: Muitos cursos e programas de especialização em medicina são ministrados em ingês, sendo essencial para a formação de médicos qualificados.
        </Text>
        <Text style={styles.contentText}>
          • Tecnologia: As novas tecnologias e inovações médicas são, em sua maioria, desenvolvidas em países de çíngua inglesa, exigindo o domínio do idioma para acompanhar as novidades.
        </Text>
        <Text style={styles.contentText}>
          • Recursos: Materiais didáticos, guias clínicos e protocolos estão frequentemente disponíveis em inglês, sendo indispensáveis para a prática médica e o aprendizado contínuo.
        </Text>
        <Text style={styles.contentText}>
          • Networking: O domínio do inglês facílita a criação de redes de contatos com outros profissionais da área, expandino as oportunidades de colaboração e desenvolvimento.
        </Text>
      </View>
      </View>

</SafeAreaView>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#B22222',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  newsContainer: {
    padding: 10,
  },
  newsItem: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  newsImage: {
    width: 50,
    height: 50,
  },
  newsText: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  newsTitle: {
    fontWeight: 'bold',
  },
  newsDescription: {
    color: '#fff',
  },
  // subjectContainer: {
  //   padding: 10,
  // },
  subjectImage: {
    width: '100%',
    height: 190,
    padding: 10,
  },
  contentContainer: {
    padding: 15,
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 8,
    borderWidth:  1,
    borderColor: 'white',
  },
   title: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
 contentText: {
    fontSize: 16,
    marginBottom: 5,
    padding: 5,
    color: '#fff',
    fontWeight: '500',
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor: 'red',
  },
    question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  answer: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
    image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 10,
  },
    textContainer: {
    flex: 1,
  },
});

export default MedicinaScreen;
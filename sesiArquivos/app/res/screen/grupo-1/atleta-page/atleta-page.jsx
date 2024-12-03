// Gabriel / Test
import React, {useState,useNavigation} from 'react'
import { Box, SafeAreaView, Image } from '@gluestack-ui/themed';
import { View, Text, ImageBackground, ScrollView, Pressable,  } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Cards from './component/card';



import corredor from "../../../../src/img/corredor.png";
import academia from "../../../../src/img/academia.png"
import tenista from "../../../../src/img/Tenista.png";
import futebol from "../../../../src/img/Futebol.png";
import basquete from "../../../../src/img/Basquete.png";
import crossFit from "../../../../src/img/CrossFit.png";


export default function AtletaScreen({ navigation },) {
  const AtletaData = [
    { id: 1, title: 'Atletismo',name:"Usain Bolt", gender:"Homem",area:"Tri campeão olimpico", about:"Usain St. Leo Bolt, é um ex-velocista jamaicano multicampeão olímpico e mundial nessa modalidade. É o único atleta na história a tornar-se tricampeão em duas modalidades de pista em Jogos Olímpicos de forma consecutiva e bicampeão também de forma consecutiva na modalidade revezamento 4 x 100 metros.", 
    howtobe:"Quer ser um corredor profissional? É um sonho incrível! Mas para isso, você precisa de Treino constante: Correr regularmente e seguir um plano de treino feito por um profissional.Boa alimentação: Comer alimentos saudáveis para ter energia e se recuperar dos treinos.Descanso: Dormir bem para o corpo se recuperar.Competições: Participar de corridas para ganhar experiência e se testar. Paciência: O sucesso não vem da noite para o dia.Dicas extras:Encontre um bom técnico: Ele te ajudará a criar um plano de treino personalizado.Faça amigos corredores: Eles te motivarão e te ajudarão a se divertir.Divirta-se: O mais importante é gostar do que você faz!Lembre-se: Consulte um médico antes de começar qualquer programa de treinamento intenso.", 
    image:require('../../../../src/img/bolt.jpg') },
    { id: 2, title: 'Musculação',name:"CBUM", gender:"Homem",area:"6 vezes campeão do  Mr. Olympia classic physique", about:"Christopher Adam Bumstead, mais conhecido como Chris Bumstead ou CBum, é um ex-fisiculturista canadense, hexacampeão do Mr. Olympia Classic Physique, tendo conquistado os títulos de 2019, 2020, 2021, 2022, 2023 e 2024. Também é o maior campeão da sua respectiva categoria.",
     howtobe:"O que você precisa saber:Treino: Exercícios de musculação são a base do fisiculturismo. Você precisa treinar regularmente, focando em todos os grupos musculares.Alimentação: Uma dieta rica em proteínas é essencial para o crescimento muscular. Frutas, legumes e carboidratos também são importantes para fornecer energia.Descanso: O corpo precisa de tempo para se recuperar dos treinos. Durma bem e evite o estresse.Paciência: Resultados duradouros levam tempo. Seja paciente e persistente.Acompanhamento profissional: Um educador físico pode te ajudar a criar um plano de treino personalizado e seguro.Dicas importantes:Comece devagar: Se você é iniciante, comece com exercícios mais leves e aumente gradualmente a intensidade.Varie os exercícios: Isso evita a rotina e ajuda a trabalhar todos os músculos.Beba bastante água: A hidratação é fundamental para o bom funcionamento do organismo.Não use anabolizantes: Essas substâncias são perigosas para a saúde e podem te causar diversos problemas.Lembre-se: O fisiculturismo é um esporte que exige muito esforço e dedicação. Mas com disciplina e o acompanhamento de um profissional, você pode alcançar seus objetivos e ter um corpo forte e saudável.", 
     image:require('../../../../src/img/cbum.png') },
    { id: 3, title: 'Tenista',name:"Serena Williams", gender:"Mulher",area:"23 Grand Slams", about:"Serena Jameka Williams é uma ex-tenista profissional norte-americana, uma das maiores atletas de todos os tempos.",
     howtobe:"Como se Tornar um Tenista Profissional: Um Guia Rápido Sonha em ser um tenista profissional como o Rafa Nadal ou a Serena Williams? É um sonho incrível! Mas para isso, você precisa de muita dedicação, treino e paixão pelo esporte.O que você precisa saber:Treino constante: Você precisará treinar muito, aprimorando seus golpes, reflexos e condicionamento físico Técnica: É fundamental ter uma boa técnica para jogar de forma eficiente e evitar lesões.Competições: Participar de torneios é essencial para ganhar experiência e subir no ranking.Mentalidade: Um tenista profissional precisa ter uma mente forte para lidar com a pressão e as derrotas.Apoio: Ter o apoio da família, amigos e de um bom técnico é fundamental.Dicas importantes:Comece cedo: Quanto mais cedo você começar a treinar, mais chances terá de se desenvolver como atleta.Procure um bom técnico: Um técnico experiente te ajudará a aprimorar sua técnica e criar um plano de treinamento personalizado. Cuide do seu corpo: Uma boa alimentação e um descanso adequado são essenciais para um bom desempenho.Seja paciente: O sucesso no tênis leva tempo. Não desista se não conseguir resultados rápidos.Divirta-se: O mais importante é amar o tênis e se divertir praticando o esporte.Lembre-se: Tornar-se um tenista profissional é um desafio, mas com muita dedicação e paixão, você pode realizar seu sonho!Quer saber mais sobre algum desses tópicos? Posso te ajudar com informações sobre como encontrar um bom técnico, como montar uma rotina de treinos ou como se preparar para uma competição.Importante: Consulte um médico antes de iniciar qualquer programa de treinamento intenso.", 
     image:require('../../../../src/img/serena.png') },
    { id: 4, title: 'Futebolista',name:"Memphis Depay", gender:"Homem",area:"Atua pelo Corinthians maior clube brasileiro de futebol", about:"Memphis Depay é um futebolista neerlandês que atua como atacante. Atualmente joga no Corinthians. Iniciou sua carreira profissional no PSV Eindhoven, onde, sob a influência do técnico Phillip Cocu, tornou-se parte integrante da equipe, marcando 49 gols em 124 jogos em todas as competições", 
    howtobe:"O que você precisa saber: Treino constante: Treinar regularmente é fundamental para aprimorar suas habilidades técnicas e físicas.Técnica: Dominar a bola, driblar, passar e chutar com precisão são habilidades essenciais para um jogador de futebol.Táticas: Entender as diferentes formações e jogadas é crucial para se destacar em campo.Competições: Participar de campeonatos e torneios te ajuda a ganhar experiência e mostrar seu talento.Condição física: Um jogador de futebol precisa ter boa resistência, força e agilidade. Mentalidade: A mente forte é tão importante quanto o corpo. Confiança, determinação e capacidade de lidar com a pressão são qualidades essenciais.Dicas importantes:Comece cedo: Quanto mais cedo você começar a jogar, mais tempo terá para se desenvolver.Procure um bom técnico: Um técnico experiente pode te ajudar a aprimorar suas habilidades e te orientar na sua carreira.Cuide da sua alimentação: Uma dieta equilibrada te fornece a energia necessária para os treinos.Descanse: O descanso é fundamental para a recuperação muscular e para evitar lesões.Seja persistente: O caminho para o profissionalismo é longo e cheio de desafios. Não desista!Como começar:Inicie em uma escolinha de futebol: É o lugar ideal para aprender as bases do jogo e desenvolver suas habilidades.Participe de peneiras: As peneiras são testes realizados pelos clubes para descobrir novos talentos.Destaque-se em campeonatos: Os campeonatos são uma ótima oportunidade para mostrar seu talento para olheiros de clubes profissionais.Seja profissional: Cuide da sua imagem, seja disciplinado e respeite seus colegas de equipe.Lembre-se: O sucesso no futebol depende de muitos fatores, como talento, dedicação e um pouco de sorte. Mas com muito esforço e paixão, você pode realizar seu sonho de ser um jogador profissional.", 
    image:require('../../../../src/img/depay.png') },
    { id: 5, title: 'Basqueteiro',name:"Luka Doncic", gender:"Homem",area:"Atua pelo Dallas Mavericks, NBA", about:"Luka Dončić é um basquetebolista esloveno que atua como ala-armador. Atualmente joga no Dallas Mavericks, na National Basketball Association. Foi escolhido pelo Atlanta Hawks na 3ª escolha no Draft da NBA de 2018, em seguida trocado para os Dallas Mavericks por Trae Young. ", 
    howtobe:"Como se Tornar um Jogador de Basquete Profissional: Um Sonho na Cesta Sonha em driblar, arremessar e enterrar como os grandes astros do basquete? É um sonho incrível! Para alcançar esse objetivo, você precisa de muita dedicação, treino e paixão pelo esporte. O que você precisa saber: Treino constante: Treinar regularmente é fundamental para aprimorar suas habilidades técnicas e físicas.Técnica: Dominar o drible, o passe, o arremesso e outros fundamentos é essencial para se destacar no basquete.Táticas: Entender as diferentes jogadas e estratégias é crucial para se adaptar a qualquer situação de jogo.Competições: Participar de campeonatos e torneios te ajuda a ganhar experiência e mostrar seu talento.Condição física: Um jogador de basquete precisa ter boa resistência, agilidade e força.Altura: Embora a altura seja uma vantagem, muitos jogadores de sucesso não são tão altos. O que importa é a sua habilidade e determinação.Dicas importantes:Comece cedo: Quanto mais cedo você começar a jogar, mais tempo terá para se desenvolver.Procure um bom técnico: Um técnico experiente pode te ajudar a aprimorar sua técnica e te orientar na sua carreira.Cuide da sua alimentação: Uma dieta equilibrada te fornece a energia necessária para os treinos.Descanse: O descanso é fundamental para a recuperação muscular e para evitar lesões.Seja persistente: O caminho para o profissionalismo é longo e cheio de desafios. Não desista!Como começar:Inicie em uma escolinha de basquete: É o lugar ideal para aprender as bases do jogo e desenvolver suas habilidades.Participe de peneiras: As peneiras são testes realizados pelos clubes para descobrir novos talentos.Destaque-se em campeonatos: Os campeonatos são uma ótima oportunidade para mostrar seu talento para olheiros de clubes profissionais.Seja profissional: Cuide da sua imagem, seja disciplinado e respeite seus colegas de equipe.Lembre-se: O sucesso no basquete depende de muitos fatores, como talento, dedicação e um pouco de sorte. Mas com muito esforço e paixão, você pode realizar seu sonho de ser um jogador profissional.Gostaria de saber mais sobre algum desses tópicos? Posso te ajudar com informações sobre como encontrar uma boa escolinha de basquete, como se preparar para uma peneira ou como montar uma rotina de treinos.Importante: Consulte um médico antes de iniciar qualquer programa de treinamento intenso.", 
    image:require('../../../../src/img/Luka.png') },
    { id: 6, title: 'Crossfiteiro',name:" Mathew Fraser", gender:"Homem",area:"5 titulos de crossfit Games", about:"Mathew Edward Fraser é um atleta profissional canadense-americano aposentado de CrossFit, competindo de 2014 a 2020. Fraser é o primeiro atleta a ganhar cinco títulos de CrossFit Games, vencendo os jogos de CrossFit de 2016, 2017, 2018, 2019 e 2020 consecutivamente.", 
    howtobe:"Como se Tornar um CrossFiteiro: Um Guia para IniciantesO CrossFit é uma modalidade que combina diversos exercícios de alta intensidade, como levantamento de peso, ginástica e exercícios aeróbicos. Se você busca um treino desafiador e completo, o CrossFit pode ser a atividade ideal para você!Mas como começar?Encontre um box: Um box é um espaço especializado em CrossFit. Procure um box próximo à sua casa e que tenha profissionais qualificados. A maioria dos boxes oferece aulas para iniciantes.Faça uma avaliação física: Antes de começar qualquer atividade física, é importante fazer uma avaliação médica para verificar se você está apto a praticar CrossFit Comece devagar: Não tente fazer tudo de uma vez. Comece com os movimentos básicos e vá aumentando a intensidade gradualmente.Tenha um bom técnico: Um bom técnico te ensinará a executar os movimentos corretamente, evitando lesões e otimizando seus resultados.Seja paciente: Os resultados não aparecem da noite para o dia. Seja persistente e divirta-se com o processo. Alimente-se bem: Uma alimentação equilibrada te dará a energia necessária para os treinos.Descanse: O descanso é fundamental para a recuperação muscular.O que esperar do CrossFit?Treinos variados: Os treinos no CrossFit são sempre diferentes, o que evita a rotina e torna a atividade mais divertida.Comunidade: Os boxes de CrossFit são como uma grande família, onde você fará amigos e se sentirá motivado.Resultados: Com o tempo, você vai notar uma melhora significativa na sua força, resistência e condicionamento físico.Dicas extras:Use roupas confortáveis: Opte por roupas que permitam uma boa movimentação.Use tênis adequados: Um bom tênis de treino te dará mais segurança e conforto.Beba bastante água: Mantenha-se hidratado durante os treinos.Ouça seu corpo: Se sentir alguma dor, pare o exercício e procure um profissional.Lembre-se: O CrossFit é uma atividade física intensa. Consulte um médico antes de começar qualquer programa de treinamento.", 
    image:require('../../../../src/img/mathew.png') },
    
  ];
  const navigateToAthleteDetails = (sport) => {
    // Find the athlete data for the selected sport
    const athleteData = AtletaData.find(atleta => atleta.title === sport.title);

    if (athleteData) {
      // Navigate to the SobreAtletaScreen and pass the athlete data as a param
      navigation.navigate('SobreatletaScreen', { athlete: athleteData });
    } else {
      console.log(`No athlete data found for sport: ${sport.title}`);
    }
  };

  return (
    <SafeAreaView bg={'#fff'} h={'100%'}>
      <ScrollView>
        <View style={{ backgroundColor: "#ee2d32", height: 100, width: "100%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>Tipos de Atletas</Text>
        </View>
        <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "column", padding: 10, marginTop: 10, gap: 20, }}>
          <View style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}>
            <Pressable onPress={() => navigateToAthleteDetails({ title: 'Atletismo' })}>
              <Cards title='Atletismo' subtitle='Atleta atuante em pistas de corrida e maratonas'  source={corredor} />
            </Pressable>
            <Pressable onPress={() => navigateToAthleteDetails({ title: 'Musculação' })}>
              <Cards title='Musculação' subtitle='Também conhecido como pai dos esportes'  source={academia} />
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}>
            <Pressable onPress={() => navigateToAthleteDetails({ title: 'Tenista' })}>
              <Cards title='Tenista' subtitle='Atleta de' source={tenista} />
            </Pressable>
            <Pressable onPress={() => navigateToAthleteDetails({ title: 'Futebolista' })}>
              <Cards title='Futebolista' subtitle='Esporte mais famoso do mundo' source={futebol} />
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}>
            <Pressable onPress={() => navigateToAthleteDetails({ title: 'Basqueteiro' })}>
              <Cards title='Basqueteiro' subtitle='Conhecido pela altura de seus atletas' source={basquete} />
            </Pressable>
            <Pressable onPress={() => navigateToAthleteDetails({ title: 'Crossfiteiro' })}>
              <Cards title='Crossfiteiro' subtitle='Atleta de CrossFit'  source={crossFit} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
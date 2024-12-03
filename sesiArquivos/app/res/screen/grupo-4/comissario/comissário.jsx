import { Box, Heading, Image, SafeAreaView, ScrollView, Text } from '@gluestack-ui/themed';
import comissario1 from '../../../../src/img/comissário/comissário_1.png';
import comissario2 from '../../../../src/img/comissário/comissário_2.png';
import comissario3 from '../../../../src/img/comissário/comissário_3.png';

export default function Comissario({ }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box style={{ backgroundColor: 'red', paddingVertical: 30, paddingHorizontal: 24 }} justifyContent='center' alignItems='center'>
          <Text marginBottom={40} color={'white'} fontWeight={'$extrabold'} fontSize={46}>COMISSÁRIO DE BORDO</Text>
	   <Text size= 'lg' marginBottom={40} color={'white'} >Um comissário de bordo é um profissional responsável por garantir a segurança, o conforto e o bem-estar dos passageiros durante um voo. É aquela pessoa que você encontra a bordo de um avião, sempre pronta para ajudar e orientar.</Text>
          <Box w={'$full'}>
            <Heading fontSize={24} style={{ marginBottom: 20 }} color={'white'} >Quais são as funções do comissário de bordo</Heading>
            <Text size='lg' marginBottom={40} color={'white'} >Muitos pensam que os comissários de bordo estão no voo apenas para servir o lanche com cafezinho (isso nas companhias que ainda oferecem essa amenidade, não é?). No entanto, a função vai muito além disso. O comissário de bordo, antes de qualquer coisa, é um agente de segurança responsável por garantir a segurança, o bem-estar, o conforto e a ordem entre os passageiros a bordo, além de serem auxiliares do comandante da aeronave.</Text>
            <Image
              marginBottom={40}
              alt='Comissario1'
              w={'$full'}
              h={200}
              borderRadius="$lg"
              source={comissario1}
            />
          </Box>
          <Box w={'$full'}>
            <Heading size='xl' style={{ marginBottom: 20 }} color={'white'} >O que é necessário para ser comissário de bordo ?</Heading>
            <Text size='lg' marginBottom={20} color={'white'} >O primeiro requisito para a profissão é realizar o curso de comissário de voo em uma escola certificada pela Anac. O curso exige que o aluno tenha concluído o ensino médio e tenha completado 18 anos. Atualmente existem diversas escolas em todo o Brasil que oferecem o curso nas modalidades presencial e semi-presencial.</Text>
          </Box>
          <Box w={'$full'}>
            <Heading size='xl' style={{ marginBottom: 20 }} color={'white'} >Pontos positivos e negativos da profissão</Heading>
            <Text size='lg' marginBottom={40} color={'white'} >A profissão de comissário oferece diversos benefícios, como a realização do sonho profissional, a oportunidade de conhecer novos lugares e pessoas rapidamente, e tarifas atrativas para viagens, incluindo familiares e amigos. Além disso, os comissários são contratados sob a CLT, garantindo direitos trabalhistas como INSS e FGTS. No entanto, a profissão também apresenta desafios, como longos períodos fora de casa, dificultando a convivência familiar, especialmente em datas comemorativas, e a necessidade de se adaptar a escalas de trabalho que incluem voos em horários variados.</Text>
          </Box>
        </Box>
        <Box style={{ padding: 20 }} justifyContent='center' alignItems='center'>
          <Box w={'$full'}>
            <Heading color='black' size='xl' style={{ marginBottom: 20 }}>Quanto ganha um comissário de bordo ?</Heading>
            <Text size='lg' marginBottom={40}>O salário de um comissário de bordo pode variar bastante. A remuneração é composta por diversos fatores, como a empresa aérea, tempo de empresa, quantidade de horas voadas durante o mês, adicional noturno e a função exercida (comissário auxiliar ou comissário chefe de cabine). De acordo com o portal Glassdoor, a remuneração média mensal de um comissário de bordo da Latam, Gol e Azul é, respectivamente, de R$ 6.453, R$ 5.672 e R$ 4.651.</Text>
            <Image
              marginBottom={40}
              alt='Comissario2'
              w={'$full'}
              h={200}
              borderRadius="$lg"
              source={comissario2}
            />
          </Box>
          <Box w={'$full'}>
            <Heading color='black' size='xl' style={{ marginBottom: 20 }}>Qual a expectativa de crescimento na profissão ?</Heading>
            <Text size='lg' marginBottom={40}>As empresas aéreas valorizam a senioridade em seus planos de carreira, oferecendo benefícios como preferências em agendamento de férias e escolha de rotas com base no tempo de serviço. Os recém-contratados geralmente iniciam em voos domésticos com aeronaves de um corredor e, com a experiência, podem ser promovidos a chefes de cabine e operar voos internacionais em aeronaves de dois corredores. O tempo necessário para essa promoção varia bastante entre as companhias, com alguns alcançando voos para a América do Norte em menos de dois anos, enquanto outros permanecem em rotas regionais por mais de uma década. Curiosamente, muitos tripulantes preferem voos domésticos para ter mais tempo com a família, apesar da percepção glamourosa dos voos internacionais, que podem ser cansativos e causar jetlag.</Text>
            <Image
              marginBottom={40}
              alt='Comissario3'
              w={'$full'}
              h={200}
              borderRadius="$lg"
              source={comissario3}
            />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
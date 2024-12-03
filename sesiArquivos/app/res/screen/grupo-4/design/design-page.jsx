// Gabriel / Test
import { Box, Heading, Image, SafeAreaView, ScrollView, Text } from '@gluestack-ui/themed';
import designerGrafico from '../../../../src/img/design/desginer-grafico.jpg';
import designerInterior from '../../../../src/img/design/desginer-interior.jpg';
import designerModa from '../../../../src/img/design/desginer-moda.jpg';
import designerProduto from '../../../../src/img/design/desginer-produto.jpg';
import designerWeb from '../../../../src/img/design/desginer-web.jpg';

export default function DesignScreen({ }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box style={{ backgroundColor: 'red', paddingVertical: 30, paddingHorizontal: 24 }} justifyContent='center' alignItems='center'>
          <Text marginBottom={40} color={'white'} fontWeight={'$extrabold'} fontSize={46}>DESIGN</Text>
          <Box w={'$full'}>
            <Heading fontSize={24} style={{ marginBottom: 20 }} color={'white'} >Conheça os tipos de Design</Heading>
            <Text size='lg' marginBottom={40} color={'white'} >A profissão de Design envolve a criação de soluções e “ambientes” visuais em diversos contextos e com diferentes propósitos, sendo alguns deles o planejamento, concepção e desenvolvimento dos produtos. Porém a profissão também possui seus tipos diferentes, nessa página você ira explorar e aprender sobre elas.</Text>
          </Box>
          <Box w={'$full'}>
            <Heading size='xl' style={{ marginBottom: 20 }} color={'white'} >Designer Gráfico</Heading>
            <Text size='lg' marginBottom={20} color={'white'} >Provavelmente, um dos profissionais mais lembrados na área de Design. A opção pela habilitação em Design Gráfico promove conhecimentos de criação para veículos impressos de comunicação, além da geração de interfaces gráficas para mídias digitais. O designer gráfico possui habilidades que propiciam o trabalho em agências publicitárias, editoras, na área do marketing ou em veículos jornalísticos. </Text>
            <Image
              marginBottom={40}
              alt='Designer Gráfico'
              w={'$full'}
              h={200}
              borderRadius="$lg"
              source={designerGrafico}
            />
          </Box>
          <Box w={'$full'}>
            <Heading size='xl' style={{ marginBottom: 20 }} color={'white'} >Designer de interiores</Heading>
            <Text size='lg' marginBottom={40} color={'white'} >O designer de interiores elabora espaços internos, seja em residências, empresas ou estabelecimentos públicos. Ele integra estética, funcionalidade e  bem-estar, garantindo ambientes que atendam às necessidades de segurança e comodidade dos ocupantes.</Text>
            <Image
              marginBottom={40}
              alt='Designer Gráfico'
              w={'$full'}
              h={200}
              borderRadius="$lg"
              source={designerInterior}
            />
          </Box>
        </Box>
        <Box style={{ padding: 20 }} justifyContent='center' alignItems='center'>
          <Box w={'$full'}>
            <Heading color='black' size='xl' style={{ marginBottom: 20 }}>Designer de produtos</Heading>
            <Text size='lg' marginBottom={40}>Design de produtos é uma área que envolve o planejamento, criação e desenvolvimento de produtos e serviços, com o objetivo de atender às necessidades dos clientes e do mercado. O processo de design de produtos envolve diversas etapas, como: Identificar as necessidades dos usuários e do mercado, Definir o problema, Desenvolver a solução, Observar produtos similares no mercado e tendências internacionais, Prestar atenção em problemas cotidianos.</Text>
            <Image
              marginBottom={40}
              alt='Designer Gráfico'
              w={'$full'}
              h={200}
              borderRadius="$lg"
              source={designerProduto}
            />
          </Box>
          <Box w={'$full'}>
            <Heading color='black' size='xl' style={{ marginBottom: 20 }}>Designer de moda</Heading>
            <Text size='lg' marginBottom={40}>Um designer de moda é um profissional que cria peças de vestuário, acompanhando todo o processo de criação, desde a concepção até a produção. Ele é responsável por interpretar o contexto cultural e traduzir suas percepções em peças que refletem personalidade e elegância.</Text>
            <Image
              marginBottom={40}
              alt='Designer Gráfico'
              w={'$full'}
              h={200}
              borderRadius="$lg"
              source={designerModa}
            />
          </Box>
          <Box w={'$full'}>
            <Heading color='black' size='xl' style={{ marginBottom: 20 }}>Designer Web</Heading>
            <Text size='lg' marginBottom={40}>O Web Design envolve trabalhos ligados à layout e design de páginas online assim como produção de conteúdos, embora costume ser mais aplicado à criação de sites. Neste caso, os web designers criam as páginas usando linguagens de marcação como, por exemplo, o HTML. Por outro lado, a parte visual dos sites fica a cargo do CSS, termo usado para estilizar elementos escritos em HTML. Por isso, é comum que Web Designers usem ambos na construção de um site, pois, juntos, eles definirão como as páginas serão exibidas nos navegadores.</Text>
            <Image
              marginBottom={40}
              alt='Designer Gráfico'
              w={'$full'}
              h={200}
              borderRadius="$lg"
              source={designerWeb}
            />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
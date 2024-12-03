import React from 'react';
import { Text, Box, SafeAreaView, Image, View, ScrollView, Card } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

export default function JornalistaPage({ navigation }) {
    return (
        <SafeAreaView bg={'red'} h={'100%'}>
            <Box w={'100%'} h={'12%'} justifyContent='center' alignItems='center'>
                <Image style={styles.logoJornalista} source={require('../../../../src/img/img-jornalista/header.png')} />
            </Box>
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <Image
                        style={styles.jornalistaImagem}
                        source={require('../../../../src/img/img-jornalista/jornalista.jpg')}
                    />
                    <View style={styles.box}>
                        <Text style={styles.title}>Sobre o curso de Jornalismo</Text>
                        <Text>O jornalista é o profissional que atua na busca e divulgação de informações relevantes para a sociedade,
                            por meio de canais de comunicação como a TV, rádio, jornais, revistas e internet.</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.text2}>Áreas do Jornalismo</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.title}>Social Media</Text>
                        <Text>O uso de plataformas sociais, para
                            divulgar notícias, interagir com o público e assim  construir uma comunidade. Características: Conteúdo rápido, direto e visualmente atrativo. Possibilidade de
                            engajamento direto com o público através de comentários e mensagens.
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.title}>Assessorias de imprensas</Text>
                        <Text>
                            Atividade que visa construir e manter uma boa imagem de uma pessoa,
                            empresa ou instituição perante a mídia e o público em geral.
                            Características: Elaboração de comunicados de imprensa, organização de
                            eventos para a imprensa, gestão de crises de imagem.
                            Exemplos: Assessorias de imprensa de empresas, políticos.</Text>
                    </View>
                    <View style={styles.box}>
                        <Image
                            style={styles.jornalistaImagem}
                            source={require('../../../../src/img/img-jornalista/mapa-jornalismo.png')}
                        />
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.title}>Jornalismo Esportivo</Text>
                        <Text>
                            A cobertura de eventos esportivos, atletas e competições.
                            Características: Foco em resultados, estatísticas e bastidores do esporte.
                            Linguagem mais informal e próxima do público.
                            Exemplos: Programas esportivos na rádio e TV, sites especializados em
                            esportes.</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.title}>Jornalismo Político</Text>
                        <Text>
                            A cobertura de eventos esportivos, atletas e competições.
                            Características: Foco em resultados, estatísticas e bastidores do esporte.
                            Linguagem mais informal e próxima do público.
                            Exemplos: Programas esportivos na rádio e TV, sites especializados em
                            esportes.</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.text2}>Salário médio de um Jornalista</Text>
                    </View>
                    <View style={styles.box}>
                        <Image
                            style={styles.tabelaSalario}
                            source={require('../../../../src/img/img-jornalista/salario.png')}
                        />
                    </View>

                    <View style={styles.box2}>
                        <Text style={styles.text2}>Relação entre a Constituição de 1988 e Jornalismo</Text>
                    </View>
                    <View style={styles.box}>
                        <Text>A Constituição Federal de 1988 estabelece vários princípios e direitos que se relacionam com o jornalismo, como a liberdade de imprensa, a liberdade de expressão, a promoção da cultura nacional e a regionalização da produção cultural.
                            Ela foi promulgada em 5 de outubro de 1988 e trouxe profundas mudanças políticas, sociais e econômicas, buscando garantir direitos fundamentais e estabelecer princípios democráticos.</Text>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    header: {
        backgroundColor: '#d00000',
        padding: 15,
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    content: {
        flex: 1,
        padding: 15,
    },
    banner: {
        width: '100%',
        height: 200,
        marginBottom: 15,
    },
    box: {
        backgroundColor: 'white',
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    box2: {
        backgroundColor: 'red',
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#333',
        paddingVertical: 10,
    },
    footerText: {
        color: 'white',
    },
    logoJornalista: {
        height: 80,
        width: 400,
    },
    jornalistaImagem: {
        height: 300,
        width: 400,
    },
    jornalistaImagem2: {
        height: 300,
        width: 400,
    },
    card: {
        color: 'red',
    },
    text2: {
        textAlign: 'center',
        color: 'white',
    },
    tabelaSalario: {
        height: 300,
        width: 500,
    }
});
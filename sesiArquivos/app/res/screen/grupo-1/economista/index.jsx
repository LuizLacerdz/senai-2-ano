import { Landmark, Microchip } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const EconomistaScreen = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const flipCard = () => {
        Animated.spring(animation, {
            toValue: isFlipped ? 0 : 180,
            friction: 8,
            tension: 10,
            useNativeDriver: true,
        }).start();
        setIsFlipped(!isFlipped);
    };

    const frontAnimatedStyle = {
        transform: [
            {
                rotateY: animation.interpolate({
                    inputRange: [0, 180],
                    outputRange: ['0deg', '180deg'],
                }),
            },
        ],
    };

    const backAnimatedStyle = {
        transform: [
            {
                rotateY: animation.interpolate({
                    inputRange: [0, 180],
                    outputRange: ['180deg', '360deg'],
                }),
            },
        ],
    };

    return (
        <ScrollView style={styles.container}>
            <LinearGradient start={{ x: 0.0, y: 0.5 }} end={{ x: 2.3, y: 1.0 }}
                locations={[0, 0.5, 0.6]}
                colors={['#ee2d32', '#FF8450']}
                style={{
                    width: "100%",
                    height: 105,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: 10,
                }}>
                <Text style={styles.title}>Profissão: Economista</Text>
            </LinearGradient>

            <View style={styles.cardContainer}>
                <TouchableOpacity onPress={flipCard}>
                    {/* Frente do Cartão */}
                    <Animated.View style={[styles.card, frontAnimatedStyle, { opacity: isFlipped ? 0 : 1 }]}>
                        <View style={styles.cardHeader}>
                            <Landmark size={30} color={"#FFD700"}/>
                            <Text style={styles.bankName}>BANCO ECONOMIA</Text>
                        </View>

                        <View style={styles.chip}>
                            <Microchip size={30} color="#ffd700"/>
                        </View>

                        <Text style={styles.cardNumber}>5432 1098 7654 3210</Text>

                        <View style={styles.cardFooter}>
                            <View>
                                <Text style={styles.cardLabel}>TITULAR</Text>
                                <Text style={styles.cardValue}>ECONOMISTA SILVA</Text>
                            </View>
                            <View>
                                <Text style={styles.cardLabel}>VALIDADE</Text>
                                <Text style={styles.cardValue}>12/28</Text>
                            </View>
                        </View>
                    </Animated.View>

                    {/* Traseira do Cartão */}
                    <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle,
                    { position: 'absolute', opacity: isFlipped ? 1 : 0 }]}>
                        <View style={styles.magneticStrip} />

                        <View style={styles.cvvContainer}>
                            <Text style={styles.cvvLabel}>CVV</Text>
                            <View style={styles.cvvBox}>
                                <Text style={styles.cvvNumber}>123</Text>
                            </View>
                        </View>

                        <Text style={styles.backInfo}>
                            Este cartão representa as principais áreas de atuação do economista:
                        </Text>

                        <View style={styles.bulletPoints}>
                            <Text style={styles.bullet}>• Análise de mercado e investimentos</Text>
                            <Text style={styles.bullet}>• Gestão financeira e orçamentária</Text>
                            <Text style={styles.bullet}>• Consultoria econômica</Text>
                            <Text style={styles.bullet}>• Planejamento estratégico</Text>
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.contentTitle}>Elementos do Cartão:</Text>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Chip</Text>
                    <Text style={styles.contentText}>
                        Representa a tecnologia e inovação necessárias na profissão do economista moderno.
                    </Text>
                </View>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Número do Cartão</Text>
                    <Text style={styles.contentText}>
                        Simboliza a importância da análise numérica e estatística no trabalho do economista.
                    </Text>
                </View>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Data de Validade</Text>
                    <Text style={styles.contentText}>
                        Representa a necessidade de constante atualização e planejamento a longo prazo.
                    </Text>
                </View>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>CVV</Text>
                    <Text style={styles.contentText}>
                        Simboliza a segurança e confidencialidade necessárias ao lidar com dados econômicos sensíveis.
                    </Text>
                </View>
                <Text style={styles.contentTitle}>A economia presente nas materias escolares</Text>
                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Educação Financeira:</Text>
                    <Text style={styles.contentText}>
                        Essa disciplina tem ganhado destaque nos currículos escolares,
                        ensinando os alunos sobre a importância de gerenciar suas finanças pessoais,
                        poupança, investimentos, endividamento e consumo consciente.
                    </Text>
                </View>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Geografia:</Text>
                    <Text style={styles.contentText}>
                        A geografia econômica estuda a distribuição de recursos, atividades
                        econômicas e o comércio, ajudando os alunos a entender como a localização e os
                        recursos naturais influenciam a economia de diferentes regiões.
                    </Text>
                </View>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>História:</Text>
                    <Text style={styles.contentText}>
                        A história econômica analisa o desenvolvimento das economias ao longo do
                        tempo, incluindo o impacto de revoluções industriais, guerras, políticas econômicas e
                        mudanças sociais na formação das economias modernas.
                    </Text>
                </View>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Matemática:</Text>
                    <Text style={styles.contentText}>
                        A matemática é utilizada para entender conceitos econômicos, como
                        juros, descontos, percentuais e gráficos financeiros. Habilidades em matemática são
                        fundamentais para a análise de dados econômicos.
                    </Text>
                </View>
                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Ciências Sociais:</Text>
                    <Text style={styles.contentText}>
                        Esta disciplina explora aspectos sociais e políticos da Economia,
                        discutindo como as decisões econômicas afetam diferentes segmentos da sociedade,
                        as consequências das desigualdades sociais e a relação entre economia e meio
                        ambiente.
                    </Text>
                </View>
                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Matemática:</Text>
                    <Text style={styles.contentText}>
                        A matemática é utilizada para entender conceitos econômicos, como
                        juros, descontos, percentuais e gráficos financeiros. Habilidades em matemática são
                        fundamentais para a análise de dados econômicos.
                    </Text>
                </View>
                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Matemática:</Text>
                    <Text style={styles.contentText}>
                        A matemática é utilizada para entender conceitos econômicos, como
                        juros, descontos, percentuais e gráficos financeiros. Habilidades em matemática são
                        fundamentais para a análise de dados econômicos.
                    </Text>
                </View>
                <Text style={styles.contentTitle}>Economia</Text>
                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Mercados:</Text>
                    <Text style={styles.contentText}>
                        A troca de bens e serviços ocorre em mercados, onde compradores e
                        vendedores interagem. Isso inclui mercados físicos, como feiras e lojas, e mercados
                        digitais, como e-commerce.
                    </Text>
                </View>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Empresas:</Text>
                    <Text style={styles.contentText}>
                        As organizações comerciais e industriais operam dentro de um contexto
                        econômico, gerenciando recursos, mão de obra e produção para atender à demanda
                        dos consumidores.
                    </Text>
                </View>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Governo:</Text>
                    <Text style={styles.contentText}>
                        A economia é fundamental na formulação de políticas públicas, na
                        arrecadação de impostos e na alocação de recursos. O papel do governo na economia
                        varia de acordo com o modelo econômico de cada país.
                    </Text>
                </View>

                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Trabalho:</Text>
                    <Text style={styles.contentText}>
                        O mercado de trabalho é uma parte importante da economia, onde a força
                        de trabalho é empregada para produzir bens e serviços, e onde se estabelecem
                        salários e condições de trabalho.
                    </Text>
                </View>
                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Finanças:</Text>
                    <Text style={styles.contentText}>
                        O setor financeiro, que inclui bancos, bolsas de valores e instituições de
                        crédito, é essencial para o funcionamento da economia, permitindo a movimentação
                        de capitais e investimentos.
                    </Text>
                </View>
                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Comércio Internacional:</Text>
                    <Text style={styles.contentText}>
                        A economia global está interconectada, e o comércio
                        internacional influencia as economias locais e a dinâmica de oferta e demanda entre
                        países.
                    </Text>
                </View>
                <View style={styles.contentItem}>
                    <Text style={styles.contentHeader}>Matemática:</Text>
                    <Text style={styles.contentText}>
                        A matemática é utilizada para entender conceitos econômicos, como
                        juros, descontos, percentuais e gráficos financeiros. Habilidades em matemática são
                        fundamentais para a análise de dados econômicos.
                    </Text>
                </View>
            </View>
            <View style={styles.secondContentContainer}>
                <View style={styles.secondContentItem}>
                    <Text style={styles.secondContentTitle}>Como se tornar um Economista:</Text>
                    <Text style={styles.secondContentHeader}>Educação Formal:</Text>
                    <Text style={styles.secondContentText}>
                        -Graduação em Economia: O primeiro passo é obter um diploma de graduação em Economia
                        ou em áreas relacionadas, como Administração ou Ciências Sociais.
                        -Pós-Graduação Muitos economistas também buscam pós-graduação (mestrado ou
                        doutorado) para se especializar em áreas específicas, como economia internacional, economia
                        do trabalho, macroeconomia, microeconomia, entre outras.
                    </Text>
                </View>
                <View style={styles.secondContentItem}>
                    <Text style={styles.secondContentHeader}>Desenvolvimento de Habilidades:</Text>
                    <Text style={styles.secondContentText}>
                        - Habilidades Quantitativas: Os economistas precisam ter sólidas habilidades matemáticas e
                        estatísticas para entender e analisar dados.
                        - Análise Crítica: A capacidade de interpretar dados e informações para fazer análises críticas
                        é fundamental.
                        - Comunicação: É importante conseguir comunicar resultados de forma clara, tanto por
                        escrito quanto verbalmente.
                    </Text>
                </View>

                <View style={styles.secondContentItem}>
                    <Text style={styles.secondContentHeader}>Certificações e Cursos:</Text>
                    <Text style={styles.secondContentText}>
                        -Estágios: Participar de estágios em organizações governamentais, instituições financeiras,
                        empresas privadas ou organizações não governamentais pode proporcionar experiência
                        valiosa.
                        -Pesquisa: Trabalhar em projetos de pesquisa pode ajudar a desenvolver habilidades e
                        construir um portfólio.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#fff',
        textAlign: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        marginVertical: 20,
        height: 220,
    },
    card: {
        width: 340,
        height: 200,
        backgroundColor: '#ee2d32',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        backfaceVisibility: 'hidden',
    },
    cardBack: {
        backgroundColor: '#ee2d32',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    bankName: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    chip: {
        marginBottom: 20,
    },
    cardNumber: {
        color: '#fff',
        fontSize: 22,
        letterSpacing: 2,
        marginBottom: 20,
        bottom:10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardLabel: {
        color: '#aaa',
        fontSize: 12,
        bottom:20
    },
    cardValue: {
        color: '#fff',
        fontSize: 16,
        bottom:20,
    },
    magneticStrip: {
        width: '100%',
        height: 40,
        backgroundColor: '#333',
        marginVertical: 20,
    },
    cvvContainer: {
        alignItems: 'flex-end',
        marginRight: 40,
    },
    cvvLabel: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 5,
    },
    cvvBox: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
        width: 50,
        alignItems: 'center',
    },
    cvvNumber: {
        color: '#000',
        fontSize: 14,
    },
    backInfo: {
        color: '#000',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
    },
    bulletPoints: {
        paddingLeft: 20,
    },
    bullet: {
        color: '#000',
        fontSize: 16,
        marginBottom: 5,
    },
    contentContainer: {
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ee2d32',
        borderRadius: 15,
    },
    contentTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#fff',
        textDecorationLine: 'underline',
        textDecorationColor: '#fff',
        textDecorationStyle: 'solid',
    },
    contentItem: {
        marginBottom: 15,
    },
    contentHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    contentText: {
        fontSize: 14,
        color: '#fff',
        lineHeight: 20,
    },
    secondContentContainer: {
        marginTop: 50,
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
    },
    secondContentTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#EE2D32',
        textDecorationLine: 'underline',
        textDecorationColor: '#ee2d32',
        textDecorationStyle: 'solid',
    },
    secondContentItem: {
        marginBottom: 15,
    },
    secondContentHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ee2d32',
        marginBottom: 5,
    },
    secondContentText: {
        fontSize: 14,
        color: '#ee2d32',
        lineHeight: 20,
    },
});

export default EconomistaScreen;
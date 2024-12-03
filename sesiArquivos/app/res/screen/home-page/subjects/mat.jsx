import { Image, Pressable, Text, View } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// Adicione os imports dos ícones
import coinsIcon from "../../../../src/img/coinsIcon.png";
import subjectIcon from "../../../../src/img/subjectIcon.png";

export default function MATScreen({ navigation }) {

    const DATA = [
        { id: 3, area: "TI", name: "Database", minSal: 4000, maxSal: 12000, subject: "Matemática", image: require("../../../../src/img/profissoes/database.png"), backgroundColor: "#0373fc", screen: "DatabaseScreen" },
        { id: 4, area: "Design e artes visuais", name: "Design", minSal: 2000, maxSal: 6000, subject: "Lingua Portuguesa", image: require("../../../../src/img/profissoes/design.png"), backgroundColor: "#fcf803", screen: "DesignScreen" },
        { id: 5, area: "Administração e Gestão", name: "Administração", minSal: 3000, maxSal: 10000, subject: "Matemática", image: require("../../../../src/img/profissoes/administracao.png"), backgroundColor: "#032cfc", screen: "AdministracaoScreen" },
        { id: 8, area: "Construção civil", name: "Pedreiro", minSal: 1500, maxSal: 4000, subject: "Matemática", image: require("../../../../src/img/profissoes/pedreiro.png"), backgroundColor: "#575555", screen: "PedreiroScreen" },
        { id: 9, area: "Economia e finanças", name: "Economista", minSal: 4000, maxSal: 12000, subject: "Matemática", image: require("../../../../src/img/profissoes/economista.png"), backgroundColor: "#02afe8", screen: "EconomistaScreen" },
        { id: 10, area: "Engenharia e Tecnologia", name: "Engenharia", minSal: 5000, maxSal: 15000, subject: "Matemática", image: require("../../../../src/img/profissoes/engenharia.png"), backgroundColor: "#FF8450", screen: "EngenhariaScreen" },
        { id: 16, area: "Arquitetura e urbanismo", name: "Arquitetura", minSal: 4000, maxSal: 12000, subject: "Matemática", image: require("../../../../src/img/profissoes/arquiteto.png"), backgroundColor: "#26b816", screen: "ArquiteturaScreen" },
    ]

    const [list, setList] = useState(DATA);
    const ListItem = ({ data }) => {
        return (
            <Pressable onPress={() => navigation.navigate(data.screen)}>
                <View style={styles.newJobContainer}>
                    <View style={{ flexDirection: "row", gap: 25, }}>
                        <View style={{ backgroundColor: data.backgroundColor, width: 55, height: 55, borderRadius: 10, justifyContent: "center", alignItems: "center", }}>
                            <Image alt='icon' source={data.image} resizeMode="contain" style={{ width: 40, height: 40, }} />
                        </View>
                        <View style={{ flexDirection: "column", gap: 5, }}>
                            <Text>{data.area}</Text>
                            <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>{data.name}</Text>
                            <View style={{ flexDirection: "column", marginTop: 10, gap: 10, }}>
                                <View style={{ flexDirection: "row", gap: 18, }}>
                                    <Image alt='icon' source={coinsIcon} style={{ width: 24, height: 24, }} />
                                    <Text style={{ color: "#000", fontWeight: "500", }}>R${data.minSal} - R${data.maxSal}</Text>
                                </View>
                                <View style={{ flexDirection: "row", gap: 18, }}>
                                    <Image alt='icon' source={subjectIcon} style={{ width: 22, height: 22, }} />
                                    <Text style={{ color: "#000", fontWeight: "500", fontSize: 18, }}>{data.subject}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <LinearGradient 
                        start={{ x: 0.0, y: 0.5 }} 
                        end={{ x: 2.3, y: 1.0 }}
                        locations={[0, 0.5, 0.6]}
                        colors={['#ee2d32', '#FF8450']}
                        style={styles.gradientHeader}>
                        <View>
                            <Text style={styles.headerTitle}>
                                Se você gosta de Matemática recomendamos os seguintes
                            </Text>
                        </View>
                    </LinearGradient>
                </View>

                <FlatList
                        data={DATA}
                        style={styles.list}
                        renderItem={({ item }) => <ListItem data={item} />}
                        keyExtractor={(item) => item.id}
                    />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    headerContainer: {
        marginBottom: 20,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    },
    list: {
        paddingHorizontal: 20,
    },
    newJobContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    gradientHeader: {
        width: "100%",
        height: 165,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: "row",
        justifyContent: "center",
        padding: 40,
    }
});
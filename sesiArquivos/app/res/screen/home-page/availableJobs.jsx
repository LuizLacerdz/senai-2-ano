
import React, { useState } from "react"
import { Box, Button, ButtonText, Image, Input, InputField, InputIcon, InputSlot, Pressable, SearchIcon, Text, View } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import JobCard from "../../components/JobCard"
//Componentes utilizados

//Imagens Utilizadas
import coinsIcon from "../../../src/img/coinsIcon.png";
import subjectIcon from "../../../src/img/subjectIcon.png";
import Nutricao from "../../../src/img/nutricao.png";

export default function AvailableJobs({ navigation }) {


    const DATA = [
        { id: 1, area: "Esportes", name: "Atleta", minSal: 800, maxSal: 3500000, subject: "Educação Fisica", image: require("../../../src/img/profissoes/atleta.png"), backgroundColor: "#ee2d32", screen: "AtletaScreen" },
        { id: 2, area: "Saúde", name: "Nutrição", minSal: 2000, maxSal: 5000, subject: "Biologia", image: require("../../../src/img/profissoes/nutricao.png"), backgroundColor: "#6bfc03", screen: "NutricaoScreen" },
        { id: 3, area: "TI", name: "Database", minSal: 4000, maxSal: 12000, subject: "Matemática", image: require("../../../src/img/profissoes/database.png"), backgroundColor: "#0373fc", screen: "DatabaseScreen" },
        { id: 4, area: "Design e artes visuais", name: "Design", minSal: 2000, maxSal: 6000, subject: "Lingua Portuguesa", image: require("../../../src/img/profissoes/design.png"), backgroundColor: "#fcf803", screen: "DesignScreen" },
        { id: 5, area: "Administração e Gestão", name: "Administração", minSal: 3000, maxSal: 10000, subject: "Matemática", image: require("../../../src/img/profissoes/administracao.png"), backgroundColor: "#032cfc", screen: "AdministracaoScreen" },
        { id: 6, area: "Beleza e estética", name: "Cabeleireiro", minSal: 1200, maxSal: 3500, subject: "Quimica", image: require("../../../src/img/profissoes/cabeleireiro.png"), backgroundColor: "#fc03fc", screen: "CabeleireiroScreen" },
        { id: 7, area: "Direito e justiça", name: "Direito", minSal: 3000, maxSal: 15000, subject: "Lingua Portuguesa", image: require("../../../src/img/profissoes/direito.png"), backgroundColor: "#000", screen: "DireitoScreen" },
        { id: 8, area: "Construção civil", name: "Pedreiro", minSal: 1500, maxSal: 4000, subject: "Matemática", image: require("../../../src/img/profissoes/pedreiro.png"), backgroundColor: "#575555", screen: "PedreiroScreen" },
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
    //Inicio do código
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <LinearGradient start={{ x: 0.0, y: 0.5 }} end={{ x: 2.3, y: 1.0 }}
                        locations={[0, 0.5, 0.6]}
                        colors={['#ee2d32', '#FF8450']}
                        style={{
                            width: "100%",
                            height: 165,
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius: 40,
                            flexDirection: "row",
                            justifyContent: "center",
                            padding: 40,
                        }}>
                        <View>
                            <Text style={styles.headerTitle}>Aqui você encontra os principais trabalhos</Text>
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
    },
    headerTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    },
    newJobContainer: {
        flexDirection: "col",
        backgroundColor: "#fff",
        padding: 25,
    },
});



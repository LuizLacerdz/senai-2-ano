
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

export default function JobsBeingAdded({ navigation }) {

 const DATA = [ 
        { id: 9, area: "Economia e finanças", name: "Economista", minSal: 4000, maxSal: 12000, subject: "Matemática", image: require("../../../src/img/profissoes/economista.png"), backgroundColor: "#02afe8", screen: "EconomistaScreen" },
        { id: 10, area: "Engenharia e Tecnologia", name: "Engenharia", minSal: 5000, maxSal: 15000, subject: "Matemática", image: require("../../../src/img/profissoes/engenharia.png"), backgroundColor: "#FF8450", screen: "EngenhariaScreen" },
        { id: 11, area: "Comunicação e Marketing", name: "Publicidade", minSal: 2500, maxSal: 8000, subject: "Lingua Portuguesa", image: require("../../../src/img/profissoes/publicidade.png"), backgroundColor: "#fafa02", screen: "PublicidadeScreen" },
        { id: 12, area: "Aviação e transporte aéreo", name: "Comissario", minSal: 2500, maxSal: 7000, subject: "Inglês", image: require("../../../src/img/profissoes/comissario.png"), backgroundColor: "#4402fa", screen: "ComissarioScreen" },
        { id: 13, area: "Comunicação e Mídia", name: "Jornalista", minSal: 2000, maxSal: 7000, subject: "Lingua Portuguesa", image: require("../../../src/img/profissoes/jornalista.png"), backgroundColor: "#0206fa", screen: "JornalistaPage" },
        { id: 14, area: "Saúde e Medicina", name: "Medicina", minSal: 4000, maxSal: 20000, subject: "Biologia", image: require("../../../src/img/profissoes/medico.png"), backgroundColor: "#e3e3e3", screen: "MedicinaScreen" },
        { id: 15, area: "Geologia e ciências da terra", name: "Geologo", minSal: 4000, maxSal: 12000, subject: "Geografia", image: require("../../../src/img/profissoes/geologo.png"), backgroundColor: "#301e09", screen: "GeologoScreen" },
        { id: 16, area: "Arquitetura e urbanismo", name: "Arquitetura", minSal: 4000, maxSal: 12000, subject: "Matemática", image: require("../../../src/img/profissoes/arquiteto.png"), backgroundColor: "#26b816", screen: "ArquiteturaScreen" },
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



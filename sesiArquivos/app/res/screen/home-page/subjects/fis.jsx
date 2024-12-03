import React, { useState, useEffect } from "react";
import { Box, Button, ButtonText, Image, Input, InputField, InputIcon, InputSlot, Pressable, SearchIcon, Text, View } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// Adicione os imports dos ícones
import coinsIcon from "../../../../src/img/coinsIcon.png";
import subjectIcon from "../../../../src/img/subjectIcon.png";

export default function FISScreen({ navigation }) {

    const DATA = [
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
                                Se você gosta de Lingua Portuguesa recomendamos os seguintes
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
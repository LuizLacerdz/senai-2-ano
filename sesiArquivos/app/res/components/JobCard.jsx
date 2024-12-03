
import React from "react"
import { Center, View, Text, Image} from "@gluestack-ui/themed"
import { StyleSheet, Pressable } from "react-native"

//Componentes utilizados

//Imagens Utilizadas
import coinsIcon from "../../src/img/coinsIcon.png";
import subjectIcon from "../../src/img/subjectIcon.png";
//Inicio do código


const JobCard = ({subject, minSal, maxSal, jobName, jobArea,jobImage, onPress,bgColor},{navigation}) => (
    <View style={styles.newJobContainer}>
    <Pressable onPress={onPress}>
        <View style={{ flexDirection: "row", gap: 25, }}>
            <View style={{ backgroundColor: bgColor, width: 55, height: 55, borderRadius: 10, justifyContent: "center", alignItems: "center", }}>
                <Image alt='icon' source={jobImage} resizeMode="contain" style={{ width: 40, height: 40, }} />
            </View>
            <View style={{ flexDirection: "column", gap: 5, }}>
                <Text>{jobArea}</Text>
                <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>{jobName}</Text>
                <View style={{ flexDirection: "column", marginTop: 10, gap: 10, }}>
                    <View style={{ flexDirection: "row", gap: 18, }}>
                        <Image alt='icon' source={coinsIcon} style={{ width: 24, height: 24, }} />
                        <Text style={{ color: "#000", fontWeight: "500", }}>R${minSal} - R${maxSal}</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 18, }}>
                        <Image alt='icon' source={subjectIcon} style={{ width: 22, height: 22, }} />
                        <Text style={{ color: "#000", fontWeight: "500", fontSize: 18, }}>{subject}</Text>
                    </View>
                </View>
            </View>
        </View>
    </Pressable>
</View>
);

const styles = StyleSheet.create({
    newJobContainer: {
        flexDirection: "col",
        backgroundColor: "#fff",
        padding: 25,
    },
});

export default JobCard



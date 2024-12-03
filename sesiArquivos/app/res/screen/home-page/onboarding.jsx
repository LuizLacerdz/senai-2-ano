import { Image, Text, View } from "@gluestack-ui/themed";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const { width: screenWidth } = Dimensions.get('window');
const slides = [ 
    {
        id: 1,
        title: 'Bem vindo ao EduLink',
        description: 'Bem vindo ao primeiro aplicativo vocacional de empregos',
        image: require("../../../src/img/onboarding1.jpg")
    },
    {
        id: 2,
        title: 'Dificuldade em escolher seu trabalho',
        description: 'Muitas pessoas encontram dificuldades para escolher seu futuro trabalho ou faculdade. Mas aqui a gente te ajuda',
        image: require("../../../src/img/onboarding2.jpg")
    },
    {
        id: 3,
        title: 'Aqui a gente te ajuda',
        description: 'A partir dos seus gostos e interesses te ajudamos a encontrar um trabalho que se encaixe com você',
        image: require("../../../src/img/onboarding3.jpg")
    }
]

export default function OnBoarding({ navigation }) {
    const buttonLabel = (label,color) => {
        return(
            <View style={styles.buttonContainer}>
                <Text style={{
                    color: color,
                    fontWeight:'600',
                    fontSize:18
                }}>
                    {label}
                </Text>
            </View>
        )
    };
     return(
        <AppIntroSlider
            data={slides}
            renderItem={({item}) => {
                return(
                    <View style={styles.main}>
                        <Image
                         source={item.image} style={styles.image} resizeMode="contain" alt="Onboarding"/>
                         <Text style={styles.title}>{item.title}</Text>
                         <Text style={styles.desc}>{item.description}</Text>
                    </View>
                )
            }}
            activeDotStyle={{
                backgroundColor:"#ee2d32",
                width:30,
            }}
            showSkipButton
            renderNextButton={() => buttonLabel("Próximo","#ee2d32")}
            renderSkipButton={() => buttonLabel("Pular","#17223B")}
            renderDoneButton={() => buttonLabel("Explorar", "#ee2d32")}
            onDone={() => navigation.navigate("Home")}
        />
    )
};

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:"#fff"
    },
    image:{
        width: 350,
        height:250,
    },
    title:{
        color:'#000',
        fontSize:26,
        fontWeight:'900',
        marginBottom:15,
    },
    desc:{
        textAlign:'center',
    },
    buttonContainer:{
        padding:13
    },
    buttonText:{
        color:""
    }
});
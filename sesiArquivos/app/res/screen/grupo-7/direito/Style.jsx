import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',     
    },
    boxTitulo: {
        borderRadius: 5,
        margin: 10,
        width: '95%',
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxSubTitulo: {
        borderRadius: 5,
        margin: 10,
        width: '95%',
        height: 60,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxList: {
        borderRadius: 5,
        margin: 10,
        width: '95%',
        height: 170,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
        paddingVertical: 20,
    },
    TextTitulo:{
        color:'white',
        fontWeight:'bold',
        fontSize: 30,
    },
    TextSub:{
        color:'white', 
        fontWeight:'bold',
         fontSize:25
    },
    TextTexto:{
        textAlign:'justify',
        margin:10,
        color:'black',
    },
    TextTextoList:{
        textAlign:'justify',
        margin:7,
        color:'black',
    }
})

export default styles;
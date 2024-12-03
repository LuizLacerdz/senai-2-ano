import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    
    // UPLOAD
    
    container: {
        flex: 1,
        //flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
    },
  
    
 
    item: {
        width: 150,
        height: 150,
        marginBottom: 10,
        marginTop: 20,
        
        
    },
    fonts: {
        marginBottom: 8,
        color: 'black',
        marginLeft: 160,
        marginTop:-150,
        
      },

      fontsQuimica: {
        marginBottom: 8,
        color: 'black',
        marginLeft: 45,
        marginTop:-53,
        fontSize: 16,
      },
      fonts3: {
        marginBottom: 8,
        color: 'black',
        
        marginTop:10,
        fontSize: 16,
      },

    img1: {
        height: 50,
        width: 412,
        
        
        // marginLeft: -5,

    },
    imgCards1: {
        height:150,
        width: 150,
        borderRadius: 15,
        
        
        // marginLeft: -5,

    },
    imgCards2: {
        height:140,
        width: 140,
        margin: '10',
        borderRadius: 15,
        
        
        
        // marginLeft: -5,

    },
    imgCards3: {
        height:150,
        width: 150,
        borderRadius: 15,
    },
    imgCards4: {
        height:30,
        width: 30,
        margin:30,
        marginLeft: 5,
        marginTop:10 
    },
    imgCards5: {
        alignItems: 'center',
        marginTop:10,
        height:161,
        width:340,

    },
    

    // CONFIGURAÇÕES
    buttonContainer:{
        marginTop: 1,
        alignItems: 'center',
        marginLeft: 2,

    },
    buttonContainer2:{
        marginTop: 30,
        alignItems: 'center',
        marginLeft: 2,
    },
    buttonContainer3:{
        marginTop: 30,
        alignItems: 'center',
        marginLeft: 2,
    },
    buttonContainer4:{
        marginTop:5,
        // alignItems: '',
        marginLeft: 2,
    },
    // buttonContainer5:{
    //    // marginTop:5,
    //     // alignItems: '',
    //     marginLeft: '100',
    // },

    // marginText:{
    //     margin: 1,
    // },

    //NOTIFICAÇÕES:

    sobre:{
        marginTop: 230,
        marginLeft: 100,
    },
    
   
});


export default styles;
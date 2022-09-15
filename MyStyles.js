import { StyleSheet } from "react-native"

export const LightTheme = StyleSheet.create({
   
    container: {
      paddingTop: 40,
      flex: 1,
      backgroundColor: '#db9833',
      padding: 8,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 28,
      flexDirection: "row",
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
    },
    boldText: {
      fontWeight: 'bold',
      fontSize: 20,
      padding: 10,
    },
    input: {
      backgroundColor: '#f8ead6',
      marginEnd: 200,
      height: 30,
      borderRadius: 2,
    },
    radioButton: {
      padding: 10,
    },
    middle: {
      flex: 4,
    
    },
    button:{
      color: '#f8ead6',
      margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
    }
})
  
export const DarkTheme = StyleSheet.create({
      container: { ...LightTheme.boldText, ...LightTheme.container, ...LightTheme.header, backgroundColor: '#f8ead6'},
      label:{
        backgroundColor: 'yellow'
      }
})
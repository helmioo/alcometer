import { StyleSheet } from "react-native"

export const LightTheme = StyleSheet.create({
   
    container: {
        paddingTop: 40,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boldText: {
      fontWeight: 'bold',
    },
    middle: {
      flex: 4,
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
    },
    button:{
      backgroundColor: '#555'
    }
})
  
export const DarkTheme = StyleSheet.create({
      container: { ...LightTheme.boldText, ...LightTheme.container, ...LightTheme.header, backgroundColor: 'lightgrey'},
      label:{
        backgroundColor: 'yellow'
      }
})
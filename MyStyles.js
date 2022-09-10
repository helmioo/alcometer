import { StyleSheet } from "react-native"

export const LightTheme = StyleSheet.create({
    banner: {
      alignItems: 'left',
    },
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
    header: {
      
    },
    label:{
      backgroundColor: '#555'
    }
})
  
export const DarkTheme = StyleSheet.create({
      container: { ...LightTheme.banner, ...LightTheme.container, ...LightTheme.header, backgroundColor: 'lightgrey'},
      label:{
        backgroundColor: 'yellow'
      }
})
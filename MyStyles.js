import { StyleSheet } from "react-native"

export const LightTheme = StyleSheet.create({
    container: {
        paddingTop: 30,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label:{
      backgroundColor: '#555'
    }
})
  
export const DarkTheme = StyleSheet.create({
      container: { ...LightTheme.container, backgroundColor: 'lightgrey'},
      label:{
        backgroundColor: 'yellow'
      }
})
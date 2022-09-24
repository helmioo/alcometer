import { StyleSheet } from "react-native"

// vaalea teema ja päämäärittelyt
export const LightTheme = StyleSheet.create({

  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: '#f8ead6',
    padding: 4,
  },
  start: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingStart: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',
    flexDirection: "row",
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginBottom: 15,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  input: {
    backgroundColor: '#db9833',
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
  end: {
    flexDirection: "row",
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 33,
    fontWeight: 'bold',
  },
  button: {
    color: '#f8ead6',
    fontSize: 20,
    borderStyle:'solid',
    borderColor: 'black',
    marginTop: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: '#db9833',
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
})

// tumma teema, tuotu mukaan päämäärittelyt vaaleasta teemasta
export const DarkTheme = StyleSheet.create({
  container: {
    ...LightTheme.container,
    backgroundColor: '#db9833',
  },
  start: {
    ...LightTheme.start,
  },
  title: {
    ...LightTheme.title,
  },
  boldText: {
    ...LightTheme.boldText,
  },
  input: {
    ...LightTheme.input,
    backgroundColor: '#f8ead6',
  },
  radioButton: {
    ...LightTheme.radioButton,
  },
  middle: {
    ...LightTheme.middle,
  },
  end: {
    ...LightTheme.end,
  },
  button: {
    ...LightTheme.button,
    backgroundColor: '#f8ead6',
    color: '#000',
  },
})
import { useState } from 'react';
import { StyleSheet, Text, ScrollView, Switch, TextInput, Button, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import { DarkTheme, LightTheme } from './MyStyles';

export default function App() {

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },

  ]

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState(0)
  const [result, setResult] = useState(0)
  const [ok, setOk] = useState(false)
  const [dark, setDark] = useState(false)

  //const theme = dark ? LightTheme : DarkTheme

  const ShowAlert = () => {
    Alert.alert(
      'Warning',
      'Weight cannot be empty',
      [
        {
          text: 'Ok',
          onPress: () => setOk(true)
        }
      ]
    )
  }

  /*   function calculatet(text) {
     setWeight(text)
      
      let litres = bottles * 0.33
      let grams = litres * 8 * 4.5
      let burning = weight / 10
      let gramsLeft = grams - (burning * hours)
  
      let bloodAlcohol = 0
  
      if (gender === "male") {
        bloodAlcohol = gramsLeft / (weight * 0.7)
      } else {
        bloodAlcohol = gramsLeft / (weight * 0.6)
      }
      if (bloodAlcohol < 0) {
        setResult(0)
      } else {
        setResult(bloodAlcohol)
      }
    } */

  return (
    <ScrollView style={{ width: '100%' }}>
      <View style={LightTheme.container}>

        <Switch
          style={{ alignContent: 'flex-start' }}
          onChange={() => setDark(prev => !prev)}
          value={dark}
          //style={{ transform: [{scale:1.5}]}}
          thumbColor='grey'
          trackColor={{ false: 'white', true: 'black' }}
        />

        <Text style={LightTheme.boldText}>Alcometer</Text>

        <View style={LightTheme.middle}>
          <Text style={LightTheme.boldText}>Weight</Text>
          <TextInput
            value={weight}
            onChangeText={text => setWeight(text)}
            keyboardType='decimal-pad'
          />
          <Text style={LightTheme.boldText}>Bottles</Text>
          <NumericInput
            value={bottles}
            onChange={value => setBottles(value)}
          />
          <Text style={LightTheme.boldText}>Hours</Text>
          <NumericInput
            value={hours}
            onChange={value => setHours(value)}
          />
          <RadioForm
            radio_props={genders}
            initial={0}
            onPress={value => setGender(value)}
          />
        </View>

        <Text>{result.toFixed(2)}</Text>

        <Button style={LightTheme.button} title='CALCULATE' />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// onPress={calculate}

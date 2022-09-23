import { useState } from 'react';
import { Alert, Text, ScrollView, Switch, TextInput, View, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import { DarkTheme, LightTheme} from './MyStyles';

export default function App() {

  // genders-taulukko radiobuttoneille
  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]

  // tilamuuttujat
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)
  const [ok, setOk] = useState(false)
  const [dark, setDark] = useState(false)

  // teeman asettaminen ja vaihtaminen
  const theme = dark ? DarkTheme : LightTheme

  const changeTheme = () => {
    setDark(prev => !prev)
  }

  // alert, jos painoa ei ole syötetty
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

  // laskutoimitukset
  const calculate = () => {

    // tarkistetaan, että paino on syötetty
    if (weight == 0 || weight == null) {
      ShowAlert()
      return;
    }

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * hours)
   

    const bloodAlcohol = gender === 'male' ? (gramsLeft / (weight * 0.7)) : (gramsLeft / (weight * 0.6))
    setResult(bloodAlcohol)

    // jos tulos on negatiivinen, aseta 0
    if (bloodAlcohol < 0) {
      setResult(0)
    } else {
      setResult(bloodAlcohol)
    }
  }
    

  return (
    <ScrollView contentContainerStyle={theme.container}>
      <View style={theme.container}>

        <View style={theme.start}>
          <Switch
            onValueChange={changeTheme}
            value={dark}
            thumbColor='#cecece'
            trackColor={{ false: '#db9833', true: '#f8ead6' }}
          />
        </View>
        <View>
          <Text style={[theme.boldText, theme.title]}>Alcometer</Text>
        </View>

        <View style={theme.middle}>
          <Text style={theme.boldText}>Weight</Text>
          <TextInput
            selectionColor={'black'}
            style={theme.input}
            value={weight}
            onChangeText={value => setWeight(value)}
            keyboardType='decimal-pad'
          />
          <Text style={theme.boldText}>Bottles</Text>
          <NumericInput
            rounded
            style={theme.input}
            value={bottles}
            onChange={value => setBottles(value)}
          />
          <Text style={theme.boldText}>Hours</Text>
          <NumericInput
            rounded
            style={theme.input}
            value={hours}
            onChange={value => setHours(value)}
          />
          <RadioForm
            style={theme.radioButton}
            labelStyle={theme.boldText}
            buttonColor={'#f2d6b0'}
            selectedButtonColor={'#f2d6b0'}
            animation={true}
            radio_props={genders}
            initial={0}
            onPress={value => setGender(value)}
          />
        </View>
        <View>
        <Text style={theme.end}>{result.toFixed(2)}</Text>

        <Pressable style={theme.end}
          onPress={calculate}>
          <Text style={theme.button}>Calculate</Text>
        </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

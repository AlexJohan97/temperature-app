import {
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./TemperatureToggle.style";
import { useState } from "react";

export default function TemperatureToggle() {
  const [text, setText] = useState(0);
  const [degreeType, setDegreeType] = useState("C");
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [isCold, setIsCold] = useState(false);

  function onChangeTemperature(text) {
    if (text === "") {
      setCelsius(0);
      setFahrenheit(0);
      return;
    }

    if (degreeType === "C") {
      console.log(text);
      parseFloat(text) < 0 ? setIsCold(true) : setIsCold(false);
      const fahrenheit = (parseFloat(text) * 9) / 5 + 32;
      setFahrenheit(fahrenheit);
    } else {
      parseFloat(text) < 32 ? setIsCold(true) : setIsCold(false);
      const celsius = ((parseFloat(text) - 32) * 5) / 9;
      setCelsius(celsius);
    }
    setText(text);
  }

  function onChangeDegreeType() {
    degreeType === "C" ? setDegreeType("F") : setDegreeType("C");
  }

  return (
    <ImageBackground
      source={
        isCold ? require("../assets/cold.png") : require("../assets/hot.png")
      }
      style={styles.container}
    >
      <Text style={styles.temperature}>
        {degreeType === "C" ? fahrenheit.toFixed(2) : celsius.toFixed(2)}°
        {degreeType === "C" ? "F" : "C"}
      </Text>
      <TouchableOpacity style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeTemperature(text)}
          keyboardType="numeric"
          maxLength={4}
        />
        <Text style={styles.degreeType}>°{degreeType}</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => onChangeDegreeType()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Convert to °C</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

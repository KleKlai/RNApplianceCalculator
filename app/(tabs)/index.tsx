import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { TextInput } from "react-native-gesture-handler";

import { Link } from "expo-router";
import { useState } from "react";
import calculateWattageCost from "../../constants/lib";

export default function TabOneScreen() {
  const [wattage, setWattage] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [result, setResult] = useState<any>(0);

  const onSubmit = () => {
    const computationResult = calculateWattageCost({ wattage, hours, cost });
    setResult(computationResult);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.getStartedText}>
        Know how much your gadgets and appliances consume so you stay in control
        and manage your monthly budget better.
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <View style={styles.formContainer}>
        <Text style={styles.header}>Star by filling out this form</Text>
        <Text style={styles.Inputtitle}>Wattage</Text>
        <Text>This is the appliance power rating</Text>
        <TextInput
          value={wattage}
          onChangeText={(value: string) => setWattage(value)}
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
        />
        <Text style={styles.Inputtitle}>Hours use per day</Text>
        <Text>How long do you operate the appliance daily?</Text>
        <TextInput
          onChangeText={(value: string) => setHours(value)}
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
        />
        <Text style={styles.Inputtitle}>1 kilowatt-hour (kWh) cost</Text>
        <TextInput
          onChangeText={(value: string) => setCost(value)}
          style={styles.input}
          keyboardType="numeric"
          placeholder="10"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.buttonCalculate,
              { backgroundColor: "#00C853", flex: 1 },
            ]}
            onPress={onSubmit}
          >
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonCalculate, { backgroundColor: "" }]}
          >
            <Text style={[styles.buttonText, { color: "#000" }]}>Reset</Text>
          </TouchableOpacity>
        </View>

        <Text>Result: {result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "800",
    paddingBottom: 20,
  },
  Inputtitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
  input: {
    height: 50,
    fontSize: 18,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    borderColor: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  buttonCalculate: {
    padding: 15,
    borderRadius: 50,
    marginLeft: 5,
    alignItems: "center",
  },
  buttonText: {
    padding: 5,
    fontSize: 15,
    letterSpacing: 0.5,
    fontWeight: "500",
    color: "#ffffff",
  },
});

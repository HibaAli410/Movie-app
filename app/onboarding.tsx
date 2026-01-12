import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Onboarding Screen</Text>
    </View>
  );
}

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});           
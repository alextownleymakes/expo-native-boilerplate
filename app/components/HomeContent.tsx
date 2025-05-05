import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeContent: React.FC = () => (
  <View style={styles.view}>
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.text}>Your boilerplate works!</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    margin: 10,
  },
});

export default HomeContent;

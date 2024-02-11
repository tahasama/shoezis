import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Kids = () => {
  return (
    <View style={styles.container}>
      <Text>Kids</Text>
    </View>
  );
};

export default Kids;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});

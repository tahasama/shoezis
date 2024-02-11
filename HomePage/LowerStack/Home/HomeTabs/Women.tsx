import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Women = () => {
  return (
    <View style={styles.container}>
      <Text>Women</Text>
    </View>
  );
};

export default Women;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

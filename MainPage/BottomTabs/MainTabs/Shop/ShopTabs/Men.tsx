import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Men = () => {
  return (
    <View style={styles.container}>
      <Text>Men</Text>
    </View>
  );
};

export default Men;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

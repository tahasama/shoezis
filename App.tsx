import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./HomePage/HomePage";

export default function App() {
  return (
    <>
      <Text>Hello Taha</Text>
      <HomePage />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

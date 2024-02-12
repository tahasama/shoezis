import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTabs from "./MainPage/BottomTabs/BottomTabs";
import Search from "./MainPage/Search/Search";

export default function App() {
  return (
    <>
      {/* <Text>Hello Taha</Text> */}

      <View style={styles.container} />
      <Search />
      <BottomTabs />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
    height: 40,
  },
});

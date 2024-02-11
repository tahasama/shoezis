import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Search from "./Search/Search";
import BottomTabs from "./LowerStack/BottomTabs";

const Tab = createMaterialTopTabNavigator();

const HomePage = () => {
  return (
    <>
      <Search />
      <BottomTabs />
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

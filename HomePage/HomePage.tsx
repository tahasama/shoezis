import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import LowerTabs from "./LowerStack/LowerTabs";
import Search from "./Search/Search";

const Tab = createMaterialTopTabNavigator();

const HomePage = () => {
  return (
    <>
      <Search />
      <LowerTabs />
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

import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Women from "./Women";
import Men from "./Men";
import Kids from "./Kids";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const HomeTab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name="Women" component={Women} />
      <HomeTab.Screen name="Men" component={Men} />
      <HomeTab.Screen name="Kids" component={Kids} />
    </HomeTab.Navigator>
  );
};

export default Home;

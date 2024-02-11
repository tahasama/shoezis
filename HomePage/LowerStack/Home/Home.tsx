import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Kids from "./HomeTabs/Kids";
import Men from "./HomeTabs/Men";
import Women from "./HomeTabs/Women";

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

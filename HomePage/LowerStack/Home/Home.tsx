import { useFonts } from "expo-font";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Kids from "./HomeTabs/Kids";
import Men from "./HomeTabs/Men";
import Women from "./HomeTabs/Women";

const HomeTab = createMaterialTopTabNavigator();

const Home = () => {
  const [fontsLoaded] = useFonts({
    "HelveticaNeue-Regular": require("../../../assets/fonts/HelveticaNeue-Regular.otf"),
    "HelveticaNeue-Bold": require("../../../assets/fonts/HelveticaNeue-Bold.otf"),
  });
  return (
    <HomeTab.Navigator
      screenOptions={(route) => ({
        tabBarItemStyle: {
          width: "auto",
          marginHorizontal: 10,
        },
        tabBarLabelStyle: {
          fontFamily: "HelveticaNeue-Bold",
        },
      })}
    >
      <HomeTab.Screen name="Women" component={Women} />
      <HomeTab.Screen name="Men" component={Men} />
      <HomeTab.Screen name="Kids" component={Kids} />
    </HomeTab.Navigator>
  );
};

export default Home;

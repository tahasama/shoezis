import { useFonts } from "expo-font";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Kids from "./ShopTabs/Kids";
import Men from "./ShopTabs/Men";
import Women from "./ShopTabs/Women";

const ShopTab = createMaterialTopTabNavigator();

const Shop = () => {
  const [fontsLoaded] = useFonts({
    "HelveticaNeue-Bold": require("../../../../assets/fonts/HelveticaNeue-Bold.otf"),
  });
  return (
    <ShopTab.Navigator
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
      <ShopTab.Screen name="Women" component={Women} />
      <ShopTab.Screen name="Men" component={Men} />
      <ShopTab.Screen name="Kids" component={Kids} />
    </ShopTab.Navigator>
  );
};

export default Shop;

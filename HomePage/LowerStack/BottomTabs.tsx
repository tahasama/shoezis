import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home/Home";
import Shop from "./Shop";
import Profile from "./Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import Bag from "./Bag";
import Favorite from "./Favorite";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const [fontsLoaded] = useFonts({
    "HelveticaNeue-Medium": require("../../assets/fonts/HelveticaNeue-Medium.otf"),
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: {
            fontFamily: "HelveticaNeue-Medium",
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home-outline";
              size = 27;
            } else if (route.name === "Shop") {
              iconName = "cart-outline";
            } else if (route.name === "Profile") {
              iconName = "account-outline";
              size = 29;
            } else if (route.name === "Favorite") {
              iconName = "heart-outline";
            } else if (route.name === "Bag") {
              iconName = "shopping-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          // tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 3,
            paddingTop: 3,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Bag" component={Bag} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import AddNewAssetScreen from "../screens/AddNewAssetScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoinDetailedScreen"
        component={CoinDetailedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddNewAssetScreen"
        component={AddNewAssetScreen}
        options={{
          title: "Add New Asset",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

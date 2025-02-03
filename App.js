import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./main";
import HomeScreen from "./HomeScreen";
// import ChatListScreen from './ChatListScreen'
import ConnectScreen from './ConnectScreen'
import ChatListScreen from "./ChatListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            /> */}
              <Stack.Screen
              name="ChatListScreen"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConnectScreen"
              component={ConnectScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./screens/Profile";
import Edit from "./screens/Edit";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [details, setDetails] = useState({
    name: "Olawunmi Dada",
    job: "Software developer",
    github: "@dread557",
    slack: "@Dread",
    bio: "React | Next | Ts/Js Wiz",
  });

  const handleChange = (key, value) => {
    setDetails({
      ...details,
      [key]: value,
    });
  };
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => <Profile {...props} details={details} />}
          </Stack.Screen>

          <Stack.Screen name="Edit" options={{ headerShown: false }}>
            {() => <Edit details={details} handleChange={handleChange} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

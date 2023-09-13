import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Edit = ({ details, handleChange }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.header}>Edit Profile</Text>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputHeader}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("name", text)}
          value={details.name}
          placeholder="Name"
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.inputHeader}>Role</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("job", text)}
          value={details.job}
          placeholder="Job"
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.inputHeader}>GitHub</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("github", text)}
          value={details.github}
          placeholder="GitHub"
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.inputHeader}>Slack</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("slack", text)}
          value={details.slack}
          placeholder="Slack"
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.inputHeader}>Bio</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("bio", text)}
          value={details.bio}
          placeholder="Bio"
          multiline
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    margin: 20,
  },
  inputBox: {
    margin: 10,
  },
  inputHeader: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    paddingBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#1d253b",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});

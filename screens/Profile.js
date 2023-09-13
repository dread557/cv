import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  StatusBar,
} from "react-native";

const Profile = ({ details, navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Image
          style={styles.headerBg}
          source={require("../assets/bg.jpg")}
          resizeMode="cover"
        />

        <Image
          style={styles.pfp}
          source={require("../assets/dp.jpg")}
          resizeMode="contain"
        />
        <Pressable
          style={styles.edit}
          onPress={() => navigation.navigate("Edit")}
        >
          <Image
            source={require("../assets/Pencil.png")}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.intro}>
        <Text style={styles.name}>{details.name}</Text>
        <Text style={styles.job}>{details.job}</Text>
      </View>
      <View style={styles.resume}>
        <View style={styles.resumeHeader}>
          <View style={styles.resumeHeaderBorder}></View>
          <Text style={styles.resumeHeaderText}>Contact Details</Text>
          <View style={styles.resumeHeaderBorder}></View>
        </View>
        <View style={styles.detailsBox}>
          <View style={styles.detail}>
            <Text style={styles.contactTitle}>Github :</Text>
            <Text style={styles.contactText}> {details.github}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.contactTitle}>Slack :</Text>
            <Text style={styles.contactText}>{details.slack}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.contactTitle}>Bio :</Text>
            <Text style={styles.contactText}> {details.bio}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d253b",
  },
  header: {
    justifyContent: "flex-start",
    position: "relative",
  },
  headerBg: {
    height: 200,
    width: Dimensions.get("window").width,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  pfp: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#1d253b",
    position: "absolute",
    top: 150,
    left: "50%",
    transform: [{ translateX: -55 }],
  },
  edit: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1d253b",
    position: "absolute",
    top: 230,
    left: "50%",
    transform: [{ translateX: 40 }],
  },
  intro: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  job: {
    color: "#9c9ea3",
    fontSize: 16,
    fontWeight: "bold",
  },
  resume: {
    marginTop: 20,
    flex: 1,
  },
  resumeHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  resumeHeaderText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 20,
    paddingRight: 10,
  },
  resumeHeaderBorder: {
    height: 1,
    width: 100,
    backgroundColor: "#9c9ea3",
    marginTop: 20,
  },
  detailsBox: {
    flex: 1,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 15,
  },
  contactTitle: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
  },
  contactText: {
    color: "#9c9ea3",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});

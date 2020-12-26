import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from "react-native";

const JobListings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            You are viewing a list of jobs
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("jobDetail")}
          >
            <Text>Open Job Details Screen</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
          All the jobs are listed here
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default JobListings;

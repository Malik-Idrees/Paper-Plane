import * as React from "react";
import { View, Text, SafeAreaView,Button } from "react-native";

const UpdateProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Update Your User Info
          </Text>
        </View>
        <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>
          Update
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default UpdateProfile;

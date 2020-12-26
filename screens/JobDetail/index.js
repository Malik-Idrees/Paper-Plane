import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";

const JobListingDetail = ({}) => {
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
            You are on Details Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default JobListingDetail;

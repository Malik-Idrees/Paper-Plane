import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { globalStyles, images } from "../styles/globalStyles";
import Icon from "./Icon";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Asset } from "expo-asset";


function JobBox({job}) {

  //default logo and cover uri
  const defaultLogoUri = Asset.fromModule(images.defaultLogo).uri;

  return (
    <View style={{ ...styles.jobBox, backgroundColor: "#fff" }}>
      <Image
        source={{ uri: job.employer.logo ? job.employer.logo : defaultLogoUri }}
        style={styles.logo}
      />
      <View style={styles.jobInfo}>
        {/* onPress={() => navigation.navigate("jobDetail")} */}
        <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>{job.title}</Text>
        </TouchableOpacity>
        <Text>{job.employer.name}</Text>
        <View style={styles.jobInfoBody}>
          <View style={globalStyles.rowAlignCenter}>
            <Icon name="location-on" size={18} color="#666666" />
            <Text size={14}>
              <Text style={{ marginLeft: 5 }}> {job.employer.address}</Text>
            </Text>
          </View>
          <View style={globalStyles.rowAlignCenter}>
            <Icon name="attach-money" size={18} color="#666666" />
            <Text style={{ fontSize: 14 }}>
              <Text style={{ marginLeft: 5 }}> {job.salary} </Text>
            </Text>
          </View>
        </View>
        <View style={styles.jobInfoFooter}>
          <Text style={{ fontSize: 12 }}>{job.level}</Text>
          <Text>Deadline: {job.deadline}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  jobBox: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderBottomColor: "#c1c1c1",
    borderBottomWidth: 1,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  jobInfo: { marginLeft: 30, flexGrow: 1, justifyContent: "center" },

  jobInfoBody: {
    marginLeft: 10,
    marginVertical: 5,
  },

  jobInfoFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default JobBox;

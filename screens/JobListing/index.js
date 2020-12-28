import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";

import Jobs from "../../data/jobListingData";
import JobBox from "../../components/JobBox"
import { FlatList } from "react-native-gesture-handler";

const JobListings = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            data={Jobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <JobBox job={item} />}
          />

        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flex: 1,
  },
  jobsCountWrap: {
    paddingVertical: 7,
    paddingLeft: 20,
    borderBottomColor: "#c1c1c1",
    borderBottomWidth: 1,
  },
});

export default JobListings;

// const styles = StyleSheet.create({
//   button: {
//     alignItems: "center",
//     textAlign: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//     width: 300,
//     marginTop: 16,
//   },
// });
///
// return (
//   <SafeAreaView style={{ flex: 1 }}>
//     <View style={{ flex: 1, padding: 16 }}>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {/* <FlatList
//             data={Jobs}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <JobBox job={item} onPress={gotoJobDetail} />
//             )}
            
//               />
//             }
//           /> */}
//         <Text
//           style={{
//             fontSize: 25,
//             textAlign: "center",
//             marginBottom: 16,
//           }}
//         >
//           You are viewing a list of jobs
//         </Text>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("jobDetail")}
//         >
//           <Text>Open Job Details Screen</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
//         All the jobs are listed here
//       </Text>
//     </View>
//   </SafeAreaView>
// );
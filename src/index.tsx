import React from "react";
import { StyleSheet, View } from "react-native";

import { Text, AppBootstrap } from "@components";

export default function App() {
  return (
    <AppBootstrap>
      <View style={styles.container}>
        <Text style={{ fontSize: 25 }} weigth="700">
          Yo
        </Text>
      </View>
    </AppBootstrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

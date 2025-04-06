import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EmergencyAlertScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Alerts</Text>
      <Text style={styles.text}>
        This screen will handle emergency alerts and notifications.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#757575",
  },
});

import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Home } from "@/src/screens/Home/Home";

export default function Index() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}

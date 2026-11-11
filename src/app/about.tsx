import React from "react";
import { ScrollView, View } from "react-native";
import AboutProfile from "../components/AboutProfile";
import ScreenBackground from "../components/ScreenBackground";
import pageStyles from "../styles/pageStyles";
import appStyles from "../styles/appStyles";

export default function AboutScreen() {
  return (
    <ScreenBackground>
      <ScrollView
        style={appStyles.screenScroll}
        contentContainerStyle={pageStyles.pageContent}
      >
        <View style={pageStyles.pageInner}>
          <AboutProfile />
        </View>
      </ScrollView>
    </ScreenBackground>
  );
}

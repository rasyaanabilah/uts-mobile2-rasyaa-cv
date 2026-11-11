import React from "react";
import { ScrollView, View } from "react-native";
import AcademicDashboard from "../components/AcademicDashboard";
import ScreenBackground from "../components/ScreenBackground";
import { academicData } from "../data/appData";
import styles from "../styles/pageStyles";
import appStyles from "../styles/appStyles";

export default function ScoreScreen() {
  return (
    <ScreenBackground>
      <ScrollView
        style={appStyles.screenScroll}
        contentContainerStyle={styles.pageContent}
      >
        <View style={styles.pageInner}>
          <AcademicDashboard data={academicData} />
        </View>
      </ScrollView>
    </ScreenBackground>
  );
}

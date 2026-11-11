import React from "react";
import { ScrollView, View } from "react-native";
import ContactForm from "../components/ContactForm";
import ScreenBackground from "../components/ScreenBackground";
import styles from "../styles/pageStyles";
import appStyles from "../styles/appStyles";

export default function ContactScreen() {
  return (
    <ScreenBackground>
      <ScrollView
        style={appStyles.screenScroll}
        contentContainerStyle={styles.pageContent}
      >
        <View style={styles.pageInner}>
          <ContactForm />
        </View>
      </ScrollView>
    </ScreenBackground>
  );
}

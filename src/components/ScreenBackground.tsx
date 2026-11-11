import React from "react";
import { View } from "react-native";
import styles from "../styles/appStyles";

type ScreenBackgroundProps = {
  children: React.ReactNode;
};

export default function ScreenBackground({
  children,
}: ScreenBackgroundProps) {
  return (
    <View style={styles.container}>
      <View
        pointerEvents="none"
        style={styles.backgroundDecoration}
      >
        <View style={styles.glowTopLeft} />
        <View style={styles.circleRight} />
        <View style={styles.circleSmall} />
        <View style={styles.verticalLineLeft} />
        <View style={styles.verticalLineRight} />
        <View style={styles.dotTop} />
        <View style={styles.dotBottom} />

        <View style={styles.gridDecoration}>
          {Array.from({ length: 12 }).map((_, index) => (
            <View key={index} style={styles.gridLine} />
          ))}
        </View>
      </View>
      {children}
    </View>
  );
}

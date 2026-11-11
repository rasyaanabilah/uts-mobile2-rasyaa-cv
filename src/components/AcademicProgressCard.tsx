import React from "react";
import { Text, View } from "react-native";
import type { LearningProgress } from "../data/academicTypes";
import styles from "../styles/academicStyles";

type AcademicProgressCardProps = {
  progress: LearningProgress;
  width: "100%" | "48%" | "23%";
};

export default function AcademicProgressCard({
  progress,
  width,
}: AcademicProgressCardProps) {
  const percentage = Math.min(Math.max(progress.percentage, 0), 100);

  return (
    <View style={[styles.progressCard, { width }]}>
      <View style={styles.progressHeader}>
        <Text style={styles.progressLabel}>{progress.label}</Text>
        <Text style={styles.progressPercentage}>
          {progress.percentage}%
        </Text>
      </View>
      <View
        accessibilityLabel={`${progress.label}: ${progress.percentage}%`}
        style={styles.progressTrack}
      >
        <View
          style={[
            styles.progressFill,
            { width: `${percentage}%` },
          ]}
        />
      </View>
    </View>
  );
}

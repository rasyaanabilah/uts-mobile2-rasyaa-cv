import React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import type { AcademicData } from "../data/academicTypes";
import EmptyState from "./EmptyState";
import AcademicProgressCard from "./AcademicProgressCard";
import styles from "../styles/academicStyles";

type AcademicDashboardProps = {
  data: AcademicData | null;
};

export default function AcademicDashboard({
  data,
}: AcademicDashboardProps) {
  const { width: windowWidth } = useWindowDimensions();
  const progressCardWidth: "100%" | "48%" | "23%" =
    windowWidth < 600 ? "100%" : windowWidth < 900 ? "48%" : "23%";

  if (
    !data ||
    !data.student ||
    !data.currentScore ||
    !Array.isArray(data.learningProgress)
  ) {
    return (
      <View style={styles.container}>
        <EmptyState
          title="Data akademik belum tersedia"
          description="Informasi nilai belum dapat ditampilkan. Silakan periksa kembali data akademik lokal."
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeading}>
        <Text style={styles.eyebrow}>ACADEMIC OVERVIEW</Text>
        <Text style={styles.title}>My Score</Text>
        <Text style={styles.description}>
          Capaian akademik untuk {data.course}
        </Text>
      </View>

      <View style={styles.identityCard}>
        <View style={styles.identityItem}>
          <Text style={styles.metaLabel}>STUDENT</Text>
          <Text style={styles.metaValue}>{data.student.name}</Text>
          <Text style={styles.metaSecondary}>NIM {data.student.nim}</Text>
        </View>
        <View style={styles.identityItem}>
          <Text style={styles.metaLabel}>LECTURER</Text>
          <Text style={styles.metaValue}>{data.instructor}</Text>
          <Text style={styles.metaSecondary}>{data.course}</Text>
        </View>
      </View>

      <View style={styles.highlights}>
        <View style={styles.scoreCard}>
          <Text style={styles.metaLabel}>CURRENT SCORE</Text>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreValue}>{data.currentScore.value}</Text>
            <View style={styles.gradeBadge}>
              <Text style={styles.gradeValue}>{data.currentScore.grade}</Text>
              <Text style={styles.gradeLabel}>GRADE</Text>
            </View>
          </View>
        </View>

        <View style={styles.pointsCard}>
          <Text style={styles.metaLabel}>LEARNING POINTS</Text>
          <Text style={styles.pointsValue}>
            {data.learningPoints.toLocaleString("id-ID")}
          </Text>
          <Text style={styles.pointsUnit}>LP</Text>
        </View>
      </View>

      <Text style={styles.progressHeading}>Learning Progress</Text>
      {data.learningProgress.length > 0 ? (
        <View style={styles.progressGrid}>
          {data.learningProgress.map((progress) => (
            <AcademicProgressCard
              key={progress.id}
              progress={progress}
              width={progressCardWidth}
            />
          ))}
        </View>
      ) : (
        <EmptyState
          title="Progress belum tersedia"
          description="Belum ada data progress belajar untuk ditampilkan."
        />
      )}
    </View>
  );
}

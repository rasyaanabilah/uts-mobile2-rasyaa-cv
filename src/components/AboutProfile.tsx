import React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import styles from "../styles/pageStyles";

const journeyItems = [
  {
    number: "01",
    title: "Background",
    description:
      "Studi Sistem Informasi mempertemukan ketertarikan saya pada teknologi dengan cara memahami kebutuhan dan menyusun solusi yang bermanfaat.",
  },
  {
    number: "02",
    title: "Motivation",
    description:
      "Rasa ingin tahu mendorong saya untuk terus mencoba hal baru, memahami cara kerja teknologi, dan mengubah ide menjadi karya digital.",
  },
];

const goalItems = [
  {
    title: "Career Direction",
    description:
      "Membangun karier di bidang teknologi dan ikut mengembangkan produk digital yang berguna serta mudah digunakan.",
  },
  {
    title: "Continuous Growth",
    description:
      "Memperkuat kemampuan teknis, kreativitas, dan komunikasi melalui proses belajar dan latihan yang konsisten.",
  },
];

export default function AboutProfile() {
  const { width } = useWindowDimensions();
  const isWide = width >= 720;

  return (
    <View style={styles.aboutSection}>
      <View style={styles.aboutHeading}>
        <Text style={styles.aboutEyebrow}>GET TO KNOW ME</Text>
        <Text style={styles.aboutTitle}>More Than a Student</Text>
        <Text style={styles.aboutLead}>
          Perjalanan belajar, hal yang memotivasi, dan arah yang ingin saya
          tuju.
        </Text>
      </View>

      <View
        style={[
          styles.aboutJourneyGrid,
          isWide && styles.aboutJourneyGridWide,
        ]}
      >
        {journeyItems.map((item) => (
          <View key={item.number} style={styles.aboutJourneyCard}>
            <Text style={styles.aboutCardNumber}>{item.number}</Text>
            <Text style={styles.aboutCardTitle}>{item.title}</Text>
            <Text style={styles.aboutCardDescription}>{item.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.aboutGoalsCard}>
        <View style={styles.aboutGoalsHeading}>
          <Text style={styles.aboutEyebrow}>LOOKING AHEAD</Text>
          <Text style={styles.aboutGoalsTitle}>My Goals</Text>
        </View>
        <View
          style={[
            styles.aboutGoalGrid,
            isWide && styles.aboutGoalGridWide,
          ]}
        >
          {goalItems.map((item, index) => (
            <View key={item.title} style={styles.aboutGoalItem}>
              <View style={styles.aboutGoalMarker}>
                <Text style={styles.aboutGoalMarkerText}>
                  {String(index + 1).padStart(2, "0")}
                </Text>
              </View>
              <View style={styles.aboutGoalCopy}>
                <Text style={styles.aboutGoalTitle}>{item.title}</Text>
                <Text style={styles.aboutCardDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

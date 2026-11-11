
import React from "react";
import { View, Text } from "react-native";
import type { ProfileData } from "../data/profileTypes";
import styles from "../styles/profileStyles";

type ProfileIntroductionProps = {
  width: number;
  isDesktop: boolean;
  profile: ProfileData;
};

export default function ProfileIntroduction({
  width,
  isDesktop,
  profile,
}: ProfileIntroductionProps) {
  const nameParts = profile.name.trim().split(/\s+/);
  const accentName = nameParts.pop() ?? "";
  const primaryName = nameParts.join(" ");

  return (
    <View
      style={[
        styles.introduction,
        {
          width: isDesktop ? undefined : "100%",
          flex: isDesktop ? 1 : undefined,
          maxWidth: 520,
          alignItems: isDesktop ? "flex-start" : "center",
          paddingHorizontal: isDesktop ? 12 : 10,
        },
      ]}
    >
      <Text style={styles.introLabel}>
        PERSONAL PROFILE
      </Text>

      <Text
        style={[
          styles.introTitle,
          {
            textAlign: isDesktop ? "left" : "center",
            fontSize: width < 400 ? 34 : 46,
            lineHeight: width < 400 ? 42 : 58,
          },
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.75}
      >
        {primaryName}{" "}
        <Text style={styles.introTitleAccent}>
          {accentName}
        </Text>
      </Text>

      <View style={styles.introLine} />

      <Text
        style={[
          styles.introProfession,
          {
            textAlign: isDesktop ? "left" : "center",
          },
        ]}
      >
        {profile.profession}
      </Text>

      <Text
        style={[
          styles.introDescription,
          {
            textAlign: isDesktop ? "left" : "center",
          },
        ]}
      >
        {profile.description}
      </Text>

      <View style={styles.introTags}>
        {profile.tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.introFooter}>
        PERSONAL BRANDING / 2026
      </Text>
    </View>
  );
}

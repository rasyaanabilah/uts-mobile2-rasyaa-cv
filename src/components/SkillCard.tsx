import React from "react";
import { Text, View } from "react-native";
import type { Skill } from "../data/skillTypes";
import styles from "../styles/skillsStyles";

type SkillCardProps = {
  skill: Skill;
  isGrid: boolean;
};

export default function SkillCard({ skill, isGrid }: SkillCardProps) {
  return (
    <View
      style={[
        styles.skillCard,
        isGrid ? styles.gridCard : styles.singleColumnCard,
      ]}
    >
      <View style={styles.cardAccent} />
      <Text style={styles.skillName}>{skill.name}</Text>
      <Text style={styles.category}>{skill.category}</Text>
    </View>
  );
}

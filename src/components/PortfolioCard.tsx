import React from "react";
import { Text, View } from "react-native";
import type { PortfolioProject } from "../data/portfolioTypes";
import styles from "../styles/portfolioStyles";

type PortfolioCardProps = {
  project: PortfolioProject;
  columns: number;
};

export default function PortfolioCard({
  project,
  columns,
}: PortfolioCardProps) {
  return (
    <View
      style={[
        styles.card,
        columns > 1 ? styles.gridCard : styles.singleColumnCard,
      ]}
    >
      <Text style={styles.category}>{project.category}</Text>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.description}>{project.description}</Text>
      <View style={styles.technologyList}>
        {project.technologies.map((technology) => (
          <Text key={technology} style={styles.technology}>
            {technology}
          </Text>
        ))}
      </View>
    </View>
  );
}

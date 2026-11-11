import React from "react";
import { Animated, Linking, Pressable, Text, View } from "react-native";
import type { PortfolioProject } from "../data/portfolioTypes";
import styles from "../styles/portfolioStyles";

type PortfolioCardProps = {
  project: PortfolioProject;
  columns: number;
  isVisible?: boolean;
  animationDelay?: number;
  enableHoverEffects?: boolean;
};

export default function PortfolioCard({
  project,
  columns,
  isVisible,
  animationDelay = 0,
  enableHoverEffects = false,
}: PortfolioCardProps) {
  const [hovered, setHovered] = React.useState(false);
  const [buttonHovered, setButtonHovered] = React.useState(false);
  const reveal = React.useRef(
    new Animated.Value(isVisible === undefined ? 1 : 0),
  ).current;
  const hoverProgress = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(reveal, {
        toValue: 1,
        duration: 520,
        delay: animationDelay,
        useNativeDriver: true,
      }).start();
    }
  }, [animationDelay, isVisible, reveal]);

  React.useEffect(() => {
    Animated.timing(hoverProgress, {
      toValue: hovered ? 1 : 0,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }, [hovered, hoverProgress]);

  const revealStyle = {
    opacity: reveal,
    transform: [
      {
        translateY: reveal.interpolate({
          inputRange: [0, 1],
          outputRange: [22, 0],
        }),
      },
    ],
  };
  const hoverStyle = {
    transform: [
      {
        translateY: hoverProgress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -4],
        }),
      },
      {
        scale: hoverProgress.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.01],
        }),
      },
    ],
  };

  return (
    <Pressable
      onHoverIn={
        enableHoverEffects ? () => setHovered(true) : undefined
      }
      onHoverOut={
        enableHoverEffects ? () => setHovered(false) : undefined
      }
      style={[
        styles.card,
        columns > 1 ? styles.gridCard : styles.singleColumnCard,
        enableHoverEffects && hovered && styles.cardHovered,
      ]}
    >
      <Animated.View
        style={[
          styles.cardAnimated,
          isVisible !== undefined && revealStyle,
          enableHoverEffects && hoverStyle,
        ]}
      >
        <View
          style={[
            styles.thumbnail,
            { borderColor: `${project.thumbnailAccent}66` },
          ]}
        >
          <View
            style={[
              styles.thumbnailAccent,
              { backgroundColor: project.thumbnailAccent },
            ]}
          />
          <Text style={styles.thumbnailNumber}>PROJECT {project.number}</Text>
          <Text style={styles.thumbnailTitle}>{project.title}</Text>
          <View style={styles.thumbnailArtwork}>
            <View
              style={[
                styles.artworkBlock,
                { backgroundColor: `${project.thumbnailAccent}33` },
              ]}
            />
            <View
              style={[
                styles.artworkLine,
                { backgroundColor: project.thumbnailAccent },
              ]}
            />
            <View style={styles.artworkLineShort} />
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardMeta}>
            <Text style={styles.projectNumber}>/{project.number}</Text>
            <Text style={styles.category}>{project.category}</Text>
          </View>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.description}>{project.description}</Text>
          {project.technologies.length > 0 && (
            <View style={styles.technologyList}>
              {project.technologies.map((technology) => (
                <Text key={technology} style={styles.technology}>
                  {technology}
                </Text>
              ))}
            </View>
          )}
          <Pressable
            accessibilityRole="link"
            accessibilityLabel={`Live Preview: ${project.title}`}
            accessibilityState={{ disabled: !project.url }}
            disabled={!project.url}
            onHoverIn={() => setButtonHovered(true)}
            onHoverOut={() => setButtonHovered(false)}
            onPress={() => {
              if (project.url) {
                void Linking.openURL(project.url);
              }
            }}
            style={({ pressed }) => [
              styles.previewButton,
              !project.url && styles.previewButtonDisabled,
              (hovered || buttonHovered) &&
                project.url &&
                styles.previewButtonHovered,
              pressed && project.url && styles.previewButtonPressed,
            ]}
          >
            <Text
              style={[
                styles.previewButtonText,
                !project.url && styles.previewButtonTextDisabled,
              ]}
            >
              Live Preview
            </Text>
            <Text style={styles.previewArrow}>{project.url ? "↗" : "—"}</Text>
          </Pressable>
          {!project.url && (
            <Text style={styles.previewNote}>Demo belum tersedia</Text>
          )}
        </View>
      </Animated.View>
    </Pressable>
  );
}

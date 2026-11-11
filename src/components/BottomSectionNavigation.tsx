import React from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import styles from "../styles/onePageStyles";

export const SECTION_NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "score", label: "My Score" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof SECTION_NAV_ITEMS)[number]["id"];

type BottomSectionNavigationProps = {
  activeSection: SectionId;
  bottomInset: number;
  onSelect: (section: SectionId) => void;
};

export default function BottomSectionNavigation({
  activeSection,
  bottomInset,
  onSelect,
}: BottomSectionNavigationProps) {
  const { width } = useWindowDimensions();

  return (
    <View
      accessibilityRole="tablist"
      style={[styles.navigation, { paddingBottom: Math.max(bottomInset, 6) }]}
    >
      {SECTION_NAV_ITEMS.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <Pressable
            key={id}
            accessibilityRole="tab"
            accessibilityLabel={`Buka section ${label}`}
            accessibilityHint={`Gulir ke section ${label}.`}
            accessibilityState={{ selected: isActive }}
            onPress={() => onSelect(id)}
            style={({ pressed }) => [
              styles.navigationItem,
              isActive && styles.navigationItemActive,
              pressed && styles.navigationItemPressed,
            ]}
          >
            <View
              style={[
                styles.navigationIndicator,
                isActive && styles.navigationIndicatorActive,
              ]}
            />
            <Text
              adjustsFontSizeToFit
              minimumFontScale={0.65}
              numberOfLines={1}
              style={[
                styles.navigationLabel,
                { fontSize: width < 380 ? 9 : 10 },
                isActive && styles.navigationLabelActive,
              ]}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

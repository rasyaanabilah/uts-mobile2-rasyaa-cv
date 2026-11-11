import React from "react";
import {
  FlatList,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import EmptyState from "../components/EmptyState";
import PortfolioCard from "../components/PortfolioCard";
import ScreenBackground from "../components/ScreenBackground";
import { portfolio } from "../data/appData";
import type { PortfolioProject } from "../data/portfolioTypes";
import styles from "../styles/pageStyles";
import portfolioStyles from "../styles/portfolioStyles";

const PORTFOLIO_VIEWABILITY_CONFIG: NonNullable<
  React.ComponentProps<typeof FlatList<PortfolioProject>>["viewabilityConfig"]
> = {
  itemVisiblePercentThreshold: 20,
};

export default function PortfolioScreen() {
  const { width } = useWindowDimensions();
  const columns = width >= 650 ? 2 : 1;
  const [visibleProjectIds, setVisibleProjectIds] = React.useState<Set<string>>(
    () => new Set(),
  );
  const onViewableItemsChanged = React.useRef<
    NonNullable<
      React.ComponentProps<
        typeof FlatList<PortfolioProject>
      >["onViewableItemsChanged"]
    >
  >(
    ({ viewableItems }) => {
      setVisibleProjectIds((currentIds) => {
        const nextIds = new Set(currentIds);
        viewableItems.forEach(({ item }) => {
          if (item) {
            nextIds.add(item.id);
          }
        });
        return nextIds;
      });
    },
  ).current;

  return (
    <ScreenBackground>
      <FlatList
        key={`portfolio-${columns}`}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={portfolio}
        numColumns={columns}
        keyExtractor={(project) => project.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={PORTFOLIO_VIEWABILITY_CONFIG}
        renderItem={({ item, index }) => (
          <PortfolioCard
            project={item}
            columns={columns}
            isVisible={visibleProjectIds.has(item.id)}
            animationDelay={(index % columns) * 90}
            enableHoverEffects
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title="Portfolio belum tersedia"
            description="Belum ada proyek untuk ditampilkan. Data proyek dapat ditambahkan ke file portfolio.json."
          />
        }
        columnWrapperStyle={
          columns > 1 ? styles.columnWrapper : undefined
        }
        ListHeaderComponent={
          <View style={styles.pageInner}>
            <View style={styles.pageHeading}>
              <Text style={styles.eyebrow}>SELECTED WORKS</Text>
              <Text style={styles.pageTitle}>My Projects</Text>
              <Text style={styles.pageDescription}>
                A collection of my academic and personal projects
              </Text>
              <Text style={portfolioStyles.projectCount}>
                {portfolio.length.toString().padStart(2, "0")} PROJECTS
              </Text>
            </View>
          </View>
        }
      />
    </ScreenBackground>
  );
}

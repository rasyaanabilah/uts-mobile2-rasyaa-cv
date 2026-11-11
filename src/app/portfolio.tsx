import React from "react";
import { FlatList, Text, View, useWindowDimensions } from "react-native";
import EmptyState from "../components/EmptyState";
import PortfolioCard from "../components/PortfolioCard";
import ScreenBackground from "../components/ScreenBackground";
import { portfolio } from "../data/appData";
import styles from "../styles/pageStyles";

export default function PortfolioScreen() {
  const { width } = useWindowDimensions();
  const columns = width >= 1000 ? 3 : width >= 650 ? 2 : 1;

  return (
    <ScreenBackground>
      <FlatList
        key={`portfolio-${columns}`}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={portfolio}
        numColumns={columns}
        keyExtractor={(project) => project.id}
        renderItem={({ item }) => (
          <PortfolioCard project={item} columns={columns} />
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
              <Text style={styles.eyebrow}>SELECTED WORK</Text>
              <Text style={styles.pageTitle}>Portfolio</Text>
              <Text style={styles.pageDescription}>
                Academic project information from local portfolio data.
              </Text>
            </View>
          </View>
        }
      />
    </ScreenBackground>
  );
}

import React from "react";
import { FlatList, Text, View, useWindowDimensions } from "react-native";
import EmptyState from "../components/EmptyState";
import ScreenBackground from "../components/ScreenBackground";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/appData";
import pageStyles from "../styles/pageStyles";

export default function SkillsScreen() {
  const { width } = useWindowDimensions();
  const columns = width >= 1000 ? 3 : width >= 650 ? 2 : 1;
  const horizontalPadding = width < 360 ? 16 : 24;

  return (
    <ScreenBackground>
      <FlatList
        key={`skills-${columns}`}
        style={pageStyles.list}
        contentContainerStyle={[
          pageStyles.listContent,
          { paddingHorizontal: horizontalPadding },
        ]}
        data={skills}
        numColumns={columns}
        keyExtractor={(skill) => skill.id}
        renderItem={({ item }) => (
          <SkillCard skill={item} isGrid={columns > 1} />
        )}
        ListEmptyComponent={
          <EmptyState
            title="Skills belum tersedia"
            description="Belum ada data skills untuk ditampilkan. Data dapat ditambahkan ke file skills.json."
          />
        }
        columnWrapperStyle={
          columns > 1 ? pageStyles.columnWrapper : undefined
        }
        ListHeaderComponent={
          <View style={pageStyles.pageInner}>
            <View style={pageStyles.pageHeading}>
              <Text style={pageStyles.eyebrow}>WHAT I DO</Text>
              <Text style={pageStyles.pageTitle}>Skills</Text>
              <Text style={pageStyles.pageDescription}>
                Skills and interests loaded from the local JSON data.
              </Text>
            </View>
          </View>
        }
      />
    </ScreenBackground>
  );
}

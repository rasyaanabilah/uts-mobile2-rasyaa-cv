import React, { useCallback, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollViewInstance,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AboutProfile from "../components/AboutProfile";
import AcademicDashboard from "../components/AcademicDashboard";
import BottomSectionNavigation, {
  SECTION_NAV_ITEMS,
} from "../components/BottomSectionNavigation";
import type { SectionId } from "../components/BottomSectionNavigation";
import ContactForm from "../components/ContactForm";
import EmptyState from "../components/EmptyState";
import PortfolioCard from "../components/PortfolioCard";
import ProfileIntroduction from "../components/ProfileIntroduction";
import ScreenBackground from "../components/ScreenBackground";
import SkillCard from "../components/SkillCard";
import StudentIdCard from "../components/StudentIdCard";
import { academicData, portfolio, profileData, skills } from "../data/appData";
import pageStyles from "../styles/pageStyles";
import portfolioStyles from "../styles/portfolioStyles";
import skillsStyles from "../styles/skillsStyles";
import styles from "../styles/onePageStyles";

const NAVIGATION_HEIGHT = 68;

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollViewInstance | null>(null);
  const sectionOffsets = useRef<Partial<Record<SectionId, number>>>({});
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const isDesktop = width >= 900;
  const horizontalPadding = width < 360 ? 16 : width < 600 ? 24 : 40;
  const contentWidth = Math.min(width - horizontalPadding * 2, 1100);
  const columns = width >= 1000 ? 3 : width >= 650 ? 2 : 1;
  const gridItemWidth = columns === 1 ? "100%" : columns === 2 ? "48%" : "31%";

  const handleSectionLayout = useCallback(
    (section: SectionId) => (event: LayoutChangeEvent) => {
      sectionOffsets.current[section] = event.nativeEvent.layout.y;
    },
    [],
  );

  const scrollToSection = useCallback((section: SectionId) => {
    const offset = sectionOffsets.current[section];
    if (offset === undefined) {
      return;
    }

    setActiveSection(section);
    scrollRef.current?.scrollTo({
      y: Math.max(offset - 8, 0),
      animated: true,
    });
  }, []);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentOffset, layoutMeasurement } = event.nativeEvent;
      const activePosition = contentOffset.y + layoutMeasurement.height * 0.3;
      let nextSection: SectionId = "home";

      for (const { id } of SECTION_NAV_ITEMS) {
        const offset = sectionOffsets.current[id];
        if (offset !== undefined && offset <= activePosition) {
          nextSection = id;
        }
      }

      setActiveSection((current) =>
        current === nextSection ? current : nextSection,
      );
    },
    [],
  );

  return (
    <ScreenBackground>
      <View style={styles.screen}>
        <ScrollView
          ref={scrollRef}
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: NAVIGATION_HEIGHT + insets.bottom },
          ]}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View
            onLayout={handleSectionLayout("home")}
            style={[
              styles.section,
              styles.homeSection,
              { minHeight: height },
            ]}
          >
            <View
              style={[
                styles.sectionInner,
                styles.homeContent,
                {
                  flexDirection: isDesktop ? "row" : "column",
                  gap: isDesktop ? 50 : 36,
                },
              ]}
            >
              {profileData ? (
                <>
                  <ProfileIntroduction
                    width={contentWidth}
                    isDesktop={isDesktop}
                    profile={profileData}
                  />
                  <StudentIdCard
                    width={contentWidth}
                    isDesktop={isDesktop}
                    profile={profileData}
                  />
                </>
              ) : (
                <EmptyState
                  title="Profil belum tersedia"
                  description="Data profil atau foto belum dapat ditampilkan. Periksa file profil dan aset foto lokal."
                />
              )}
            </View>
          </View>

          <View
            onLayout={handleSectionLayout("about")}
            style={styles.section}
          >
            <View style={styles.sectionInner}>
              <AboutProfile />
            </View>
          </View>

          <View
            onLayout={handleSectionLayout("skills")}
            style={styles.section}
          >
            <View style={styles.sectionInner}>
              <View style={pageStyles.pageHeading}>
                <Text style={pageStyles.eyebrow}>WHAT I DO</Text>
                <Text style={pageStyles.pageTitle}>Skills</Text>
                <Text style={pageStyles.pageDescription}>
                  Skills and interests loaded from the local JSON data.
                </Text>
              </View>
              {skills.length > 0 ? (
                <View style={styles.skillGrid}>
                  {skills.map((skill) => (
                    <View
                      key={skill.id}
                      style={[
                        columns === 1
                          ? skillsStyles.singleColumnCard
                          : skillsStyles.gridCard,
                        { width: gridItemWidth },
                      ]}
                    >
                      <SkillCard skill={skill} isGrid={columns > 1} />
                    </View>
                  ))}
                </View>
              ) : (
                <EmptyState
                  title="Skills belum tersedia"
                  description="Belum ada data skills untuk ditampilkan. Data dapat ditambahkan ke file skills.json."
                />
              )}
            </View>
          </View>

          <View
            onLayout={handleSectionLayout("portfolio")}
            style={styles.section}
          >
            <View style={styles.sectionInner}>
              <View style={pageStyles.pageHeading}>
                <Text style={pageStyles.eyebrow}>SELECTED WORK</Text>
                <Text style={pageStyles.pageTitle}>Portfolio</Text>
                <Text style={pageStyles.pageDescription}>
                  Academic project information from local portfolio data.
                </Text>
              </View>
              {portfolio.length > 0 ? (
                <View style={styles.portfolioGrid}>
                  {portfolio.map((project) => (
                    <View
                      key={project.id}
                      style={[
                        columns === 1
                          ? portfolioStyles.singleColumnCard
                          : portfolioStyles.gridCard,
                        { width: gridItemWidth },
                      ]}
                    >
                      <PortfolioCard project={project} columns={columns} />
                    </View>
                  ))}
                </View>
              ) : (
                <EmptyState
                  title="Portfolio belum tersedia"
                  description="Belum ada proyek untuk ditampilkan. Data proyek dapat ditambahkan ke file portfolio.json."
                />
              )}
            </View>
          </View>

          <View
            onLayout={handleSectionLayout("score")}
            style={styles.section}
          >
            <View style={styles.sectionInner}>
              <AcademicDashboard data={academicData} />
            </View>
          </View>

          <View
            onLayout={handleSectionLayout("contact")}
            style={styles.section}
          >
            <View style={styles.sectionInner}>
              <ContactForm />
            </View>
          </View>
        </ScrollView>

        <BottomSectionNavigation
          activeSection={activeSection}
          bottomInset={insets.bottom}
          onSelect={scrollToSection}
        />
      </View>
    </ScreenBackground>
  );
}

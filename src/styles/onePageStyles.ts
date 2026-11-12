import { StyleSheet } from "react-native";

const ACCENT = "#10B981";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
    width: "100%",
  },

  scrollContent: {
    alignItems: "stretch",
    paddingBottom: 80,
  },

  section: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 64,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(16,185,129,0.12)",
  },

  homeSection: {
    justifyContent: "center",
    paddingVertical: 48,
  },

  sectionInner: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
  },

  homeContent: {
    alignItems: "center",
    justifyContent: "center",
  },

  skillGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 14,
  },

  portfolioGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 16,
    rowGap: 18,
  },

  navigation: {
    position: "absolute",
    zIndex: 20,
    elevation: 20,
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 62,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#26343A",
    backgroundColor: "#10151C",
    paddingTop: 5,
    paddingHorizontal: 4,
  },

  navigationItem: {
    flex: 1,
    minWidth: 0,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 2,
    opacity: 0.72,
  },

  navigationItemActive: {
    opacity: 1,
  },

  navigationItemPressed: {
    opacity: 0.55,
  },

  navigationIndicator: {
    width: 5,
    height: 5,
    marginBottom: 5,
    borderRadius: 3,
    backgroundColor: "transparent",
  },

  navigationIndicatorActive: {
    backgroundColor: ACCENT,
    shadowColor: ACCENT,
    shadowOpacity: 0.65,
    shadowRadius: 6,
  },

  navigationLabel: {
    color: "#A1A1AA",
    fontWeight: "700",
    textAlign: "center",
  },

  navigationLabelActive: {
    color: ACCENT,
  },
});

export default styles;

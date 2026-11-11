import { StyleSheet } from "react-native";

const ACCENT = "#10B981";
const SILVER = "#A1A1AA";

const styles = StyleSheet.create({
  pageContent: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 36,
  },

  pageInner: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
  },

  pageHeading: {
    marginBottom: 24,
  },

  eyebrow: {
    color: ACCENT,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2.5,
    marginBottom: 8,
  },

  pageTitle: {
    color: "#F8FAFC",
    fontSize: 30,
    fontWeight: "900",
  },

  pageDescription: {
    color: SILVER,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },

  emptyState: {
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.28)",
    borderRadius: 14,
    backgroundColor: "#10151C",
  },

  emptyStateTitle: {
    color: "#F8FAFC",
    fontSize: 16,
    fontWeight: "800",
  },

  emptyStateDescription: {
    color: "#D4D4D8",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },

  aboutSection: {
    width: "100%",
  },

  aboutHeading: {
    marginBottom: 28,
  },

  aboutEyebrow: {
    color: ACCENT,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2.5,
    marginBottom: 10,
  },

  aboutTitle: {
    color: "#F8FAFC",
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 42,
  },

  aboutLead: {
    maxWidth: 620,
    color: SILVER,
    fontSize: 15,
    lineHeight: 24,
    marginTop: 10,
  },

  aboutJourneyGrid: {
    gap: 14,
  },

  aboutJourneyGridWide: {
    flexDirection: "row",
  },

  aboutJourneyCard: {
    flex: 1,
    minHeight: 190,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.26)",
    borderRadius: 16,
    backgroundColor: "#10151C",
  },

  aboutCardNumber: {
    color: ACCENT,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  aboutCardTitle: {
    color: "#F8FAFC",
    fontSize: 19,
    fontWeight: "800",
    marginTop: 18,
  },

  aboutCardDescription: {
    color: SILVER,
    fontSize: 14,
    lineHeight: 23,
    marginTop: 10,
  },

  aboutGoalsCard: {
    marginTop: 18,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.35)",
    borderRadius: 16,
    backgroundColor: "#101A18",
  },

  aboutGoalsHeading: {
    marginBottom: 18,
  },

  aboutGoalsTitle: {
    color: "#F8FAFC",
    fontSize: 23,
    fontWeight: "900",
  },

  aboutGoalGrid: {
    gap: 18,
  },

  aboutGoalGridWide: {
    flexDirection: "row",
  },

  aboutGoalItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },

  aboutGoalMarker: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.45)",
    borderRadius: 17,
    backgroundColor: "rgba(16,185,129,0.1)",
  },

  aboutGoalMarkerText: {
    color: ACCENT,
    fontSize: 10,
    fontWeight: "800",
  },

  aboutGoalCopy: {
    flex: 1,
  },

  aboutGoalTitle: {
    color: "#F8FAFC",
    fontSize: 14,
    fontWeight: "800",
  },

  list: {
    flex: 1,
    width: "100%",
  },

  listContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 36,
  },

  columnWrapper: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    columnGap: 16,
  },
});

export default styles;

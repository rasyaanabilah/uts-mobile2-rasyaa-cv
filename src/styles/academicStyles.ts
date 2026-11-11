import { StyleSheet } from "react-native";

const ACCENT = "#10B981";
const SILVER = "#A1A1AA";
const CARD_BG = "#101A18";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    marginTop: 64,
    zIndex: 2,
  },

  sectionHeading: {
    marginBottom: 20,
  },

  eyebrow: {
    color: ACCENT,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2.5,
    marginBottom: 8,
  },

  title: {
    color: "#F8FAFC",
    fontSize: 28,
    fontWeight: "900",
  },

  description: {
    color: SILVER,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },

  identityCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.28)",
    borderRadius: 14,
    backgroundColor: CARD_BG,
  },

  identityItem: {
    flex: 1,
    minWidth: 220,
  },

  metaLabel: {
    color: SILVER,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  metaValue: {
    color: "#F8FAFC",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 8,
  },

  metaSecondary: {
    color: SILVER,
    fontSize: 12,
    marginTop: 5,
  },

  highlights: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 14,
  },

  scoreCard: {
    flex: 2,
    minWidth: 260,
    minHeight: 150,
    justifyContent: "center",
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.45)",
    borderRadius: 14,
    backgroundColor: "#10231D",
  },

  scoreRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },

  scoreValue: {
    color: "#F8FAFC",
    fontSize: 56,
    fontWeight: "900",
    lineHeight: 64,
  },

  gradeBadge: {
    width: 68,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: ACCENT,
    borderRadius: 14,
    backgroundColor: "rgba(16,185,129,0.12)",
  },

  gradeValue: {
    color: ACCENT,
    fontSize: 28,
    fontWeight: "900",
  },

  gradeLabel: {
    color: SILVER,
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1,
  },

  pointsCard: {
    flex: 1,
    minWidth: 220,
    minHeight: 150,
    justifyContent: "center",
    padding: 22,
    borderWidth: 1,
    borderColor: "#26343A",
    borderRadius: 14,
    backgroundColor: CARD_BG,
  },

  pointsValue: {
    color: ACCENT,
    fontSize: 32,
    fontWeight: "900",
    marginTop: 12,
  },

  pointsUnit: {
    color: SILVER,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 2,
  },

  progressHeading: {
    color: "#F8FAFC",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 28,
    marginBottom: 14,
  },

  progressGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  progressCard: {
    minHeight: 88,
    justifyContent: "center",
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#26343A",
    borderRadius: 12,
    backgroundColor: CARD_BG,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  progressLabel: {
    color: "#F8FAFC",
    fontSize: 13,
    fontWeight: "700",
  },

  progressPercentage: {
    color: ACCENT,
    fontSize: 14,
    fontWeight: "900",
  },

  progressTrack: {
    height: 7,
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#26343A",
  },

  progressFill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: ACCENT,
  },
});

export default styles;

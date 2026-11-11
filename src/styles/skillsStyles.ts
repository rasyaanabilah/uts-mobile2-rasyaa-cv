import { StyleSheet } from "react-native";

const ACCENT = "#10B981";
const SILVER = "#A1A1AA";

const styles = StyleSheet.create({
  sectionHeader: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    marginTop: 64,
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

  columnWrapper: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    columnGap: 14,
  },

  singleColumnCard: {
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
  },

  gridCard: {
    flex: 1,
  },

  skillCard: {
    minHeight: 112,
    justifyContent: "center",
    padding: 20,
    marginBottom: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.35)",
    borderRadius: 14,
    backgroundColor: "#101A18",
  },

  cardAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 3,
    height: "100%",
    backgroundColor: ACCENT,
    opacity: 0.8,
  },

  skillName: {
    color: "#F8FAFC",
    fontSize: 18,
    fontWeight: "800",
  },

  category: {
    alignSelf: "flex-start",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    overflow: "hidden",
    borderRadius: 12,
    backgroundColor: "rgba(16,185,129,0.12)",
    color: ACCENT,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});

export default styles;

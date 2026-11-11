import { StyleSheet } from "react-native";

const ACCENT = "#10B981";
const SILVER = "#A1A1AA";

const styles = StyleSheet.create({
  card: {
    minHeight: 220,
    padding: 22,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.32)",
    borderRadius: 16,
    backgroundColor: "#101A18",
  },

  gridCard: {
    flex: 1,
  },

  singleColumnCard: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
  },

  category: {
    color: ACCENT,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.8,
  },

  title: {
    color: "#F8FAFC",
    fontSize: 19,
    fontWeight: "900",
    marginTop: 12,
  },

  description: {
    color: SILVER,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
  },

  technologyList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 18,
  },

  technology: {
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: "rgba(16,185,129,0.12)",
    color: ACCENT,
    fontSize: 10,
    fontWeight: "700",
  },
});

export default styles;

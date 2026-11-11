
import { StyleSheet } from "react-native";

const ACCENT = "#10B981";
const SILVER = "#A1A1AA";

const styles = StyleSheet.create({
  introduction: {
    zIndex: 2,
  },

  introLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: ACCENT,
    letterSpacing: 3.2,
    marginBottom: 20,
  },

  introTitle: {
    fontWeight: "900",
    color: "#F8FAFC",
    letterSpacing: 2,
  },

  introTitleAccent: {
    color: ACCENT,
  },

  introLine: {
    width: 60,
    height: 4,
    backgroundColor: ACCENT,
    marginVertical: 22,
  },

  introProfession: {
    fontSize: 17,
    fontWeight: "700",
    color: "#F8FAFC",
    marginBottom: 14,
  },

  introDescription: {
    fontSize: 15,
    lineHeight: 26,
    color: SILVER,
    maxWidth: 480,
  },

  introTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
    marginTop: 22,
  },

  tag: {
    borderWidth: 1,
    borderColor: "#303944",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#151A21",
  },

  tagText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    color: ACCENT,
  },

  introFooter: {
    fontSize: 9,
    color: SILVER,
    letterSpacing: 2,
    marginTop: 30,
    opacity: 0.6,
  },
});

export default styles;

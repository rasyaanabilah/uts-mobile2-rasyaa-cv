import { StyleSheet } from "react-native";

const ACCENT = "#10B981";
const SILVER = "#A1A1AA";

const styles = StyleSheet.create({
  projectCount: {
    alignSelf: "flex-start",
    marginTop: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.3)",
    borderRadius: 20,
    backgroundColor: "rgba(16,185,129,0.08)",
    color: "#A7F3D0",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.4,
  },

  card: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.38)",
    borderRadius: 18,
    backgroundColor: "#101A18",
  },

  cardHovered: {
    borderColor: "rgba(16,185,129,0.75)",
    shadowColor: ACCENT,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 5,
  },

  cardAnimated: {
    width: "100%",
  },

  singleColumnCard: {
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
  },

  gridCard: {
    minWidth: 0,
  },

  thumbnail: {
    height: 154,
    justifyContent: "space-between",
    overflow: "hidden",
    padding: 18,
    borderBottomWidth: 1,
    backgroundColor: "#0B1211",
  },

  thumbnailAccent: {
    position: "absolute",
    top: -34,
    right: -24,
    width: 130,
    height: 130,
    borderRadius: 65,
    opacity: 0.14,
  },

  thumbnailNumber: {
    color: "#A1A1AA",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
  },

  thumbnailTitle: {
    maxWidth: "82%",
    color: "#F8FAFC",
    fontSize: 19,
    fontWeight: "900",
  },

  thumbnailArtwork: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 68,
    gap: 5,
  },

  artworkBlock: {
    width: 44,
    height: 34,
    marginBottom: 3,
    borderRadius: 8,
  },

  artworkLine: {
    width: "100%",
    height: 3,
    borderRadius: 2,
    opacity: 0.8,
  },

  artworkLineShort: {
    width: "62%",
    height: 3,
    borderRadius: 2,
    backgroundColor: "#71717A",
  },

  cardContent: {
    padding: 18,
  },

  cardMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  projectNumber: {
    color: ACCENT,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  category: {
    flexShrink: 1,
    color: ACCENT,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    textAlign: "right",
  },

  title: {
    color: "#F8FAFC",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 10,
  },

  description: {
    color: SILVER,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },

  technologyList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
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

  previewButton: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.5)",
    borderRadius: 10,
    backgroundColor: "rgba(16,185,129,0.1)",
  },

  previewButtonHovered: {
    borderColor: ACCENT,
    backgroundColor: "rgba(16,185,129,0.2)",
  },

  previewButtonPressed: {
    opacity: 0.75,
  },

  previewButtonDisabled: {
    borderColor: "rgba(161,161,170,0.25)",
    backgroundColor: "rgba(161,161,170,0.06)",
  },

  previewButtonText: {
    color: "#D1FAE5",
    fontSize: 13,
    fontWeight: "800",
  },

  previewButtonTextDisabled: {
    color: "#71717A",
  },

  previewArrow: {
    color: ACCENT,
    fontSize: 17,
    fontWeight: "800",
  },

  previewNote: {
    color: SILVER,
    fontSize: 11,
    marginTop: 7,
  },
});

export default styles;

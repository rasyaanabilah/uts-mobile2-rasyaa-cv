
import { StyleSheet } from "react-native";

const ACCENT = "#10B981";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080B10",
    position: "relative",
  },

  backgroundDecoration: {
    ...StyleSheet.absoluteFill,
    overflow: "hidden",
    zIndex: 0,
  },

  scrollContent: {
    flexGrow: 1,
    width: "100%",
    alignItems: "stretch",
    justifyContent: "center",
    paddingVertical: 50,
  },

  screenScroll: {
    flex: 1,
    width: "100%",
  },

  list: {
    width: "100%",
  },

  listHeader: {
    width: "100%",
    alignItems: "center",
  },

  listFooter: {
    width: "100%",
    alignItems: "center",
  },

  mainContent: {
    width: "100%",
    maxWidth: 1100,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  glowTopLeft: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: 200,
    backgroundColor: "#064E3B",
    opacity: 0.12,
    top: -160,
    left: -140,
  },

  circleRight: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: 250,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.08)",
    right: -220,
    top: "15%",
  },

  circleSmall: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.12)",
    right: 100,
    top: "20%",
  },

  verticalLineLeft: {
    position: "absolute",
    width: 1,
    height: 180,
    backgroundColor: "rgba(16,185,129,0.15)",
    left: 40,
    top: "25%",
  },

  verticalLineRight: {
    position: "absolute",
    width: 1,
    height: 120,
    backgroundColor: "rgba(16,185,129,0.2)",
    right: 45,
    bottom: "20%",
  },

  dotTop: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: ACCENT,
    top: "18%",
    right: "18%",
    opacity: 0.7,
  },

  dotBottom: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: ACCENT,
    bottom: "15%",
    left: "12%",
    opacity: 0.5,
  },

  gridDecoration: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    flexDirection: "row",
    justifyContent: "space-evenly",
    opacity: 0.12,
  },

  gridLine: {
    width: 1,
    height: "100%",
    backgroundColor: ACCENT,
  },

  bottomDecoration: {
    width: "100%",
    maxWidth: 1100,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    opacity: 0.5,
  },

  bottomLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#26343A",
  },

  bottomDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: ACCENT,
    marginLeft: 10,
  },
});

export default styles;

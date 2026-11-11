
import { StyleSheet } from "react-native";

const ACCENT = "#10B981";
const CARD_BG = "#151A21";
const SILVER = "#A1A1AA";

const styles = StyleSheet.create({
  section: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  stage: {
    position: "relative",
    alignSelf: "center",
    overflow: "visible",
  },

  rope: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 3,
    overflow: "visible",
  },

  card: {
    position: "absolute",
    left: 0,
    backgroundColor: CARD_BG,
    borderRadius: 15,
    padding: 12,
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#303944",
    elevation: 12,
    shadowColor: ACCENT,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 15,
    zIndex: 4,
  },

  clip: {
    position: "absolute",
    top: -8,
    left: "50%",
    marginLeft: -11,
    width: 22,
    height: 16,
    borderWidth: 3,
    borderColor: "#777777",
    borderRadius: 5,
    backgroundColor: "#999999",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  clipInner: {
    width: 8,
    height: 6,
    backgroundColor: CARD_BG,
    borderRadius: 2,
  },

  cardTop: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    zIndex: 2,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: ACCENT,
    marginRight: 6,
  },

  headerText: {
    fontSize: 8,
    color: SILVER,
    letterSpacing: 0.8,
    fontWeight: "700",
    flex: 1,
  },

  version: {
    fontSize: 8,
    color: ACCENT,
    fontWeight: "800",
  },

  photoContainer: {
    marginTop: 10,
    zIndex: 2,
  },

  photoBorder: {
    width: 96,
    height: 96,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: ACCENT,
    padding: 3,
    backgroundColor: "#1C252D",
  },

  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 55,
  },

  photoCornerTL: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 14,
    height: 14,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: ACCENT,
  },

  photoCornerBR: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: ACCENT,
  },

  name: {
    marginTop: 12,
    fontWeight: "900",
    color: "#F8FAFC",
    textAlign: "center",
    letterSpacing: 0.5,
    zIndex: 2,
  },

  profession: {
    fontSize: 10,
    color: SILVER,
    marginTop: 4,
    zIndex: 2,
    textAlign: "center",
  },

  divider: {
    width: "85%",
    height: 1,
    backgroundColor: "#303944",
    marginVertical: 12,
  },

  nimLabel: {
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: SILVER,
    zIndex: 2,
  },

  nim: {
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 2,
    color: ACCENT,
    marginTop: 6,
    zIndex: 2,
  },

  barcode: {
    flexDirection: "row",
    height: 23,
    alignItems: "center",
    marginTop: 10,
    zIndex: 2,
  },

  barcodeLine: {
    height: 20,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 1.5,
  },

  cardFooter: {
    position: "absolute",
    bottom: 14,
    left: 12,
    right: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
  },

  footerLabel: {
    fontSize: 7,
    color: SILVER,
    letterSpacing: 1,
    marginBottom: 3,
  },

  footerText: {
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 0.5,
    color: "#F8FAFC",
  },

  footerStatus: {
    flexDirection: "row",
    alignItems: "center",
  },

  activeText: {
    fontSize: 8,
    fontWeight: "800",
    color: ACCENT,
    letterSpacing: 0.5,
  },
});

export default styles;

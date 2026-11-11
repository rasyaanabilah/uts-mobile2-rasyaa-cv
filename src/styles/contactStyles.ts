import { StyleSheet } from "react-native";

const ACCENT = "#10B981";
const SILVER = "#A1A1AA";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 720,
    marginTop: 64,
    padding: 24,
    borderWidth: 1,
    borderColor: "#26343A",
    borderRadius: 18,
    backgroundColor: "#10151C",
    zIndex: 2,
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
    marginBottom: 24,
  },

  field: {
    marginBottom: 16,
  },

  label: {
    color: "#F8FAFC",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
  },

  input: {
    width: "100%",
    minHeight: 48,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#303944",
    borderRadius: 10,
    backgroundColor: "#080B10",
    color: "#F8FAFC",
    fontSize: 14,
  },

  messageInput: {
    minHeight: 120,
  },

  error: {
    color: "#F87171",
    fontSize: 12,
    marginTop: 6,
  },

  submitButton: {
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: ACCENT,
  },

  submitButtonPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },

  submitText: {
    color: "#052E24",
    fontSize: 14,
    fontWeight: "900",
  },

  feedback: {
    color: ACCENT,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 14,
  },
});

export default styles;

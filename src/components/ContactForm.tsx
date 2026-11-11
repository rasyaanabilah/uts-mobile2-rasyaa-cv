import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "../styles/contactStyles";
import {
  validateContactValues,
} from "../utils/contactValidation";
import type {
  ContactErrors,
  ContactField,
  ContactValues,
} from "../utils/contactValidation";

type FeedbackStatus = "idle" | "error" | "success";

const EMPTY_VALUES: ContactValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedbackStatus, setFeedbackStatus] =
    useState<FeedbackStatus>("idle");

  const updateField = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
    setFeedbackStatus("idle");
  };

  const handleSubmit = () => {
    const nextErrors = validateContactValues(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFeedbackStatus("error");
      return;
    }

    setFeedbackStatus("success");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>LET&apos;S CONNECT</Text>
      <Text style={styles.title}>Contact Me</Text>
      <Text style={styles.description}>
        Punya pertanyaan atau ingin berkolaborasi? Kirim pesan melalui formulir ini.
      </Text>

      <View style={styles.field}>
        <Text style={styles.label}>Nama</Text>
        <TextInput
          accessibilityLabel="Nama"
          accessibilityHint="Nama wajib diisi."
          style={styles.input}
          value={values.name}
          onChangeText={(value) => updateField("name", value)}
          placeholder="Masukkan nama"
          placeholderTextColor="#9CA3AF"
          autoCapitalize="words"
          returnKeyType="next"
        />
        {errors.name ? (
          <Text
            accessibilityRole="alert"
            accessibilityLiveRegion="polite"
            style={styles.error}
          >
            {errors.name}
          </Text>
        ) : null}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          accessibilityLabel="Email"
          accessibilityHint="Masukkan alamat email dengan format yang valid."
          style={styles.input}
          value={values.email}
          onChangeText={(value) => updateField("email", value)}
          placeholder="nama@email.com"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />
        {errors.email ? (
          <Text
            accessibilityRole="alert"
            accessibilityLiveRegion="polite"
            style={styles.error}
          >
            {errors.email}
          </Text>
        ) : null}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Pesan</Text>
        <TextInput
          accessibilityLabel="Pesan"
          accessibilityHint="Pesan wajib diisi."
          style={[styles.input, styles.messageInput]}
          value={values.message}
          onChangeText={(value) => updateField("message", value)}
          placeholder="Tulis pesan kamu..."
          placeholderTextColor="#9CA3AF"
          multiline
          textAlignVertical="top"
        />
        {errors.message ? (
          <Text
            accessibilityRole="alert"
            accessibilityLiveRegion="polite"
            style={styles.error}
          >
            {errors.message}
          </Text>
        ) : null}
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Kirim pesan"
        accessibilityHint="Memvalidasi formulir kontak. Pesan tidak dikirim ke server."
        onPress={handleSubmit}
        style={({ pressed }) => [
          styles.submitButton,
          pressed && styles.submitButtonPressed,
        ]}
      >
        <Text style={styles.submitText}>Kirim Pesan</Text>
      </Pressable>

      {feedbackStatus !== "idle" ? (
        <Text
          accessibilityRole="alert"
          accessibilityLiveRegion="polite"
          style={[
            styles.feedback,
            feedbackStatus === "error" && styles.error,
          ]}
        >
          {feedbackStatus === "error"
            ? "Periksa kembali data yang ditandai sebelum mengirim."
            : "Pesan berhasil diproses secara lokal. Formulir ini belum mengirim data ke server."}
        </Text>
      ) : null}
    </View>
  );
}

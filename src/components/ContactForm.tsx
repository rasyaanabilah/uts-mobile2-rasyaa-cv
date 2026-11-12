import React, { useState } from "react";
import {
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Linking from "expo-linking";
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

type ContactFormProps = {
  embedded?: boolean;
};

export default function ContactForm({ embedded = false }: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedbackStatus, setFeedbackStatus] =
    useState<FeedbackStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

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

  const handleSubmit = async () => {
    const nextErrors = validateContactValues(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFeedbackStatus("error");
      setFeedbackMessage("Periksa kembali data yang ditandai sebelum mengirim.");
      return;
    }

    const subject = "Pesan dari formulir kontak";
    const body = [
      `Nama: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      "",
      values.message.trim(),
    ].join("\n");
    const emailUrl =
      Platform.OS === "web"
        ? `https://mail.google.com/mail/?view=cm&fs=1&to=nlabilahrasyaa%40gmail.com` +
          `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        : `mailto:nlabilahrasyaa@gmail.com?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(body)}`;

    try {
      await Linking.openURL(emailUrl);
      setFeedbackStatus("success");
      setFeedbackMessage(
        Platform.OS === "web"
          ? "Halaman tulis email Gmail dibuka. Tinjau pesan lalu tekan Kirim di Gmail."
          : "Aplikasi email terbuka dengan pesan ini. Tekan Kirim di aplikasi email untuk mengirimnya.",
      );
    } catch {
      setFeedbackStatus("error");
      setFeedbackMessage(
        Platform.OS === "web"
          ? "Gmail tidak dapat dibuka. Periksa koneksi internet atau coba masuk ke akun Gmail di browser."
          : "Aplikasi email tidak dapat dibuka. Pastikan perangkat memiliki aplikasi email yang tersedia.",
      );
    }
  };

  return (
    <View style={[styles.container, embedded && { marginTop: 0 }]}>
      <Text style={styles.eyebrow}>LET&apos;S CONNECT</Text>
      <Text style={styles.title}>Contact Me</Text>
      <Text style={styles.description}>
        Punya pertanyaan atau ingin berkolaborasi? Isi formulir ini untuk membuka
        aplikasi email dan menyiapkan pesan untuk saya.
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
        accessibilityHint="Membuka aplikasi email dengan pesan yang ditujukan ke nlabilahrasyaa@gmail.com."
        onPress={() => void handleSubmit()}
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
          {feedbackMessage}
        </Text>
      ) : null}
    </View>
  );
}

export type ContactValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactField = keyof ContactValues;
export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactValues(
  values: ContactValues,
): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name.trim()) {
    errors.name = "Nama wajib diisi.";
  }

  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Masukkan alamat email dengan format yang valid.";
  }

  if (!values.message.trim()) {
    errors.message = "Pesan wajib diisi.";
  }

  return errors;
}

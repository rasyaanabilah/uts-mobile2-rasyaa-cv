import type profileJson from "./profile.json";
import type { ImageSourcePropType } from "react-native";

export type ProfileData = Omit<typeof profileJson, "photo"> & {
  photo: ImageSourcePropType;
};

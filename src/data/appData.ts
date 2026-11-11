import type { ImageSourcePropType } from "react-native";
import academicJson from "./academic.json";
import portfolioJson from "./portfolio.json";
import profileJson from "./profile.json";
import skillsJson from "./skills.json";
import type { AcademicData } from "./academicTypes";
import type { PortfolioProject } from "./portfolioTypes";
import type { ProfileData } from "./profileTypes";
import type { Skill } from "./skillTypes";

function resolveProfilePhoto(photo: string): ImageSourcePropType | null {
  if (photo === "foto-profil.jpg") {
    return require("../../assets/foto-profil.jpg");
  }

  return null;
}

const profilePhoto = resolveProfilePhoto(profileJson.photo);

export const profileData: ProfileData | null =
  profilePhoto &&
  profileJson.name.trim() &&
  profileJson.nim.trim() &&
  profileJson.profession.trim() &&
  profileJson.description.trim() &&
  profileJson.university.trim() &&
  profileJson.status.trim() &&
  profileJson.version.trim() &&
  Array.isArray(profileJson.tags)
    ? { ...profileJson, photo: profilePhoto }
    : null;

export const skills: Skill[] = skillsJson;
export const academicData: AcademicData = academicJson;
export const portfolio: PortfolioProject[] = portfolioJson;

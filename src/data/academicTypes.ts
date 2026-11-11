export type LearningProgress = {
  id: string;
  label: string;
  percentage: number;
};

export type AcademicData = {
  student: {
    name: string;
    nim: string;
  };
  course: string;
  instructor: string;
  currentScore: {
    value: number;
    grade: string;
  };
  learningPoints: number;
  learningProgress: LearningProgress[];
};

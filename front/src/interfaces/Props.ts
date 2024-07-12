import { Job } from "./Job";
import { Resume } from "./Resume";

export interface SectionProps {
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface JobItemProps {
  data: Job;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface ResumeItemProps {
  data: Resume;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}
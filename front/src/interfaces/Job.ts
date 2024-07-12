export interface Job {
  id: number;
  title: string;
  description: string;
  rate: number;
  jobType: JobType;
  condition: Condition;
  skills: string[];
  responsibilities: string[];
}

export enum JobType {
  FULLTIME = "FULLTIME",
  PARTTIME = "PARTTIME",
  CONTRACTOR = "CONTRACTOR",
}

export enum Condition {
  ONSITE = "ONSITE",
  REMOTE = "REMOTE",
  HYBRID = "HYBRID",
}

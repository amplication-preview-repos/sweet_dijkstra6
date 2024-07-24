import { Branch } from "../branch/Branch";

export type Repository = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  sshUrl: string | null;
  branches?: Array<Branch>;
};

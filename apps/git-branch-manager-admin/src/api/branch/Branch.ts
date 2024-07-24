import { Repository } from "../repository/Repository";

export type Branch = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  lastCommit: string | null;
  repository?: Repository | null;
};

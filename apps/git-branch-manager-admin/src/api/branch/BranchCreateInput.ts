import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type BranchCreateInput = {
  name?: string | null;
  lastCommit?: string | null;
  repository?: RepositoryWhereUniqueInput | null;
};

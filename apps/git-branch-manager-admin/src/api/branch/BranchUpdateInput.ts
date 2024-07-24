import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type BranchUpdateInput = {
  name?: string | null;
  lastCommit?: string | null;
  repository?: RepositoryWhereUniqueInput | null;
};

import { BranchCreateNestedManyWithoutRepositoriesInput } from "./BranchCreateNestedManyWithoutRepositoriesInput";

export type RepositoryCreateInput = {
  name?: string | null;
  sshUrl?: string | null;
  branches?: BranchCreateNestedManyWithoutRepositoriesInput;
};

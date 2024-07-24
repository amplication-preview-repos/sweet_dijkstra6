import { BranchUpdateManyWithoutRepositoriesInput } from "./BranchUpdateManyWithoutRepositoriesInput";

export type RepositoryUpdateInput = {
  name?: string | null;
  sshUrl?: string | null;
  branches?: BranchUpdateManyWithoutRepositoriesInput;
};

import { SortOrder } from "../../util/SortOrder";

export type BranchOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  lastCommit?: SortOrder;
  repositoryId?: SortOrder;
};

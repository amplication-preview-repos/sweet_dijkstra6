import { Branch as TBranch } from "../api/branch/Branch";

export const BRANCH_TITLE_FIELD = "name";

export const BranchTitle = (record: TBranch): string => {
  return record.name?.toString() || String(record.id);
};

import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  commandText?: SortOrder;
  output?: SortOrder;
  executedAt?: SortOrder;
};

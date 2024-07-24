import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type BranchWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  lastCommit?: StringNullableFilter;
  repository?: RepositoryWhereUniqueInput;
};

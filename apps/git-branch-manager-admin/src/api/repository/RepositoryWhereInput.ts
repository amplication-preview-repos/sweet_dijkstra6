import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BranchListRelationFilter } from "../branch/BranchListRelationFilter";

export type RepositoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  sshUrl?: StringNullableFilter;
  branches?: BranchListRelationFilter;
};

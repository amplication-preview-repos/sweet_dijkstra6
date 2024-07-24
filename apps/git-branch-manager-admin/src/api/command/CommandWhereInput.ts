import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommandWhereInput = {
  id?: StringFilter;
  commandText?: StringNullableFilter;
  output?: StringNullableFilter;
  executedAt?: DateTimeNullableFilter;
};

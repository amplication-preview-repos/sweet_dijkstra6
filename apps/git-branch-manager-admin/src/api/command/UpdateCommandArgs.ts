import { CommandWhereUniqueInput } from "./CommandWhereUniqueInput";
import { CommandUpdateInput } from "./CommandUpdateInput";

export type UpdateCommandArgs = {
  where: CommandWhereUniqueInput;
  data: CommandUpdateInput;
};

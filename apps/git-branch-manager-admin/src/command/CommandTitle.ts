import { Command as TCommand } from "../api/command/Command";

export const COMMAND_TITLE_FIELD = "commandText";

export const CommandTitle = (record: TCommand): string => {
  return record.commandText?.toString() || String(record.id);
};

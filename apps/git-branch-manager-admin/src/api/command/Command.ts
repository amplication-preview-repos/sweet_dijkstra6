export type Command = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  commandText: string | null;
  output: string | null;
  executedAt: Date | null;
};

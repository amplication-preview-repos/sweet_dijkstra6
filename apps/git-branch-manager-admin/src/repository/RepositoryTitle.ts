import { Repository as TRepository } from "../api/repository/Repository";

export const REPOSITORY_TITLE_FIELD = "name";

export const RepositoryTitle = (record: TRepository): string => {
  return record.name?.toString() || String(record.id);
};

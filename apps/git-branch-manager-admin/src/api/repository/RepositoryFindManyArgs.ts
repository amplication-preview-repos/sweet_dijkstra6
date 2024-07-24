import { RepositoryWhereInput } from "./RepositoryWhereInput";
import { RepositoryOrderByInput } from "./RepositoryOrderByInput";

export type RepositoryFindManyArgs = {
  where?: RepositoryWhereInput;
  orderBy?: Array<RepositoryOrderByInput>;
  skip?: number;
  take?: number;
};

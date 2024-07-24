import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RepositoryService } from "./repository.service";
import { RepositoryControllerBase } from "./base/repository.controller.base";

@swagger.ApiTags("repositories")
@common.Controller("repositories")
export class RepositoryController extends RepositoryControllerBase {
  constructor(
    protected readonly service: RepositoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

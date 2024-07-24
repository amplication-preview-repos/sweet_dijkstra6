import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommandService } from "./command.service";
import { CommandControllerBase } from "./base/command.controller.base";

@swagger.ApiTags("commands")
@common.Controller("commands")
export class CommandController extends CommandControllerBase {
  constructor(
    protected readonly service: CommandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
